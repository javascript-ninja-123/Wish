import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCJa13MYTy_aM-KOrSVhFAeI-zIJHhBDj4",
    authDomain: "hackawish-e4b0a.firebaseapp.com",
    databaseURL: "https://hackawish-e4b0a.firebaseio.com",
    projectId: "hackawish-e4b0a",
    storageBucket: "hackawish-e4b0a.appspot.com",
    messagingSenderId: "351812581254"
  };
  firebase.initializeApp(config);
  

const app ={
    auth:firebase.auth()
}

export default app