import React, {useState} from 'react';
import {createRoot} from 'react-dom/client'

export default function Toggle(){
    const[status, setStatus] = useState(true)
    function handleClick(){
        setStatus(!status)
    }
    return(
        <div>
        {
            status ? <h1>Button is on</h1> : null
        }
        <button onClick={handleClick}>ON</button>
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />)