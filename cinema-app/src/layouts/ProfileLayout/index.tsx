import React, { useState } from 'react';
import styles from './ProfileLayout.module.scss';
import DefaultLayout from '../DefaultLayout';
import Profile from '@/components/ProfileCard/ProfileCard';
import { User } from '@/models/models';
import ProfileTicket from '@/components/ProfileTickets/ProfileTickets';

const template: User = {
  id: 1,
  email: 'emcvkem' ,
  name: 'vlad',
  second_name: 'kovalev',
  password: 'dovmvdm' 
}

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState('profile');

  const handleNavItemClick = (navItem: string) => {
    setActiveNavItem(navItem);
  };

  let activeContent;
  if (activeNavItem === 'profile') {
    activeContent = <Profile data={template} />;
  } else if (activeNavItem === 'tickets') {
    activeContent = <ProfileTicket user={template} />;
  }

  return (
    <DefaultLayout>
    <div className={styles['profile-layout']}>
      <nav className={styles['profile-nav']}>
        <ul>
          <li
            className={activeNavItem === 'profile' ? styles.active : ''}
            onClick={() => handleNavItemClick('profile')}
          >
            Настройки профиля
          </li>
          <li
            className={activeNavItem === 'tickets' ? styles.active : ''}
            onClick={() => handleNavItemClick('tickets')}
          >
            Билеты
          </li>
        </ul>
      </nav>
      <div className={styles['profile-content']}>{activeContent}</div>
    </div>
    </DefaultLayout>
  );
};

export default ProfileLayout;