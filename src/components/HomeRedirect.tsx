import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../utils/enums';

export default function HomeRedirect() {
  return <Navigate to={AppRoutes.ABOUT} replace />;
}
