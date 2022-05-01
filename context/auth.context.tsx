import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// firebase
import initFirebase from '../firebase/init-firebase';

const appFirebase = initFirebase();

const INIT_STATE = {
  iaAdmin: false,
};

export const AuthContext = React.createContext<{
  iaAdmin: boolean;
}>({
  iaAdmin: false,
});

const AuthProvider = props => {
  const [state, setState] = useState(INIT_STATE);

  const auth = getAuth(appFirebase);
  const [user, loading, error] = useAuthState(auth);
  console.log('%c ||||| user', 'color:yellowgreen', user);

  useEffect(() => {
    setState({
      ...state,
      iaAdmin: Boolean(user?.accessToken),
    });
  }, [user]);

  return <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
