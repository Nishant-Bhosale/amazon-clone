import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyB6TA-mkLmKzbdjz54mOVb02o3g3AwuCn0",
	authDomain: "ecommerce-site-6c3ee.firebaseapp.com",
	databaseURL: "https://ecommerce-site-6c3ee-default-rtdb.firebaseio.com",
	projectId: "ecommerce-site-6c3ee",
	storageBucket: "ecommerce-site-6c3ee.appspot.com",
	messagingSenderId: "274195571302",
	appId: "1:274195571302:web:0a61dff0557519c96243a7",
	measurementId: "G-ND9G20VY9Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
