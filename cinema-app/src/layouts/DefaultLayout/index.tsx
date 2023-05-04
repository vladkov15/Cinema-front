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
 
};
const buttons = [
  { label: 'Связаться с нами', url: 'mailto:Egoryusss@gmail.com' },
  
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
