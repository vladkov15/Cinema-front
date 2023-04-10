import LoginForm from '@/components/LoginForm';
import styles from './LoginPage.module.scss';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
        <div className={styles.loginPage__header}>
            <Image src={'./arrow.svg'} alt={'ох ебать не работает'} width={100} height={100} />
        </div>
      <LoginForm find={true} />
    </div>
  );
};

export default LoginPage;
