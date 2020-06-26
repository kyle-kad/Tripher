import Produce from 'immer';

const initial_state = {
    list: [{
        docId: 'michaela',
        userData: {
            name: 'micky',
            cats: 'Reality, Sport, Fitness',
            bio: 'Hi my name is michaela and i love sport and helping people out all the time',
            img: 'https://source.unsplash.com/random'
        }
    }]
}

export default function featured( state = initial_state, action:any){
    return Produce(state, draft =>{
        switch( action.type ){
            default:
        }
    })
}