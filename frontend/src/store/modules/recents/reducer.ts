import Produce from 'immer';

const initial_state = {
    list:[
        {
        docId: 'happy',
        userData: {
            mood: 'Happy',
            data: 'other data here'
            }
        },
        {
        docId: 'sad',
        userData: {
            mood: 'Happy',
            data: 'other data here'
            }
        },
        {
        docId: 'joyful',
        userData: {
            mood: 'Happy',
            data: 'other data here'
            }
        },
        {
        docId: 'happy',
        userData: {
            mood: 'Happy',
            data: 'other data here'
            }
        }
    ]
}

export default function recents( state = initial_state, action:any){
    return Produce(state, draft =>{
        switch( action.type ){
            default:
        }
    })
}