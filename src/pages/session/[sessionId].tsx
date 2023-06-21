import Session from '@/components/Session/Session';
import DefaultLayout from '@/layouts/DefaultLayout';
import { useRouter } from 'next/router';

const SessionId = () => {
  return (
    <DefaultLayout>
      <Session  />;
    </DefaultLayout>
  );
};

export default SessionId;
