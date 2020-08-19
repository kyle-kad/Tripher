import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
        IonCardTitle, IonCardContent, IonImg, IonButton,IonSearchbar,
        IonItem, IonLabel,  IonModal, IonChip, IonGrid,
        IonRow, IonCol, IonCardSubtitle } from '@ionic/react';
import './Tab2.css';

const sad:string = "https://source.unsplash.com/featured/?sad"

const Tab2: React.FC = () => {

  var [ cat] = useState(['tech']);
  var [ searchText, setSearchText ] = useState('');
  var [ showModal, setShowModal ] = useState(false);

  function checkCatExist( cate:string ){
    for( cate in cat){
      return "colorchip"
    }
  }

  
  return (
    <IonPage> 
      <IonHeader>
        <IonToolbar>
          <IonTitle>Board</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Board</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>
        

          <IonItem>
            <IonImg src={sad} />

            <IonCardContent>
              <IonCardTitle>Sad</IonCardTitle>
                A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <a href="https://www.youtube.com/results?search_query=sadvlog"><IonButton expand="block" fill="clear">GO</IonButton></a>
            </IonCardContent>
          </IonItem>    
        

          <IonItem>
            <IonImg src={sad} />

            <IonCardContent>
              <IonCardTitle>Sad</IonCardTitle>
                A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <a href="https://www.youtube.com/results?search_query=sadvlog"><IonButton expand="block" fill="clear">GO</IonButton></a>
            </IonCardContent>
          </IonItem>    


          <IonItem>
            <IonImg src={sad} />

            <IonCardContent>
              <IonCardTitle>Sad</IonCardTitle>
                A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <a href="https://www.youtube.com/results?search_query=sadvlog"><IonButton expand="block" fill="clear">GO</IonButton></a>
            </IonCardContent>
          </IonItem>    


          <IonItem>
            <IonImg src={sad} />

            <IonCardContent>
              <IonCardTitle>Sad</IonCardTitle>
                A bit down in the dumps? Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                <IonButton expand="block" fill="clear" onClick={() => setShowModal(true)}> Watch </IonButton>

                <IonModal isOpen={showModal} cssClass='my-custom-class'>

                    <IonCardTitle class="ion-padding-start">Category</IonCardTitle>
                    <IonCardSubtitle class="ion-padding-start">Choose 3 cats to watch content from.</IonCardSubtitle>

                    <IonGrid>
                      <IonRow>
                        <IonCol>
                        <IonButton  fill="clear" onClick={() => { cat.push('vlog')}}> 
                          <IonChip className={ checkCatExist("apple") }>
                          <IonLabel color="primary">Vlog</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        </IonCol>

                        <IonCol>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        </IonCol>

                        <IonCol>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  
                    <IonCardTitle class="ion-padding-start">Your Intrests </IonCardTitle>
                    <IonCardSubtitle class="ion-padding-start">Go back to change intrests.</IonCardSubtitle>

                    <IonGrid>
                      <IonRow>
                        <IonCol>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Vlog</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        </IonCol>

                        <IonCol>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        </IonCol>

                        <IonCol>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        <IonButton  fill="clear" onClick={() => {}}> 
                          <IonChip color="secondary">
                          <IonLabel color="primary">Tech</IonLabel>
                          </IonChip> 
                        </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  
                  <IonButton expand="block"  href="https://youtube.com">Search</IonButton>
                  
                  <IonButton expand="block" fill="clear" onClick={() => setShowModal(false)}> Close </IonButton>
                </IonModal>
            </IonCardContent>
          </IonItem>    
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
