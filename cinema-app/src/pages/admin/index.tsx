import { useForm } from 'react-hook-form';
import styles from "./LoginFormAdmin.module.scss"
import { useRouter } from 'next/router';

type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginFormAdmin = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const router = useRouter()
  const onSubmit = (data: LoginFormInputs) => {
    if(data.username == 'admin' && data.password == 'admin'){
      router.push("/adminpage")
    }
  };

  return (
    <div className={styles.block}>
    <form className={styles.block_center} onSubmit={handleSubmit(onSubmit)}>
       <div className={styles.loginForm__formGroup}>
        <h1>Вход</h1>
          <label htmlFor="username">пользователь:</label>
          <input
            {...register('username', { required: true })}
            type="password"
            id="username"
            name="username"
          />
        </div>
        <div className={styles.loginForm__formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            {...register('password', { required: true })}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit">Вход</button>
    </form>
    </div>
  );
};

export default LoginFormAdmin;
