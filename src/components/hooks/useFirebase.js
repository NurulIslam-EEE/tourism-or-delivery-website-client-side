import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;

            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])


    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;