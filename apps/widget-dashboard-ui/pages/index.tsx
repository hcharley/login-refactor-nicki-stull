import { Dashboard } from '@widget-inc/ui';
import { UserData } from './api/login';

interface PageProps {
  user: UserData;
}

export function Index({ user }: PageProps) {
  return <Dashboard user={user} />;
}

export default Index;
