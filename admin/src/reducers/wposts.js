export default(wposts = [],action) =>{
    switch (action.type){
        case 'DELETE_W': 
            return wposts.filter((post)=> post._id !== action.payload)
        case 'UPDATE_W': 
            return wposts.map((post)=> post._id === action.payload._id ? action.payload : post)
        case 'FETCH_W_ALL': 
            return action.payload
        case 'CREATE_W': 
            return [...wposts, action.payload]

        default:
            return wposts;
    }
}