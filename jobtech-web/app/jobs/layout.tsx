import React from 'react';

export default function JobsLayout({
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
