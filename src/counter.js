import React, { useReducer} from 'react'

const initialState = {
    trip: 0
};

const reducer = (state, {type}) => {
    switch(type) {
        case 'INCREMENT' :
            return {trip: state.trip +1}
        case 'DECREMENT' :
            return {trip: state.trip -1}
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Счёт: {state.trip}
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </>
    )
}
    export default Counter