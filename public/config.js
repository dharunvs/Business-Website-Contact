var firebaseConfig = {
    apiKey: "AIzaSyCnL12Io88jjL85wimfjEB5MrVSTyIC_mQ",
    authDomain: "vibrant-dx.firebaseapp.com",
    projectId: "vibrant-dx",
    storageBucket: "vibrant-dx.appspot.com",
    messagingSenderId: "102853405585",
    appId: "1:102853405585:web:09d9f4bb27d6f203044830"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore().collection('contactInfo');
