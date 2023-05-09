import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './MovieForm.module.scss';
import { filmApi } from '@/services/FilmService';
import { useRouter } from 'next/router';

interface MovieFormData {
  title: string;
  description: string;
  rating: number;
  picture: FileList;
}
interface ImageFormData extends FormData {
  append(name: 'image', value: File): void;
}

const sendImage = async (picture: File) => {
  const formData = new FormData() as ImageFormData;
  formData.append('image', picture);

  try {
    const response = await fetch('http://localhost:7000/images', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Image uploaded successfully');
    } else {
      console.error('Failed to upload image');
    }
  } catch (error) {
    console.error('Failed to upload image', error);
  }
};

export default function MovieForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFormData>();
  const [picturePreview, setPicturePreview] = useState<string | null>(null);
  const [pictureName, setPictureName] = useState<string>('');
  const [picturee, setPicture] = useState<File>();
  const [createFilm, {}] = filmApi.useCreateFilmMutation();
  const router = useRouter()

  const handlePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPicturePreview(reader.result as string);
        setPictureName(file.name);
        setPicture(file);
      };
    }
  };
  const onSubmit = async (data: MovieFormData) => {
    sendImage(picturee!);
    await createFilm({
      title: data.title,
      description: data.description,
      rating: `${data.rating}`,
      poster_url: pictureName
    })
    await router.push('/admin')
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="title">Название</label>
        <input type="text" id="title" {...register('title', { required: true })} />
        {errors.title && <span className={styles.error}>This field is required</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="description">Описание</label>
        <textarea id="description" {...register('description', { required: true })} />
        {errors.description && <span className={styles.error}>This field is required</span>}
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Рейтинг</label>
        <input
          type=""
          id="rating"
          {...register('rating', { required: true, min: 1.0, max: 10.0 })}
        />
        {errors.rating && errors.rating.type === 'required' && (
          <span className={styles.error}>This field is required</span>
        )}
        {errors.rating && errors.rating.type === 'min' && (
          <span className={styles.error}>The rating must be at least 1</span>
        )}
        {errors.rating && errors.rating.type === 'max' && (
          <span className={styles.error}>The rating must be at most 10</span>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="picture">Постер</label>
        <input type="file" id="picture" accept="image/*" onChange={handlePictureChange} />
        {picturePreview && (
          <div className={styles.picturePreview}>
            <img src={picturePreview} alt="Movie poster preview" />
            <span>{pictureName}</span>
          </div>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
          Добавить фильм
      </button>
    </form>
  );
}
