/*
export default(wposts = [],action) =>{
    switch (action.type){
        case 'FETCH_W_ALL': 
            return action.payload
        case 'CREATE_W': 
            return [...wposts, action.payload]
        

        default:
            return wposts;
    }
}
*/
const Wild = (wposts = [],action) =>{
    switch (action.type){
        case 'FETCH_W_ALL': 
            return action.payload
        case 'CREATE_W': 
            return [...wposts, action.payload]
        

        default:
            return wposts;
    }
}
export default Wild