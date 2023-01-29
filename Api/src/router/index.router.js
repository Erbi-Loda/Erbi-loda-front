//Preparo el index para poder atrapar las rutas correspondientes
import {Router} from 'express';
const index_router = Router();

//prueba de rutas
index_router.get('/getHelloWorld',(req,res)=>{
    res.send("Hello World! (GET)")
})



//Exporto el router para poder utilizarlo en el server;
export default index_router