import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton, IonCardContent, IonItem, IonThumbnail, IonLabel, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar } from '@ionic/react';
import firebase from 'firebase';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem >
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          
          <IonCardHeader>
            <IonCardTitle>Kyle Kadango</IonCardTitle>
            <IonCardSubtitle>Hello</IonCardSubtitle>
          </IonCardHeader>
        </IonItem>

        <IonCardContent>
          Thanks for checking out the app.
          <br/><br/>
          Tripher is in development and new features will constantly be added.
          Some features soon to be added are user logins accounts and boards for youtube channels you are subscribed to. 
          <br/><br/>
          Your support is truely appreciated.
          Cheers
          <br/><br/>
          Kyle - founder
        </IonCardContent>

        <a href="https://instagram.com/ky.le_t?r=nametag"><IonButton expand="block" fill="clear">Have A Chat</IonButton></a>
        <IonButton expand="block" fill="clear" onClick={ () => { firebase.auth().signOut() }} href='/home' >Sign out</IonButton>

         <IonButton expand="block" fill="clear">
          <IonThumbnail slot="start">
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" />
          </IonThumbnail>
          <a href="https://buymeacoffee.com/kylet"><IonLabel>Buy me a coffee</IonLabel></a>
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;