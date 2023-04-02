'use client';
import Link from 'next/link';
import { useEffect } from 'react';

const Jobs = () => {
  // throw new Error('Error zxcv');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      const data = await response.json();
      console.log('data: ', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main>
        <h1>All Jobs</h1>
        <Link href="/">Home</Link>
      </main>
    </>
  );
};

export default Jobs;
