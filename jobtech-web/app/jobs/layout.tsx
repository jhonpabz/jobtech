import styles from './styles.module.css';

export const metadata = {
  title: 'Jobs',
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Jobs NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
