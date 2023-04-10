import { useForm } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { FC } from 'react';

interface LoginFormProps {
  find: boolean;
}

interface LoginFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ find }) => {
  var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>();

  const onSubmitHandler = (data: LoginFormValues) => {
    reset;
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmitHandler)}>
      {!find && (
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
        <label htmlFor="password">Password:</label>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
