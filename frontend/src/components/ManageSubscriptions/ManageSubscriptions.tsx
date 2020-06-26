import React from 'react';
import { IonList,  IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonAvatar, IonButton } from '@ionic/react';
import { useSelector} from "react-redux";
import { RootState } from "../../store/modules/rootReducer"
import './ManageSubscriptions.css';


const ManageSubscriptions: React.FC = () => {
  var Channels = useSelector( (state:RootState) => state.subscriptions.list);    

  return (
    <div>
      <IonCardHeader>
        <IonCardTitle><strong>Manage Subscriptions</strong></IonCardTitle>
        <IonCardSubtitle>Manage subscriptions from Youtube</IonCardSubtitle>
      </IonCardHeader>

      <IonButton expand="block" fill="clear" href="https://www.youtube.com/feed/channels"> Youtube Subs </IonButton>

      <IonList>
        {Channels.map((channel, index ) => (
          <IonItem key={index}>
            <IonAvatar slot="start">
              <img src="https://source.unsplash.com/random" />
            </IonAvatar>
            <IonLabel>{channel}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
    
  );
};

export default ManageSubscriptions;