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

        <IonItem>
            <IonImg src='https://source.unsplash.com/random' />

            <IonCardContent>
              <IonCardTitle>Sad</IonCardTitle>
                A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <a href="https://www.youtube.com/results?search_query=sadvlog"><IonButton expand="block" fill="clear">GO</IonButton></a>
            </IonCardContent>
          </IonItem>

          <IonSlide> 
            <IonItem>
              <IonImg src='https://source.unsplash.com/random' />

              <IonCardContent>
                <IonCardTitle>Sad</IonCardTitle>
                  A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <a href="https://www.youtube.com/results?search_query=sadvlog"><IonButton expand="block" fill="clear">GO</IonButton></a>
              </IonCardContent>
            </IonItem>

            <IonItem>
              <IonImg src='https://source.unsplash.com/random' />

              <IonCardContent>
                <IonCardTitle>Sad</IonCardTitle>
                  A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <a href="https://www.youtube.com/results?search_query=sadvlog"><IonButton expand="block" fill="clear">GO</IonButton></a>
              </IonCardContent>
            </IonItem>
          </IonSlide>         

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

      </IonContent>
    </IonPage>
  );
};

export default homeTab;