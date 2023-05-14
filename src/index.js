import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; //this is storing the components
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

//firebase connection done

const firebaseConfig = {
	apiKey: "AIzaSyAvsM4L8WCpBbpED7NMcELWMBwitxeNA0E",
	authDomain: "cartproject1-6427b.firebaseapp.com",
	projectId: "cartproject1-6427b",
	storageBucket: "cartproject1-6427b.appspot.com",
	messagingSenderId: "314575901811",
	appId: "1:314575901811:web:44a71404500524390c4606",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// ReactDOM.render(<App/>,document.getElementById('root'));
