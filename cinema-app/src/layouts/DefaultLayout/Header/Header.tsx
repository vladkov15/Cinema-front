import React, { useState } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState('');

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

  function onAfishaClick(): void {
    throw new Error('Function not implemented.');
  }

  function onInfoClick(): void {
    throw new Error('Function not implemented.');
  }

  function onProfileClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className={styles.header}>
      <button className={styles.header__button} onClick={onAfishaClick}>
        Афиша
      </button>
      <button className={styles.header__button} onClick={onInfoClick}>
        Инфо
      </button>
      <button className={styles.header__button} onClick={onProfileClick}>
        Профиль
      </button>
      <form className={styles.header__searchForm} onSubmit={handleSearchSubmit}>
        <input
          className={styles.header__searchInput}
          type="text"
          placeholder="Поиск"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button className={styles.header__searchButton} type="submit">
          <i></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
