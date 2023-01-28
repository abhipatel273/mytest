import React, { useReducer } from "react";

const reducer = ((state, action) => {
    if (action.type === "Icrement") {
        state = state + 1;
    }
    if (state > 0 && action.type === "decrement") {
        state = state - 1;
    }
    return state;
})

export default function UseHook() {

    const intialdata = 15;
    // const [mynum, setMyNum] = useState(0);

    // useEffect( () => {
    //  document.title = home()
    // });

    const [state, dispatch] = useReducer(reducer, intialdata);

    return (
        <>
            <div className="center-div">
                <p className="text"> {state} </p>
                <div className="button-div">
                    <div className="button-increment" onClick={() => dispatch({type : "Icrement"})}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Icrement
                    </div>
                    <div className="button-decrement" onClick={() => dispatch({type : "decrement"})}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        decrement
                    </div>
                </div>
            </div>
        </>
    );
}
