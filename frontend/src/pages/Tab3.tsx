import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem,  IonLabel,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonList,  IonCard, IonModal, IonButton } from '@ionic/react';
import firebase from 'firebase';
import './Tab3.css';


import ShareCard from '../components/AboutComps/Share/ShareCard';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules/rootReducer'



const Tab3: React.FC = () => {

  var [ showShareCard, setShowShareCard ] = useState(false);


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

          <IonItem button onClick={() => { setShowShareCard( true ) }} detail>
            <IonLabel>
              Tell a Friend
            </IonLabel>
          </IonItem>
          <IonModal isOpen={showShareCard} cssClass='my-custom-class'>
            <ShareCard />
            <IonButton expand="block" fill="clear" onClick={() => setShowShareCard(false)}> Close </IonButton> 
          </IonModal>
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

      </IonContent>
    </IonPage>
  );
};

export default Tab3;