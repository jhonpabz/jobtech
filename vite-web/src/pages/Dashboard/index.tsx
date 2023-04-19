import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={() => navigate('/login')}>LOGIN</Button>
    </>
  );
};
export default Dashboard;
