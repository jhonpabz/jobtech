'use server';

// export const metadata = {
//   title: 'Register',
// };

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Jobs NavBar</nav>

      <main>{children}</main>
    </>
  );
}
