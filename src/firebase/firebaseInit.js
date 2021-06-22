import firebase from 'firebase/app';
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDhU4e68TejS5_CK5-UhJOiO3d6R7kHgvA",
    authDomain: "vueblog-frydev.firebaseapp.com",
    projectId: "vueblog-frydev",
    storageBucket: "vueblog-frydev.appspot.com",
    messagingSenderId: "17436814847",
    appId: "1:17436814847:web:b570b32b6435768c4b0bca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }
export default firebaseApp.firestore();