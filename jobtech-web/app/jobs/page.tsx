import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Jobs = () => {
  // throw new Error('Error zxcv');
  return (
    <>
      <main className={inter.className}>
        <h1>All Jobs</h1>
        <Link href="/">Home</Link>
      </main>
    </>
  );
};

export default Jobs;
