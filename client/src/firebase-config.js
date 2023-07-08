import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDAPyq8YwznEczLICC2Qel2OosxVccWqGs",
  authDomain: "cfg-project-402e7.firebaseapp.com",
  projectId: "cfg-project-402e7",
  storageBucket: "cfg-project-402e7.appspot.com",
  messagingSenderId: "885712458897",
  appId: "1:885712458897:web:54305356a119e1f2ba9b30",
  measurementId: "G-7G0DZQDX7Z"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app)
export const storage=getStorage(app)