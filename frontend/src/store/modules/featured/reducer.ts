import Produce from 'immer';

const initial_state = {
    list: [{
        docId: 'Thato',
        userData: {
            name: 'Thato Rampedi',
            cats: 'Lifestyle Vlogs',
            bio: 'Hey guys I am Thato Rampedi, Your new favourite South African youtuber ;). I am just a  22year old  studying at the University of Pretoria and I just really enjoy recording what we get up to! Subscribe and watch weekly to keep up with my life!',
            img: 'https://source.unsplash.com/random'
        }
    },
    {
        docId: 'Michaela',
        userData: {
            name: 'Michaela Ben',
            cats: 'Vlogs Pranks',
            bio: 'Hey guys! Its your girl michaela and i am back with another video. Thanks to everyone who watched my last video.',
            img: 'https://source.unsplash.com/random'
        }

    }
]
}

export default function featured( state = initial_state, action:any){
    return Produce(state, draft =>{
        switch( action.type ){
            default:
        }
    })
}