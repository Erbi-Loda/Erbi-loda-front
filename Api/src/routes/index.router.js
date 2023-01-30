import userRoutes from "./userRoutes.js";
import companyRoutes from "./companyRoutes.js";
import productosRoutes from "./productosRoutes.js";

//Preparo el index para poder atrapar las rutas correspondientes
import {Router} from 'express';
const index_router = Router();

index_router.use(userRoutes)
index_router.use(companyRoutes)
index_router.use(productosRoutes)

//Exporto el router para poder utilizarlo en el server;
export default index_router