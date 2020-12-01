import { useState, useEffect } from "react";
import { firestore } from "./Config";

const FirestoreContext = (collection) => {
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(
    () => {
      const unsub = firestore.collection(collection).onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setShortUrls(documents);
      });

      return () => unsub();
    },
    /* eslint-disable */ [collection]
  );

  return { shortUrls };
};

export default FirestoreContext;
