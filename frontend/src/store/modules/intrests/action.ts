export function addIntrest(inputString:String){
    return {
        type: "intrests/ADD",
        payload: inputString
    };
}

export function removeIntrest(inputPosition: Number){
    return {
        type: "intrests/REMOVE",
        payload: inputPosition
    };
}