import React, { useEffect, useState } from 'react'

const APIFatch = () => {
    const[data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })

    },[])
    console.log(data)
  return (
  <>
    <div>APIFatch</div>
    <table border={"1px"}>
        <tr>
            <td>category</td>
            <td>description</td>
            <td>id</td>
            <td>image</td>
            <td>price</td>
            <td>title</td>
        </tr>
        {
            data.map((item) => 
                <tr>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.id}</td>
                <img src={item.image} alt="Fetched" style={{ height: '130px', weight: '140px' }} />
                {/* <td>{item.image}</td> */}
                <td>{item.price}</td>
                <td>{item.title}</td>
            </tr>
            )
        }

    </table>
    </>
  )
}

export default APIFatch