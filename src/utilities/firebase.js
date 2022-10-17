import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyD5YOnCIzZn3QXvuYo3y4H_udO8L-Q0REg",
    authDomain: "react-tutorial-5d87a.firebaseapp.com",
    databaseURL: "https://react-tutorial-5d87a-default-rtdb.firebaseio.com",
    projectId: "react-tutorial-5d87a",
    storageBucket: "react-tutorial-5d87a.appspot.com",
    messagingSenderId: "109768872358",
    appId: "1:109768872358:web:c961754ff94ad4c2247f67",
    measurementId: "G-M4MBZ9QLWT"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};