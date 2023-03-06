import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1>JobTech</h1>
      <Link href="/jobs">Job</Link>
    </main>
  );
}
