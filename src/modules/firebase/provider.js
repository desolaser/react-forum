import React from "react";
import FirebaseContext from "./context";
import Firebase from "./firebase";

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={new Firebase()}>
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
