import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [packages, setPackages] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {

        return signInWithPopup(auth, provider);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({})
            }
            setLoading(false);
        });
        return unsubscribe;
    }, [auth])


    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            })
            .finally(() => setLoading(false))
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        loading,
        setLoading,
        packages, setPackages
    }

}
export default useFirebase;