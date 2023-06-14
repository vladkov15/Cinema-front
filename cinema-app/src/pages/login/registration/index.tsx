import { SessionProvider, signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import styles from '../../../components/LoginForm/LoginForm.module.scss';
import Image from 'next/image';
import { userApii } from '@/services/UserService';
import { User } from '@/models/models';
import { Router, useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { setupStore } from '@/app/store';
const store = setupStore();
export interface LoginFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegistrationPage = () => {
  const router = useRouter();
  const [createUser, {}] = userApii.useFetchForLoginMutation();
  const backUrl = router.query.callbackUrl;
  console.log(backUrl);

  var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>();
  const onSubmitHandler = async (item: LoginFormValues) => {
    await createUser({
      name: item.firstName,
      second_name: item.lastName,
      email: item.email,
      password: item.password,
    });
    setTimeout(() => {
      router.push(`/`);
    }, 2000);
  };
  return (
    <div>
      <div className={styles.LoginPage}>
        

        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmitHandler)}>
          <>
          <div onClick={() => router.back()} className={styles.Image}>
          <Image src={'../arrow.svg'} alt={'back to page'} width={50} height={50} />
        </div>
            <h1>Регистрация</h1>
            <div className={styles.loginForm__formGroup}>
              <label htmlFor="firstName">Имя:</label>
              <input
                {...register('firstName', { required: true })}
                type="text"
                id="firstName"
                name="firstName"
              />
              {errors.firstName && (
                <span className={styles.loginForm__error}>First name is required</span>
              )}
            </div>
            <div className={styles.loginForm__formGroup}>
              <label htmlFor="lastName">Фамилия:</label>
              <input
                {...register('lastName', { required: true })}
                type="text"
                id="lastName"
                name="lastName"
              />
              {errors.lastName && (
                <span className={styles.loginForm__error}>Last name is required</span>
              )}
            </div>
          </>

          <div className={styles.loginForm__formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              {...register('email', { required: true, pattern: email })}
              type="email"
              id="email"
              name="email"
            />
            {errors.email && errors.email.type === 'required' && (
              <span className={styles.loginForm__error}>Email is required</span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span className={styles.loginForm__error}>Invalid email format</span>
            )}
          </div>
          <div className={styles.loginForm__formGroup}>
            <label htmlFor="password">Пароль:</label>
            <input
              {...register('password', { required: true, minLength: 6 })}
              type="password"
              id="password"
              name="password"
            />
            {errors.password && errors.password.type === 'required' && (
              <span className={styles.loginForm__error}>Password is required</span>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <span className={styles.loginForm__error}>
                Password must be at least 6 characters long
              </span>
            )}
          </div>
          <button type="submit">Регистрация</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
