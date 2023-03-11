import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;
  console.log('users: ', users);

  const content = (
    <div>
      <h1>
        <Link href="/">Back to Home</Link>
      </h1>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </div>
  );

  return content;
};

export default UsersPage;
