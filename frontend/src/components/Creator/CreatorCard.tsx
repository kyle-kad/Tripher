import React from 'react';
import './CreatorCard.css';
import { IonPage, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle,
        IonCardContent, IonSlides, IonSlide, IonContent, IonButton } from '@ionic/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules/rootReducer';


const CreatorCard: React.FC = () => {

  return (
      <IonPage >
        <IonContent>

            <IonImg className='image' src='https://source.unsplash.com/random' />
            <IonCardHeader>
              <IonCardTitle>Thato Rampedi</IonCardTitle>
              <IonCardSubtitle>56K Subscribers | SA Creator | Vlogs & LifeStyle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Hey guys I am Thato Rampedi, Your favourite South African youtuber ;).
              I am just a  22year old  studying at the University of Pretoria and I just
              really enjoy recording what we get up to! Subscribe and watch weekly to
              keep up with my life!
            </IonCardContent>

            <IonCardHeader>
                <IonCardSubtitle>This Creator is...</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Funny, Exciting, Weird, Dramatic</IonCardContent>

            <IonButton expand="block" fill="clear" onClick={() => console.log('Creator Button Clicked.')} href='https://youtube.com/thatorampedi'> View Channel </IonButton>
        </IonContent>
      </IonPage>
  );
};

export default CreatorCard;
