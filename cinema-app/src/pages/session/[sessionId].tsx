import Session from '@/components/Session/Session';
import { useRouter } from 'next/router';

const SessionId = () => {
  const router = useRouter();
  const { sessionId } = router.query
  return <Session numRows={2} seatsPerRow={5} id={`${sessionId}`} />;
};

export default SessionId
