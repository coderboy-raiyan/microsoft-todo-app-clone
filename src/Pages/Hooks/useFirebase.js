import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "./../../Firebase/Firebase.init";

initializeAuth();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          // ...
        } else {
          setUser({});
        }
        setLoading(false);
      }),
    [auth]
  );

  // Logout

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    googleSignIn,
    logout,
    user,
    error,
    loading,
  };
};

export default useFirebase;
