import React,{useState} from 'react'

const PrintValue = () => {
   const[status, setStatus] = useState(true)
  return (
    <div>
    {
        status ? <h1>Hello world</h1> : null
    }

{/* <button onClick={() => setStatus(false)}>Hide</button>
<button onClick={() => setStatus(true)}>Show</button> */}

<button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  )
}

export default PrintValue