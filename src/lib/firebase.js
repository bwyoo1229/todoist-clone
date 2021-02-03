import Firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from './firebase-config';

export const firebase = Firebase.initializeApp(config);
