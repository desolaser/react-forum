import { createContext, useContext } from "react";

const FirebaseContext = createContext(null);

const useFirebase = () => {
  return useContext(FirebaseContext);
};

export default FirebaseContext;
export { useFirebase };
