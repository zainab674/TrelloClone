import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthorizeWrapper = () => {
  const auth = localStorage.getItem('accessToken');
  return auth ? <Outlet /> : <Navigate to='/auth' />;
};
export default AuthorizeWrapper;
