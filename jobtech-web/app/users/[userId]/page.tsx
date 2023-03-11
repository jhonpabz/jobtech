import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from './component/UserPosts';

type Params = {
  params: {
    userId: string;
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
