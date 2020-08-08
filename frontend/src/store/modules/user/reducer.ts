import Produce from 'immer';

const initial_state = {
   list: {
       
   }
}

export default function intrests(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type ){
            case 'user/UPDATE':
                break
            default:
        }
    })
} 