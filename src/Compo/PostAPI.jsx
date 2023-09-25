import React, { useState } from 'react'

const PostAPI = () => {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [title, setTitle] = useState("")

    function saveUser(){
        // console.log({category,description,id,image,price,title});
        let data = {category,description,id,image,price,title}
        fetch("https://fakestoreapi.com/products", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result) => {
            // console.log("result", result);
            result.json().then((resp) => {
                console.log("resp", resp)
            })

        })
        }
    

 //     <tr>
//     <td>category</td>
//     <td>description</td>
//     <td>id</td>
//     <td>image</td>
//     <td>price</td>
//     <td>title</td>
// </tr>
  return (
    <>PostAPI
    <input type='text' value={category}  onChange={(e) => {setCategory(e.target.value)}} name='category'/> <br /> <br />
    <input  type='text' value={description} onChange={(e) => {setDescription(e.target.value)}} name='desciption'/> <br /> <br />
    <input  type='text' value={id} onChange={(e) => {setId(e.target.value)}} name='id'/>  <br /> <br />
    <input type='text' value={price} onChange={(e) => {setPrice(e.target.value)}} name='price'/> <br /><br />
    <input type='text' value={title} onChange={(e) => {setTitle(e.target.value)}}  name='title' /> <br /> <br />
    <button onClick={saveUser}>Submit</button>
    
    </>
  )
  }

export default PostAPI