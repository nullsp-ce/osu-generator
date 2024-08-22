const firebaseConfig = {
  apiKey: "AIzaSyBlW8rgWsL1fhNHoQeH6KffXojXMdgJedU",
  authDomain: "osu-mappool-generator.firebaseapp.com",
  projectId: "osu-mappool-generator",
  storageBucket: "osu-mappool-generator.appspot.com",
  messagingSenderId: "22640096550",
  appId: "1:22640096550:web:173a9cea9f31796cff7de7"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
