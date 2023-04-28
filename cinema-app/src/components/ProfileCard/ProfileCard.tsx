import React, { useState } from 'react';
import styles from './ProfileCard.module.scss';
import { User } from '@/models/models';

interface Props {
  data: User
}

const Profile: React.FC<Props> = ({data}) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit password change to server
  };

  return (
    <div className={styles.container}>
      <h1>Привет! {data.name} {data.second_name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Смена пароля:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">SСохранить</button>
      </form>
    </div>
  );
};

export default Profile;