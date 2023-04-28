import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import Header from './Header/Header';
import Footer from './Footer.tsx/Footer';
import { setupStore } from '@/app/store';
import { Provider } from 'react-redux';

interface DefaultLayoutProps {
  children: ReactNode;
}

const handleButtonClick = (label: string) => {
  console.log(`Button ${label} was clicked.`);
};
const buttons = [
  { label: 'Button 1', onClick: () => handleButtonClick('Button 1') },
  { label: 'Button 2', onClick: () => handleButtonClick('Button 2') },
  { label: 'Button 3', onClick: () => handleButtonClick('Button 3') },
];

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer buttons={buttons} />
    </div>
  );
};

export default DefaultLayout;
