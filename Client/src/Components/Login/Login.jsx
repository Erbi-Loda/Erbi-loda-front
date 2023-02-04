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
import axios from "axios"
import "./Login.style.css";
import { Alert } from "@mui/material";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("http://localhost:8080/user/login",userLogin).then(()=>{
      console.log("Usuario Logeado")
    }).catch(async (err)=>{
      await axios.post("http://localhost:8080/company/login",userLogin).then(()=>{
        console.log("Compania logueada")
      }).catch(err => {
        setLoading(true)
        alert(`Alerta de Error!`)
      })
    })
  };

  return (
    <div className="Login-container">
      <div className="form-container">
      <h1>Iniciar Sesión</h1>
        <TextField
        sx={{margin:".5rem"}}

          className="box box-email"
          id="outlined-basic"
          label="correo"
          variant="outlined"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setUserLogin({ ...userLogin, email: e.target.value });
          }}
        />
        <FormControl 
        sx={{margin:".5rem"}}
         className="box box-password" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPass ? "password":"text" }
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
              setUserLogin({ ...userLogin, password: e.target.value });
            }}
          />
        </FormControl>
        <LoadingButton
        sx={{margin:".5rem"}}
          size="large"
          loading={loading}
          endIcon={<SendIcon />}
          onClick={(e) => onSubmit(e)}
          loadingPosition="end"
          variant="contained"
        >
          <span>{loading ? "Ingresando" : "Ingresar"}</span>
        </LoadingButton>
      </div>
    </div>
  );
}
