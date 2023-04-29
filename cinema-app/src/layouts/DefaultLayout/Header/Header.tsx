import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession,  } from 'next-auth/react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const { data: session } = useSession();

  function onSearchSubmit(searchValue: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <header className={styles.header}>
      <button
        className={styles.header__button}
        onClick={() => {
          router.push('/afisha');
        }}
      >
        Афиша
      </button>
      <button
        className={styles.header__button}
        onClick={() => {
          router.push('/info');
        }}
      >
        Инфо
      </button>
      <button
        className={styles.header__button}
        onClick={() => {
          router.push('/profile');
        }}
      >
        Профиль
      </button>
      {session?.user ? (
        <>
          <p className={styles.header__button}>{session.user.email}</p>
          <button onClick={() => signOut()}>Выйти</button>
        </>
      ) : (
        <button className={styles.header__button} onClick={() => signIn()}>Войти</button>
      )}
      
    </header>
  );
};

export default Header;
