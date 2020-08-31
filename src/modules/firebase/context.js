import { createContext, useContext } from React;

const FirebaseContext = createContext(null);

const useFirebase = () => {
    return useContext(FirebaseContext);
}

export default FirebaseContext
export { useFirebase }