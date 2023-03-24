import React, { useEffect, useState,useRef } from 'react'
import { io } from 'socket.io-client';
import "./Chat.css"
export default function Chat({user,seconduser,seconduserName,cbcerrar}) {
    const socket=useRef()
    const [first, setfirst] = useState("")
    const [arrivalMessage, setarrivalMessage] = useState(null)
    const [msg, setmsg] = useState([])
    const options = {
        method: "POST",
        body: JSON.stringify({
            from:user,
            to:seconduser,
            message:first
         }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Bearer " + localStorage.getItem("userloda"),
        },
      };
    const options2 = {
        method: "POST",
        body: JSON.stringify({
            from:user,
            to:seconduser,
         }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Bearer " + localStorage.getItem("userloda"),
        },
      };


    const handleSendMsg=async()=>{
        await fetch(`${import.meta.env.VITE_BACK}/user/addMenssage`,options)
        socket.current.emit("send-msg",{
            from:user,
            to:seconduser,
            message:first
        })
        setfirst("")
    }


    useEffect(() => {
        arrivalMessage &&setmsg((prev)=>[...prev,arrivalMessage])
    }, [arrivalMessage])


    useEffect(() => {
        document.getElementById("chat").scrollTo({
            top: document.getElementById("chat").scrollHeight,
            behavior: 'smooth',
          })
    }, [msg])
    
    
    useEffect(() => {
        const peticion=async()=>{
            const response=await fetch(`${import.meta.env.VITE_BACK}/user/getAllMenssage`,options2)
            .then(data=>data.json())
            setmsg(response)
        }
        peticion()
    }, [])


    useEffect(() => {
        socket.current=io(`${import.meta.env.VITE_BACK}`)
        socket.current.emit("add-user",user)
    }, [])


    useEffect(() => {
        socket.current.on("msg-recieve",(data)=>{
            setarrivalMessage({fromSelf:data.fromSelf,message:data.msm})
        })
      
    }, [])
    
    return (
        <div  className='body-chat'>
        {seconduserName&& <h3 style={{margin:'5px',background:'#aeffce'}}>{seconduserName} <button className='button-chat-x' onClick={cbcerrar}>❌</button></h3>}
        <div id="chat" className='body-chat-msm'>
        {msg.length>=0 && msg.map((message,index)=>{
            return (
                <div key={message.message+index}  className={message.fromSelf?'body-right-chat-mensaje':'body-left-chat-mensaje'}>
                    {message.message}
                </div>
            )
        })}
        </div>
        <div className='body-input-chat'>
        <input value={first} onChange={(e)=>setfirst(e.target.value)} ></input>
        <button onClick={handleSendMsg}>Enviar</button>
        </div>
    </div>
  )
}
