import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  
  
    apiKey: "AIzaSyDd_KBRDziRSJViqSy-zbZi1Rfe1t50F9I",
    authDomain: "ciclista-d492b.firebaseapp.com",
    projectId: "ciclista-d492b",
    storageBucket: "ciclista-d492b.appspot.com",
    messagingSenderId: "982443838089",
    appId: "1:982443838089:web:bb6d464ecee4daae539458"
  
}
;

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
