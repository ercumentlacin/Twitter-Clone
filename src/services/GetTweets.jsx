import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

const GetTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection('tweets')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        async (snapshot) => {
          await setTweets(
            snapshot.docs.map((t) => ({
              id: t.id,
              data: t.data(),
            }))
          );
          setLoading(false);
        },
        (error) => console.error(error),
        (onCompletion) => console.log(onCompletion)
      );
  }, []);
  return { tweets, loading };
};

export default GetTweets;
