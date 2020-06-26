import Produce from 'immer';

const initial_state = {
    list: ["Daniel Brouke","Amy Chris","John Legend","Summer Walker","Doja Cat","Whats Inside","Tiny Desk","TwoMad"]
} 

export default function subscriptions(state = initial_state, action:any){
    return Produce(state, draft => {
        switch( action.type){
            case 'subscriptions/GET':
                break
            default:
        }
    })
}