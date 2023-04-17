import React, { useState } from 'react';
import styles from './ProfileLayout.module.scss';
import DefaultLayout from '../DefaultLayout';

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
    activeContent = <h1>Profile Information</h1>;
  } else if (activeNavItem === 'tickets') {
    activeContent = <h1>Booked Tickets</h1>;
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
            Profile
          </li>
          <li
            className={activeNavItem === 'tickets' ? styles.active : ''}
            onClick={() => handleNavItemClick('tickets')}
          >
            Tickets
          </li>
        </ul>
      </nav>
      <div className={styles['profile-content']}>{activeContent}</div>
    </div>
    </DefaultLayout>
  );
};

export default ProfileLayout;