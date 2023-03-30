
import { useState } from 'react'
import './navbar.css'

export default function BurguerButton({estado,cambiarestado}){
    return(
        <div onClick={()=>cambiarestado()} className={estado?"nav-icon-5 open":"nav-icon-5"}>
    <span></span>
    <span></span>
    <span></span>
  </div>
    )
}