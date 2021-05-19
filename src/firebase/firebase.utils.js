import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCt1od68q_s8z2ubjgV5EiVhraU_wjegwc",
  authDomain: "shopping-list-55e83.firebaseapp.com",
  projectId: "shopping-list-55e83",
  storageBucket: "shopping-list-55e83.appspot.com",
  messagingSenderId: "870724772459",
  appId: "1:870724772459:web:47f72f158f773db28b472e",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        entries: [
          {
            entry: "potatoes",
            id: 1,
          },
        ],
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
