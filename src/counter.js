import React, { useState } from 'react'

const Counter = ({ state }) => {
    const [count, setCount]=useState(state)
    return (
        <>
            Счёт: {count}
            <button onClick={() => setCount(state)}>Сбросить</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount -1)}>-</button>
        </>
    )
}
    export default Counter