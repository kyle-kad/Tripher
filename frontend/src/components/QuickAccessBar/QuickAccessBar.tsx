import React from 'react';
import './QuickAccessBar.css';
import { IonCard, IonGrid, IonRow, IonCol, IonAvatar, IonText } from '@ionic/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules/rootReducer'

const QuickAccessBar: React.FC = () => {

  const recents = useSelector( (state:RootState) => state.recents.list);
  
  return (
    <IonCard>
    <IonGrid>
      <IonRow className="ion-align-items-center">

        {recents.map( (recent, index) => (
          <IonCol class="ion-padding-start">
            <a href='https://youtube.com'>
            <IonAvatar>
              <img src="https://source.unsplash.com/featured/?happy" />
              <IonText>{recent.userData.mood}</IonText>
            </IonAvatar>
            </a>
          </IonCol>
        ))}     

      </IonRow>
    </IonGrid>
    <br />
    </IonCard>
  );
};

export default QuickAccessBar;