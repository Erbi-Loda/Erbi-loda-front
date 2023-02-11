import { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Register.style.css";
import logo from "../../imgs/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";

export default function Register() {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPass((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("http://localhost:8080/user/register", userRegister)
      .then(() => {
        console.log("Usuario creado");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(true);
        alert(`Alerta de Error!`);
      });
  };

  return (
    <div className="Register-container">
      <form className="form-container-register">
        {/* <div className="logofondo"></div>       */}
        <img src={logo} className="logofondo" alt="" />
        <Link to={".."} style={{ textDecoration: "none" ,color:'black' }}>
          <div className="volver-register-contenedor">
            <span className="volver-register">
              <ReplyIcon></ReplyIcon> Volver
            </span>
          </div>
        </Link>
        <div className="form-container-sub">
          <h1>Registro</h1>
          <TextField
            className="box box-name"
            id="outlined-basic"
            label="Usario"
            variant="outlined"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setUserRegister({ ...userRegister, username: e.target.value });
            }}
          />
          <TextField
            className="box box-email"
            id="outlined-basic"
            label="Correo electronico"
            variant="outlined"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setUserRegister({ ...userRegister, email: e.target.value });
            }}
          />
          <FormControl
            className="box box-password"
            variant="outlined"
            onKeyDown={handleKeyDown}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPass ? "password" : "text"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setUserRegister({ ...userRegister, password: e.target.value });
              }}
            />
          </FormControl>
          <LoadingButton
            size="large"
            loading={loading}
            endIcon={<SendIcon />}
            onClick={(e) => onSubmit(e)}
            loadingPosition="end"
            variant="contained"
            color="success"
          >
            <span>{loading ? "Ingresando" : "Ingresar"}</span>
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
