import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import App from './App';
import store from './store/index';
import LoginComp from './components/LoginComp/LoginComp';


const Login: React.FC = () => {

	var firebaseConfig:any  = {
	    apiKey: "AIzaSyCOPq2Z3mV05l__KYnapmFVOwuVDX8U9Do",
	    authDomain: "tripher-a8610.firebaseapp.com",
	    databaseURL: "https://tripher-a8610.firebaseio.com",
	    projectId: "tripher-a8610",
	    storageBucket: "tripher-a8610.appspot.com",
	    messagingSenderId: "392936344431",
	    appId: "1:392936344431:web:a9a10f8ce117071a2e369a",
		measurementId: "G-LQ4G4MPNDL"
	};

 	
 	var [login , setLogin] = useState(false);	

 	if(!firebase.apps.length){
 		firebase.initializeApp(firebaseConfig);
 	}

 	useEffect(() => {
 		firebase.auth().onAuthStateChanged(user => { 

 			if(user){
 				setLogin(true); 
 			}

 		})
 	})
   
  return (
  	<div>
    {login ? <Provider store={store}> <App /> </Provider> : (<div> <LoginComp /> </div>) }
    </div>
  );
};

export default Login;