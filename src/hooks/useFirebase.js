import { useEffect, useState } from "react";
import { initializeAuthentication } from "../Pages/LoginPage/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  //  login user

  const signinUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const detination = location?.state?.from || "/";
        history.push(detination);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  // register user
  const registerUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  // observere user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout users
  const logout = () => {
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  return {
    user,
    loading,
    error,
    signinUser,
    logout,
    registerUser,
  };
};

export default useFirebase;
