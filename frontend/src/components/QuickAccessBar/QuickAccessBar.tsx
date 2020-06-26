import React from 'react';
import './QuickAccessBar.css';
import { IonCard, IonGrid, IonRow, IonCol, IonAvatar, IonText } from '@ionic/react';


const QuickAccessBar: React.FC = () => {
  return (
    <IonCard>
    <IonGrid>
      <IonRow className="ion-align-items-center">
        <IonCol class="ion-padding-start">
          <IonAvatar>
            <img src="https://source.unsplash.com/featured/?happy" />
            <IonText>happy</IonText>
          </IonAvatar>
        </IonCol>

        <IonCol class="ion-padding-start">
          <IonAvatar>
            <img src="https://source.unsplash.com/featured/?sad" />
            <IonText>happy</IonText>
          </IonAvatar>
        </IonCol>

        <IonCol class="ion-padding-start">
          <IonAvatar>
            <img src="https://source.unsplash.com/featured/?laugh" />
            <IonText>happy</IonText>
          </IonAvatar>
        </IonCol>

        <IonCol class="ion-padding-start">
          <IonAvatar>
            <img src="https://source.unsplash.com/featured/?lonely" />
            <IonText>happy</IonText>
          </IonAvatar>
        </IonCol>
      </IonRow>
    </IonGrid>
    <br />
    </IonCard>
  );
};

export default QuickAccessBar;