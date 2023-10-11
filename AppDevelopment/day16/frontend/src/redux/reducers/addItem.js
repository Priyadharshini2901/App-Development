export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}
// const addItem = [];

// const addItems = (state = addItem, action) => {
//     switch (action.type) {
//         case "ADDITEM" : return [
//             ...state,
//             action.payload
//         ]
//         break;

//         case "DELITEM" :
//             return state = state.filter((x)=>{
//                 return x.id !== action.payload.id
//             })
//         break;

//         default: return state;
//         break;

        
//     }
// }

// export default addItems;
