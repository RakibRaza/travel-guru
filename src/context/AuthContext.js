import React, { useState, useContext, useEffect } from "react";

import { auth, fbProvider, githubProvider, googleProvider } from "../firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [from, setFrom] = useState("/");
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const googleSignIn = () => {
    return auth.signInWithPopup(googleProvider);
  };
  const fbSignIn = () => {
    return auth.signInWithPopup(fbProvider);
  };
  const githubSignIn = () => {
    return auth.signInWithPopup(githubProvider);
  };
  const logOut = () => {
    return auth.signOut();
  };
  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };
  const updateName = (name) => {
    return auth.currentUser.updateProfile({ displayName: name });
  };
  const updateEmail = (email) => {
    return auth.currentUser.updateEmail(email);
  };
  const updatePassword = (password) => {
    return auth.currentUser.updatePassword(password);
  };
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUserInfo(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);
  const value = {
    signUp,
    currentUserInfo,
    logIn,
    logOut,
    resetPassword,
    updateName,
    updateEmail,
    updatePassword,
    googleSignIn,
    fbSignIn,
    githubSignIn,
    from,
    setFrom,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
