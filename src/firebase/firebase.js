import firebase from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/firestore';
import 'firebase/auth';

const config = firebaseConfig;

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
