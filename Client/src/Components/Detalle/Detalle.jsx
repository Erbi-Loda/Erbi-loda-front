import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Detalle() {
  const {idproducto}=useParams()
  const [producto, setproducto] = useState(false)
  const sumarVisita=async()=>{
    const options = { method: "GET",headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'authorization':'Bearer '+localStorage.getItem('userloda')
    } };
    await fetch("http://localhost:8080/getProducto/"+idproducto, options)
      .then((response) => response.json())
      .then((response) => {console.log(response);setproducto(response)})
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    sumarVisita()
  }, [])
  
  return (
    <div>Detale.</div>
  )
}
