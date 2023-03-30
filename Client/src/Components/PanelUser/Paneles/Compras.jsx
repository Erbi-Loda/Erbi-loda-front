import ButtonLoda from "../../ButtonLoda/ButtonLoda";
import "./Compras.css"
export default function Compras({currentUser,getchat}) {
  return (
    <div>
            {currentUser?.compras.map((e) => {
              console.log("e",e)
              return (
                <div className="contenedor-compras-compras-paneluser" key={e._id}>
                    <section>
                    <img width={80} height={80} src={e.img[0]} alt={e.productoname}/>
                    <p>precio:{e.price}</p>
                    </section>
                    <section>

                    <p  style={{width:'300px',overflow:'hidden'}}>Fecha compra: 
                    <span> {e.fecha.toString().slice(8,10)}</span>
                        /<span>{e.fecha.toString().slice(4,7)==="Jan"?'Enero':
            e.fecha.toString().slice(4,7)==="Feb"?"Febrero":
            e.fecha.toString().slice(4,7)==="Mar"?"Marzo":
            e.fecha.toString().slice(4,7)==="Apr"?"Abril":
            e.fecha.toString().slice(4,7)==="May"?"Mayo":
            e.fecha.toString().slice(4,7)==="Jun"?"Junio":
            e.fecha.toString().slice(4,7)==="Jul"?"Julio":
            e.fecha.toString().slice(4,7)==="Aug"?"Agosto":
            e.fecha.toString().slice(4,7)==="Sep"?"Septiembre":
            e.fecha.toString().slice(4,7)==="Oct"?"Octubre":
            e.fecha.toString().slice(4,7)==="Nov"?"Noviembre":
            e.fecha.toString().slice(4,7)==="Dec"?"Diciembre":'error'            
        }</span>
            /
        <span>{e.fecha.toString().slice(11,15)}</span>
            </p>
                    <p style={{width:'300px',overflow:'hidden'}}>Vendedor: {e.companyId.companyname}</p>
                    <div>

                <ButtonLoda
                  type={"small"}
                  fs={12}
                  text={"Enviar Mensaje"}
                  cb={() =>
                    getchat({
                        user: e._id,
                        secondUser: e.companyId._id,
                        secondUserName: e.companyId.companyname,
                    })}
                    />
                    </div>
                </section>
            </div>
              );
            })}
          </div>
  )
}
