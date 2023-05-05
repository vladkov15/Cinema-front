import { FC, ReactNode } from 'react';

import Header from './Header/Header';
import Footer from './Footer.tsx/Footer';

import styles from './DefaultLayuout.module.scss'

interface DefaultLayoutProps {
  children: ReactNode;
}

const handleButtonClick = (label: string) => {
 
};
const buttons = [
  { label: 'Связаться с нами', url: 'mailto:Egoryusss@gmail.com' },
  
];

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className={styles.DefaultLayout}>
    <div style={{
          backgroundImage: `url(http://localhost:7000/images/background.jpg)`,
          backgroundSize: 'cover',
          
          height: '1145px',
          width: '100%',
        }}>
      <Header />
      {children}
      <Footer buttons={buttons} />
    </div>
    </div>
  );
};

export default DefaultLayout;
