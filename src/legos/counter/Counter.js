import React, { useState } from 'react';
import './counter.css';

function Counter() {

    const [count, setCount] = useState(0);

    const handleDelayedIncrement = () => {

        setTimeout(() => {
            setCount((prevState) => {
                return prevState + 1;
            });
        }, 2000)
    }
    return (
        <>
            <section>
                <h2>Normal Counter</h2>
                <div className="counter">{count}</div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </section>
            <section style={{ marginTop: '2em' }}>
                <h2>Delayed Counter : Uses Functional Update</h2>
                <small>Try hitting the delayed increment button multiple times</small>
                <div className="counter">{count}</div>
                <button onClick={handleDelayedIncrement}>Delayed Increment</button>
            </section>
        </>

    )
}

export default Counter;