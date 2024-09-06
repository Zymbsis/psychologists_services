import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  // endBefore,
  // get,
  getDatabase,
  // limitToLast,
  // orderByChild,
  // query,
  // ref,
} from 'firebase/database';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDxZZOkawrhm9yqJz1c6ncrpuqT2MWqwm4',
  authDomain: 'learning-project-78c98.firebaseapp.com',
  databaseURL:
    'https://learning-project-78c98-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learning-project-78c98',
  storageBucket: 'learning-project-78c98.appspot.com',
  messagingSenderId: '208611767012',
  appId: '1:208611767012:web:a4e9b6ac5082351c3db2f1',
  measurementId: 'G-FSZSZK42NB',
});
export const auth = getAuth(firebaseApp);
export const db = getDatabase(firebaseApp);

// const dbRef = ref(db, '/');

// const getPsychologistsRequest = async () => {
//   try {
//     const snapshot = await get(
//       query(dbRef, orderByChild('name'), endBefore('Y'), limitToLast(3)),
//     );
//     if (snapshot.exists()) {
//       const result = snapshot.val();
//       console.log(result);

//       const data = Object.keys(result).map((item) => {
//         return { _id: item, ...result[item] };
//       });
//       console.log(data);
//     } else {
//       return { sortedData: [], lastResult: '', hasNextPage: false };
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// getPsychologistsRequest();
