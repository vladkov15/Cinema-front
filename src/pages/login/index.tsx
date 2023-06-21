import LoginForm, { UserSignIn } from '@/components/LoginForm';
import styles from '../../components/LoginForm/LoginForm.module.scss';
import Image from 'next/image';
import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { User } from '@/models/models';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export interface LoginFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<User>();
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
    const result = await signIn('credentials', {
      email: item.email,
      password: item.password,
      redirect: true,
      callbackUrl: `${backUrl}`,
    });
  };

  return (
    <div className={styles.LoginPage}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmitHandler)}>
        {dataUser && (
          <>
            <div className={styles.loginForm__formGroup}>
              <label htmlFor="firstName">First Name:</label>
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
              <label htmlFor="lastName">Last Name:</label>
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
        )}

        <div className={styles.loginForm__formGroup}>
          <div onClick={() => router.back()} className={styles.Image}>
            <Image src={'./arrow.svg'} alt={'back to page'} width={50} height={50} />
          </div>
          <h1>Вход</h1>
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
        <button type="submit">Вход</button>
      </form>
    </div>
  );
};

export default LoginPage;
function useFetchForLoginMutation(arg0: { variables: { email: string; password: string } }) {
  throw new Error('Function not implemented.');
}
