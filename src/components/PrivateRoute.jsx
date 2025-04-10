import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ children, adminOnly = false }) {
  const { signed, isAdmin } = useAuth();

  if (!signed) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute; 