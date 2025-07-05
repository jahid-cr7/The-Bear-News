import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const location = useLocation();

  const { user, loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-7xl size-25"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login" replace />;
  }
  return children;
};

export default PrivateRoute;