import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import App from './App';
import store from './store/index';
import LoginComp from './components/LoginComp/LoginComp';


const Login: React.FC = () => {

	var firebaseConfig:any  = {
	    apiKey: "",
	    authDomain: "",
	    databaseURL: "",
	    projectId: "",
	    storageBucket: "",
	    messagingSenderId: "",
	    appId: "",
		measurementId: ""
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
