import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

export const initializeFirebase = () => {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBBrWkvWKd4FwBhpT_vAgJdMD958LBvmD8",
        authDomain: "derby-voice.firebaseapp.com",
        databaseURL: "https://derby-voice-default-rtdb.firebaseio.com",
        projectId: "derby-voice",
        storageBucket: "derby-voice.appspot.com",
        messagingSenderId: "412157728746",
        appId: "1:412157728746:web:be990b6046f3828ffcc493",
        measurementId: "G-HEQVJP91VW"
    };

    const app = initializeApp(firebaseConfig);
    return app;
}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
