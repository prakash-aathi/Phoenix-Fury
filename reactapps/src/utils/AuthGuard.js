import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function AuthGuard({ children }) {
  const role = useSelector((state) => state.auth.token.role)

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  } else if (role !== 'Admin') {
    return <div>You are not authorized to access this URL</div>;
  } else {
    return children;
  }
}
