import React, { useState } from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption,
         IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonToast, IonFab,
         IonFabButton, IonIcon, IonAlert } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import './ManageIntrests.css';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/modules/rootReducer'
import { addIntrest, removeIntrest } from "../../store/modules/intrests/action";


const ManageIntrests: React.FC = () => {

  const intrests = useSelector( (state:RootState) => state.intrests.list);
  const dispatch = useDispatch();

  const [showToast, setShowToast ] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  

  return (
    <IonContent>
      <IonCardHeader>
        <IonCardTitle><strong>Manage Intrests</strong></IonCardTitle>
        <IonCardSubtitle>Slide for actions</IonCardSubtitle>
      </IonCardHeader>

      <IonList>
        {intrests.map((intrest , index) => (
          <IonItemSliding key={ index.toString() }> 
            <IonItem>           
              <IonLabel>{intrest}</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption className="ionitemoption"  onClick={() => { dispatch( removeIntrest( index)); setShowToast(true); }}>Remove</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
    </IonList>


    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton size="small" onClick={() => { setShowAlert(true)}}>
        <IonIcon icon={addOutline} />
      </IonFabButton>
    </IonFab> 

    <IonAlert
          isOpen={showAlert}
          onDidDismiss={(e) => {  setShowAlert(false)}}
          cssClass='my-custom-class'
          header={''}
          subHeader={'Add New Intrest'}
          message={'Please enter single words.'}
          inputs={[
            { name: 'intrest',
              type: 'text',
              placeholder: 'soccer'}
          ]}
          buttons={[
            { text: 'Ok',
              handler: (alertData) => { dispatch( addIntrest( alertData.intrest )); }}
          ]}
        />
 
    <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Item Removed"
        duration={300}
      />
    </IonContent>
  );
};

export default ManageIntrests;