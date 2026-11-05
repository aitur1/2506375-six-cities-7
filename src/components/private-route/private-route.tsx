import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthorized: boolean;
  children: JSX.Element;
}

const PrivateRoute = ({ isAuthorized, children }: PrivateRouteProps) => {
  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
