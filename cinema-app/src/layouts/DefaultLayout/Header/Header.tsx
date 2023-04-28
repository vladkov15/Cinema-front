import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter()

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearchSubmit(searchValue);
  };

  function onSearchSubmit(searchValue: string) {
    throw new Error('Function not implemented.');
  }


  return (
    <header className={styles.header}>
      <button className={styles.header__button} onClick={() => {router.push('/afisha')}}>
        Афиша
      </button>
      <button className={styles.header__button} onClick={() => {router.push('/info')}}>
        Инфо
      </button>
      <button className={styles.header__button} onClick={() => {router.push('/profile')}}>
        Профиль
      </button>
      
    </header>
  );
};

export default Header;
