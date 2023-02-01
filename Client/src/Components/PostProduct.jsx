import axios from 'axios';
import React, { useState } from 'react'

export default function PostProduct() {
    const [state, setState] = useState({
        productoname:"",
        price:"",
        description:"",
        shortDescription:'',
        img:[],    
        stock:"",  
        companyId:'63d6e7843175bd63792f32ab'
    })
    const handleimage=async(e)=>{
        const files = e.target.files;
        const data= new FormData()
        data.append("file",files[0])
        data.append("upload_preset","vayssr63")
        const res= await fetch(
            "https://api.cloudinary.com/v1_1/dva6dmzv3/image/upload",{
                method:"POST",
                body:data
            }
        )
        const file = await res.json()
        console.log(file)
        setState({...state,img:[...state.img,file.secure_url]})
    }
    const enviarProducto=async()=>{
         await axios.post(
            "http://localhost:8080/company/postProduct",state
        ).then(e=>setState({
            productoname:"",
            price:"",
            description:"",
            shortDescription:'',
            img:[],    
            stock:"",  
            companyId:'63d6e7843175bd63792f32ab'
        }))
    }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'500px'}}>
        <input placeholder='nombre:'value={state.productoname} onChange={e=>setState({...state,productoname:e.target.value})}></input>
        <input placeholder='precio:' value={state.price} onChange={e=>setState({...state,price:e.target.value})}></input>
        <input placeholder='descripcion:' value={state.description} onChange={e=>setState({...state,description:e.target.value})}></input>
        <input placeholder='descripcion corta:'value={state.shortDescription} onChange={e=>setState({...state,shortDescription:e.target.value})}></input>
        <input placeholder='stock:'value={state.stock} onChange={e=>setState({...state,stock:e.target.value})}></input>
        <input onChange={e=>handleimage(e)} type={"file"}></input>
        <div>
        <h3>Imagenes:</h3>
        {state.img.map((e,index)=>{
            return(
                <img src={e} style={{width:'100px',height:'100px'}} alt={index} key={index+e}></img>
                )
            })}
            </div>
            <button onClick={enviarProducto}>Enviar</button>
             
        
    </div>
  )
}
