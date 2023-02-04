import { react, useState } from "react";

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

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { flexbox } from "@mui/system";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function Register() {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="Register-container">
      <form className="form-container">
        <h1>Registro</h1>
        <RadioGroup sx={{display:"flex",flexDirection:"row"}} name="use-radio-group" defaultValue="user">
          <MyFormControlLabel value="user" label="Usuario" control={<Radio />} />
          <MyFormControlLabel value="company" label="Compania" control={<Radio />} />
        </RadioGroup>
        <TextField
          className="box box-name"
          id="outlined-basic"
          label="name"
          variant="outlined"
          onChange={(e) => {
            setUserRegister({ ...userRegister, email: e.target.value });
          }}
        />
        <TextField
          className="box box-email"
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={(e) => {
            setUserRegister({ ...userRegister, email: e.target.value });
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
            label="Password"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setUserRegister({ ...userRegister, password: e.target.value });
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
        >
          <span>{loading ? "Ingresando" : "Ingresar"}</span>
        </LoadingButton>
      </form>
    </div>
  );
}
