import React from 'react';
import './LoginComp.css';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { IonCard, IonCardTitle } from '@ionic/react'

var uiConfig:any = {
  		signInFlow: "redirect",
  		signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ],
  		callbacks: { signInSuccess: () => false }
	};


const LoginComp: React.FC = () => {
  return (
    <div className="container">
    	 <IonCard className='sign'>
    	 	<IonCardTitle className='signtext'> Tripher Sign-In </IonCardTitle>
       </IonCard>
 		   <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

       <p className="madewithlove"> Made with <span className="madewithloveheart">&#9829;</span> by Kyle </p>  
    </div> 
  );
};
 
export default LoginComp; 