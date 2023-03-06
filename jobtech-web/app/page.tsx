import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <h1>JobTech</h1>
        <Link href="/jobs">Job</Link>
      </div>
    </main>
  );
}
