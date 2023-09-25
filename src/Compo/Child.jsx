import React, { useState } from 'react'

const Child = (props) => {
    const [name,setName] = useState("")
    // const [click, setClick] = useState()
    function handleSubmit(e){
        e.preventDefault();
        setName(e.target.value)
        props.getData(name)

    }
    function handleCLick(e){
    //   setName(e.target.value)

    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type='text' value={name} onChange={(e)=> setName(e.target.value) }></input>
    <button onClick={handleCLick}>Submit</button>
    </form>
    
    </>
  )
}

export default Child