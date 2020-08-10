import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonLabel,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonList,  IonCard } from '@ionic/react';
import firebase from 'firebase';
import './Tab3.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules/rootReducer'


const Tab3: React.FC = () => {

  const name = useSelector( (state:RootState) => state.user.list.name);
  const profileImage = useSelector( (state:RootState) => state.user.list.photoUrl);



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
    

        <IonItem >
          <IonAvatar>
            <img src={profileImage} />
          </IonAvatar>
          
          <IonCardHeader>
            <IonCardTitle>{name}</IonCardTitle>
            <IonCardSubtitle>Hello</IonCardSubtitle>
          </IonCardHeader>
        </IonItem>

        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { }} detail>
            <IonLabel>
              YouTube Channel Promo
            </IonLabel>
          </IonItem>

          <IonItem button onClick={() => {  }} detail>
            <IonLabel>
              Tell a Friend
            </IonLabel>
          </IonItem>
        </IonList>

        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { console.log('Help Clicked') }} detail>
            <IonLabel>
              Help
            </IonLabel>
          </IonItem>

          <IonItem button onClick={() => { }} href="https://buymeacoffee.com/kylet">
            <IonLabel>
              Buy me a Coffee
            </IonLabel>
          </IonItem>
        </IonList>

        <br />
        <br />
        <br />

        <IonList>
          <IonItem button onClick={() => { firebase.auth().signOut() }} href='/'>
            <IonLabel>
              Sign Out
            </IonLabel>
          </IonItem>
        </IonList>

        <br />

        <IonCard>    
          <IonCardHeader>
              <IonCardSubtitle>Tripher</IonCardSubtitle>
              <IonCardSubtitle>Copyright &#169; 2020, All Rights Reserved</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        {/* <IonCardContent>
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

         <IonButton expand="block" fill="clear">
          <IonThumbnail slot="start">
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" />
          </IonThumbnail>
          <a href="https://buymeacoffee.com/kylet"><IonLabel>Buy me a coffee</IonLabel></a>
        </IonButton> */}

      </IonContent>
    </IonPage>
  );
};

export default Tab3;