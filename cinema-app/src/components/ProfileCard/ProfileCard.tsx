import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ProfileCard.module.scss';
import { User } from '@/models/models';
import { useSession } from 'next-auth/react';
import { userApii } from '@/services/UserService';

interface Props {
  data: User;
}

interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
  newName: string;
  newLastName: string;
}

const Profile: React.FC<Props> = ({ data }) => {
  const { register, handleSubmit, reset } = useForm<PasswordFormData>();
  const { data: sessionData } = useSession();
  const { data: userData } = userApii.useFetchOneUsersQuery(sessionData?.user?.email!);
  const [changePassword] = userApii.usePatchUserMutation();

  const onSubmit1 = async (formData: PasswordFormData) => {
    let newUser;
    if (formData.oldPassword === userData?.password) {
      newUser = await changePassword({
        id: userData?.id,
        name: userData?.name,
        second_name: userData?.second_name,
        email: userData?.email,
        password: formData.newPassword,
      });
      alert('Пароль изменен!');
    } else {
      alert('Проверьте пароль');
    }
    reset();
  };
  const onSubmit2 = async (formData: PasswordFormData) => {
    let newUser;

    newUser = await changePassword({
      id: userData?.id,
      name: formData.newName,
      second_name: formData.newLastName,
      email: userData?.email,
      password: userData?.password,
    });
    alert('Измененно');
    reset();
  };

  return (
    <div className={styles.container}>
      <h1>
        Привет! {data.name} {data.second_name}
      </h1>
      <form className={styles.container__form} onSubmit={handleSubmit(onSubmit1)}>
        <label htmlFor="oldPassword">Смена пароля:</label>
        <p>Введите старый пароль:</p>
        <input type="password" id="oldPassword" {...register('oldPassword')} />
        <p>Введите новый пароль:</p>
        <input type="password" id="newPassword" {...register('newPassword')} />
        <button type="submit">Сохранить</button>
      </form>
      <div className={styles.container__line}></div>
      <form className={styles.container__form} onSubmit={handleSubmit(onSubmit2)}>
        <label htmlFor="oldPassword">Смена никнейма:</label>
        <p>Введите новое имя:</p>
        <input type="text" id="newName" {...register('newName')} />
        <p>Введите новое фамилию:</p>
        <input type="text" id="newLastName" {...register('newLastName')} />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default Profile;
