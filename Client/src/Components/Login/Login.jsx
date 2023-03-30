import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { react, useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import logo from "../../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ReplyIcon from "@mui/icons-material/Reply";
import "./Login.style.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });

  const handleClickShowPassword = () => setShowPass((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(import.meta.env.VITE_BACK+"/user/login", userLogin)
      .then((e) => {
        localStorage.setItem('userloda',e.data)
        navigate("/");
      })
      .catch((err) => {
        setLoading(true);
        alert(`Alerta de Error!`);
      });
  };

  return (
    <div className="Login-container">
      <div className="form-container">
        <img src={logo} className="logofondo" alt="" />
        <Link to={".."} style={{ textDecoration: "none",color:'black' }}>
          <div className="volver-login-contenedor">
            <span className="volver-login" onClick={() => navigate(-1)}>
              <ReplyIcon></ReplyIcon> Volver
            </span>
          </div>
        </Link>
        <div className="form-container-sub">
          <h1>Iniciar Sesión</h1>
          <TextField
            sx={{ margin: ".5rem" }}
            className="box box-email"
            id="outlined-basic"
            label="Correo electronico"
            variant="outlined"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setUserLogin({ ...userLogin, email: e.target.value });
            }}
          />
          <FormControl
            sx={{ margin: ".5rem" }}
            className="box box-password"
            variant="outlined"
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
              label="Contraseña"
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setUserLogin({ ...userLogin, password: e.target.value });
              }}
            />
          </FormControl>
          <LoadingButton
            sx={{ margin: ".5rem" }}
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
      </div>
    </div>
  );
}
