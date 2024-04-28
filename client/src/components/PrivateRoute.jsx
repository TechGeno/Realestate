import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

// Dynamic checking to include profile pic or not
export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/signin' />;
}