import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCbAnf2K29Yq_C0oHxm5yqcesAyFTcgZ8s",
  authDomain: "travel-guru-bd-91dec.firebaseapp.com",
  projectId: "travel-guru-bd-91dec",
  storageBucket: "travel-guru-bd-91dec.appspot.com",
  messagingSenderId: "479850893154",
  appId: "1:479850893154:web:e1f8bae952fa5ab2a0663b",
});
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
