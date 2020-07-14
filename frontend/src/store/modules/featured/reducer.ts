import Produce from 'immer';

const initial_state = {
    list: [{
        docId: 'michaela',
        userData: {
            name: 'Thato Rampedi',
            cats: 'Lifestyle Vlogs',
            bio: 'Hey guys I am Thato Rampedi, Your new favourite South African youtuber ;). I am just a  22year old  studying at the University of Pretoria and I just really enjoy recording what we get up to! Subscribe and watch weekly to keep up with my life!',
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