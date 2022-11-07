import {
  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from 'firebase/auth';
import {
  createContext, useEffect, useState
} from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createPasswordBaseUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const passwordBaseUserSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth)
      .then(() => {
      // Sign-out successful.
      // eslint-disable-next-line no-unused-vars
      }).catch((error) => {
      // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => { return unSubscribe(); };
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const authInfo = {
    user, loading, createPasswordBaseUser, passwordBaseUserSignIn, userSignOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
