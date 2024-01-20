import { ActionTypes } from "../contain/Action-type";

export const Setproducts = (products) =>{
    return{
        type:ActionTypes.Set_Product,
        payload:products
    };
};

export const Selectedproduct = (product) =>{
    return{
        type:ActionTypes.Selected_Product,
        payload:product,
    };
};
// export const Removeproduct = (products) =>{
//     return{
//         type:ActionTypes.Remove_Selected_Product,
//         payload:products
//     };
// };