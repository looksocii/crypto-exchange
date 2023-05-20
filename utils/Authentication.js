import Cookies from 'js-cookie';

// Set the authentication token in a cookie
export const setAuthToken = (token) => {
  Cookies.set('authToken', token);
};

// Get the authentication token from the cookie
export const getAuthToken = () => {
  return Cookies.get('authToken');
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = getAuthToken();
  return !!token; // Returns true if a token exists
};

// Remove the authentication token from the cookie
export const removeAuthToken = () => {
  Cookies.remove('authToken');
};
