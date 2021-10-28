import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Firebase/firebase.config'
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;