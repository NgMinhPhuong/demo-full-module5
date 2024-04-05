export const reducer2 = (state, action) => {
    const {type, payload} = action
    switch(type){
        case "aa":
            return payload
            break;
        default:
            return 'default2'    
    }
}