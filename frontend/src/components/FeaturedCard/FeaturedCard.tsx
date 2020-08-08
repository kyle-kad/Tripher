import React from 'react';
import './FeaturedCard.css';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSlides, IonSlide } from '@ionic/react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules/rootReducer';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const FeaturedCard: React.FC = () => {

  const posts = useSelector( (state:RootState) => state.featured.list);

  return (
      <IonSlides pager={true} options={slideOpts}>

      {posts.map( (post, index) => (
        <IonSlide key={index}> 
          <IonCard>
          <IonImg alt='image' src={post.userData.img} />
    
          <IonCardHeader>
              <IonCardTitle>{post.userData.name}</IonCardTitle>
              <IonCardSubtitle>{post.userData.cats}</IonCardSubtitle>
          </IonCardHeader>
    
          <IonCardContent>
            {post.userData.bio}
          </IonCardContent>
          </IonCard>
        </IonSlide>        
        ))}

        </IonSlides>
  );
};

export default FeaturedCard;
