import { Navigate } from 'react-router-dom'

export default function ProtectedRoute ({ children, role }){

  const token = localStorage.getItem('token');

  const user = JSON.parse(localStorage.getItem('user'));

  const userRole = user?.role;

  if(!token){
    return <Navigate to='/auth/login' replace />
  }

  if(role && role!==userRole){
    return <Navigate to='/' replace />
  }

  return children;
}