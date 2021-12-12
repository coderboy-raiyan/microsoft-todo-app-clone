import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import initializeAuth from "./../../Firebase/Firebase.init";
import { setError, setLoading, setUser } from "./../userSlice/userSlice";

initializeAuth();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const googleSignIn = () => {
    dispatch(setLoading({ loading: true }));
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(setError({ error: "" }));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setError({ error: errorMessage }));
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser({ user: user }));
          // ...
        } else {
          dispatch(setUser({ user: {} }));
        }
        dispatch(setLoading({ loading: false }));
      }),
    [auth]
  );

  // Logout

  const logout = () => {
    dispatch(setLoading({ loading: true }));
    signOut(auth)
      .then(() => {
        dispatch(setUser({ user: {} }));
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        dispatch(setLoading({ loading: false }));
      });
  };

  return {
    googleSignIn,
    logout,
  };
};

export default useFirebase;
