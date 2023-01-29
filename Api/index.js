//importacion de librerias para generacion del puerto y testeo de endpoints
import express from "express";
import morgan from "morgan";
//importacion y configuracion para lectura del archivo .env
import * as dotenv from 'dotenv';
dotenv.config();

//importacion de las rutas
import index_router from "./src/router/index.router.js"

//Preparacion del servidor
const server= express();
//Puerto configurable
const {PORT} = process.env;
const portServ = PORT || 3001 ;

//midlws
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({extended:true}));

//rutas aqui
server.use(index_router)


//escuchador del server/app
server.listen(portServ,()=>{
    console.log(`Server on port ${portServ}`)
});