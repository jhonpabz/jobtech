import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage = () => {
  const usersData: Promise<> = getAllUsers();
  return <div>UsersPage</div>;
};

export default UsersPage;
