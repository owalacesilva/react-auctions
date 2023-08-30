import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, useContext, createContext } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyCq7jMOkNJ4NGPHbkXZE2sCSupmuwpR_yc',
  authDomain: 'localhost',
  projectId: 'sorteadus',
};

export const firebaseApp = initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const auth = getAuth(firebaseApp);

export const AuthContextProvider = props => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
  const authz = useContext(AuthContext);
  return { ...authz, isAuthenticated: auth.user != null };
};
