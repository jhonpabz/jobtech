import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div>
        <h1>JobTech</h1>
        <Link href="/jobs">Job</Link>
        <Link href="/users">Users</Link>
        <Link href="/landing">Landing Page</Link>
        <Link href="/register">Register Page</Link>
      </div>
    </main>
  );
}
