import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAuthToken } from '../utils/Authentication';

const ProtectedRoute = (WrappedComponent) => {
  const Component = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = getAuthToken();
      if (!token) {
        // If user is not authenticated, redirect to login page
        router.push('/Login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Component;
};

export default ProtectedRoute;
