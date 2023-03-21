import "./Configuration.style.css";

export default function Conf_Panel() {
  return (
    <div className="box-setting">
      <div className="settings">
        <div className=" name-setting">
          <h2 className="title-setting">Modificar nombre</h2>
          {/* <form>
            <input type="text" placeholder="Nuevo Nombre" />
            <button></button>
          </form> */}
        </div>
        <h2 className="title-setting">Modificar contraseña</h2>
        <h2 className="title-setting">Modificar correo</h2>
        <h2 className="title-setting">Modificar Tema</h2> {/* Dark/Original */}
        {/* Pass Name Email Tema*/}
      </div>
    </div>
  );
}
