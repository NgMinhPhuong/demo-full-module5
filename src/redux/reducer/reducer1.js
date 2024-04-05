export const reducer1 = (state = '',action) =>{
    const {type,payload} = action
    switch(type){
        case "aa":
            console.log(32);
            return payload
            break;
        default:
            return 'default1'
            break;
    }
}