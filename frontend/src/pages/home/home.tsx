import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import './home.css';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';



const homeTab: React.FC = () => {

  return (
    <IonPage >
      <IonContent>

        <h1 className='branding'>Tripher</h1>

        <div className="headerImage"></div>

        <div className='channelTitleBox'>
            <h1 className='channelTitle'>Swamps</h1>
            {/* <h4 className='channelSubTitle'>MORE INFO</h4> */}
            <IonButton expand="block" fill="clear" onClick={() => console.log('more info clicked')}> More Info </IonButton> 
        </div>

        {/* <IonCardHeader className='greetingSection'>
          <IonCardSubtitle>Hey There!</IonCardSubtitle>
        <IonCardTitle><strong>Tina</strong></IonCardTitle>
      </IonCardHeader> */}

        <IonCardHeader>
          <IonCardTitle>Featured</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <FeaturedCard />
        </IonCardContent>



      </IonContent>
    </IonPage>
  );
};

export default homeTab;