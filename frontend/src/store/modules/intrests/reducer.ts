import Produce from 'immer';

const initial_state = {
   list: ["Cooking","Engineering","Relationships","Gardening","Singing","Rugby","Soccer","gurls"]
}

export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'intrests/ADD':
                draft.list.push( action.payload);
                break
            case 'intrests/REMOVE':
                draft.list.splice( action.payload, 1)
                break
            default:
        }
    })
} 