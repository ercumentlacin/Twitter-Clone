/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
import { useEffect, useRef, useState } from 'react';
import { BsImage } from 'react-icons/bs';
import { RiFileGifLine } from 'react-icons/ri';
import { ImParagraphLeft } from 'react-icons/im';
import { GrEmoji, GrPlan } from 'react-icons/gr';
import Button from 'components/Button';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { db, storageRef } from '../../firebase/firebase';

import styles from './styles.module.scss';

const buttons = [BsImage, RiFileGifLine, ImParagraphLeft, GrEmoji, GrPlan];
const INITIAL_TWEET_STATE = {
  message: '',
};

const TweetInput = () => {
  const imgUploadRef = useRef(null);
  const [file, setFile] = useState({ old: null, new: null });
  const [tweet, setTweet] = useState(INITIAL_TWEET_STATE);
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null);

  const { user } = useSelector((state) => state);
  const oUser = user?.user;

  const onChangeTweet = (e) => {
    setTweet({ ...tweet, [e.target.name]: e.target.value });
  };

  const onTweetSubmit = async (e) => {
    e?.preventDefault();
    const id = uuid();

    await db
      .collection('tweets')
      .doc(id)
      .set({
        id,
        userId: oUser?.userId,
        name: oUser.displayName,
        description: 'This is a test tweet',
        message: tweet.message || image,
        photoUrl: oUser.photoURL,
        email: oUser.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        like: [],
        retweet: [],
        comment: [],
      });

    setTweet(INITIAL_TWEET_STATE);
  };

  const handleOpenFileInput = () => {
    imgUploadRef.current.click();
  };

  useEffect(async () => {
    if (image !== null) {
      await onTweetSubmit();
      setImage(null);
    }
  }, [image]);

  const onClickButton = ({ target }) => {
    const targetName =
      target.parentElement.getAttribute('name') ?? target.getAttribute('name');

    if (targetName === '0') {
      console.log(imgUploadRef);
      handleOpenFileInput();
    }
  };

  const onUploadImg = (e) => {
    if (file.new === null) {
      setFile((prev) => ({ ...prev, new: e.target.files[0] }));
    } else {
      setFile({ old: file.new, new: e.target.files[0] });
    }
  };

  const thisImgId = uuid();
  const imagesRef = storageRef.child(`images/${oUser.userId}/${thisImgId}`);

  useEffect(() => {
    if (file.new !== file.old) {
      const metadata = {
        contentType: file.new.type,
        firebaseStorageDownloadTokens: thisImgId,
      };
      const uploadTask = imagesRef.child(file.new.name).put(file.new, metadata);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;

            default:
              return null;
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;

            case 'storage/unknown':
              break;
            default:
              return null;
          }
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            setImage(downloadURL);
          });
        }
      );
    }
  }, [file]);

  function renderButtons() {
    return buttons.map((ButtonsC, i) => (
      <span name={i} key={ButtonsC} onClick={onClickButton} aria-hidden="true">
        <ButtonsC name={i} />
      </span>
    ));
  }

  return (
    <form onSubmit={onTweetSubmit} className={styles.wrapper}>
      <div className={styles.imgArea}>
        <img
          src={`${oUser.photoURL ?? 'assets/images/user_picture.jpg'}`}
          alt="user"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.textArea}>
          <label htmlFor="message">
            <textarea
              name="message"
              id="message"
              placeholder="Neler oluyor?"
              maxLength="280"
              value={tweet.message}
              onChange={onChangeTweet}
            />
          </label>
        </div>
        <div className={styles.buttons}>
          <div className={styles.left}>{renderButtons()}</div>

          <input
            ref={imgUploadRef}
            style={{ display: 'none' }}
            multiple
            type="file"
            onChange={onUploadImg}
          />

          <Button
            disabled={!tweet.message.length}
            variant="primary"
            size="md"
            type="submit"
          >
            Tweetle
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TweetInput;
