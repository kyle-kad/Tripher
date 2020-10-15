import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonItem, IonSlide, IonCard } from '@ionic/react';
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
            <IonButton expand="block" fill="clear" onClick={() => console.log('more info clicked')}> More Info </IonButton>
        </div>


        <IonCardHeader>
          <IonCardTitle>Featured</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <FeaturedCard />
        </IonCardContent>

        <IonCardHeader>
          <IonCardTitle>Moods</IonCardTitle>
        </IonCardHeader>

        <IonGrid>
          <IonRow>
            <IonCol><IonButton expand="block" fill="clear">Funny</IonButton></IonCol>
            <IonCol><IonButton expand="block" fill="clear">Weird</IonButton></IonCol>
            <IonCol><IonButton expand="block" fill="clear">Uplifting</IonButton></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><IonButton expand="block" fill="clear">Heart Warming</IonButton></IonCol>
            <IonCol><IonButton expand="block" fill="clear">Romantic</IonButton></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><IonButton expand="block" fill="clear">Inspiring</IonButton></IonCol>
            <IonCol><IonButton expand="block" fill="clear">Sweet</IonButton></IonCol>
            <IonCol><IonButton expand="block" fill="clear">Instructive</IonButton></IonCol>
          </IonRow>

          <IonRow>
            <IonCol><IonButton expand="block" fill="clear">Suspenseful</IonButton></IonCol>
            <IonCol><IonButton expand="block" fill="clear">Touching</IonButton></IonCol>
          </IonRow>
        </IonGrid>


        <IonCardHeader>
          <IonCardTitle>Today's Picks</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <FeaturedCard />
        </IonCardContent>

      </IonContent>
    </IonPage>
  );
};

export default homeTab;
