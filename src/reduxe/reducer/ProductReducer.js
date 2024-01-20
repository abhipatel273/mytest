import { ActionTypes } from "../contain/Action-type"

const intialstate = {
    products: [
        {
            id:1,
            title:"Abhi",
            category:"coder"
        },
    ]
};

export const ProductReducer = (state=intialstate, { type, payload }) => {
    switch (type) {
        case ActionTypes.Set_Product:
            return state;
        default:
            return state;
    }
}