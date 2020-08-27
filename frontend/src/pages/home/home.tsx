import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './home.css';



const homeTab: React.FC = () => {

  return (
    <IonPage >
      <IonContent>

        <h1 className='branding'>Tripher</h1>

        <div className="headerImage"></div>

        <div className='channelTitleBox'>
            <h1 className='channelTitle'>Swamp Sniper</h1>
            <h4 className='channelSubTitle'>MORE INFO</h4>
        </div>

        <IonCardHeader className='greetingSection'>
          <IonCardSubtitle>Hey There!</IonCardSubtitle>
          <IonCardTitle><strong>Tina</strong></IonCardTitle>
        </IonCardHeader>

      </IonContent>
    </IonPage>
  );
};

export default homeTab;