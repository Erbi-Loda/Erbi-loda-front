
import React, { useCallback,useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";


export default function({state,setState,loading,setLoading,setImgGrande,imgGrande}){
  const [loadingImagen, setLoadingImagen] = useState(false)
  const handleimage = useCallback(async (e, estado) => {
    setLoadingImagen(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vayssr63");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dva6dmzv3/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImgGrande(file.secure_url)
    setState({ ...estado, img: [...estado.img, file.secure_url] });
    setLoadingImagen(false);
  }, []);
  const enviarProducto = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:8080/company/postProduct", state)
      .then((e) =>
        setState({
          productoname: "",
          price: "",
          description: "",
          shortDescription: "",
          img: [],
          stock: "",
          companyId: "63d6e7843175bd63792f32ab",
        })
      );
  };
    const theme1 = createTheme({
        palette: {
          pagina1: {
            main: '#2f1335',
            contrastText: '#fff',
          },
        },
      });
      const steps = [
        {
          label: 'Titulo del producto',
          description:
            <ThemeProvider theme={theme1}>
              <TextField
                color="pagina1"
                value={state.productoname}
                label="Titulo:"
                onChange={(e) => setState({ ...state, productoname: e.target.value })}
              ></TextField>
            </ThemeProvider>,
        },
        {
          label: 'Precio del producto',
          description:
            <ThemeProvider theme={theme1}>
              <TextField
                color="pagina1"
                label="Precio:"
                style={{ width: '8.75rem' }}
                value={state.price}
                onChange={(e) => setState({ ...state, price: e.target.value })}
              ></TextField>
            </ThemeProvider>,
        },
        {
          label: 'Descripcion corta del producto(100 caracteres maximo)',
          description:
            <ThemeProvider theme={theme1}>
              <TextField
                color="pagina1"
                multiline
                maxRows={3}
                label="descripcion corta:"
                style={{ width: '25rem' }}
                value={state.shortDescription}
                onChange={(e) =>
                  setState({ ...state, shortDescription: e.target.value })
                }
              ></TextField>
            </ThemeProvider>,
        },
        {
          label: 'Descripcion completa del producto',
          description:
            <ThemeProvider theme={theme1}>
              <TextField
                color="pagina1"
                multiline
                label="descripcion:"
                maxRows={3}
                style={{ width: '15.625rem' }}
                value={state.description}
                onChange={(e) => setState({ ...state, description: e.target.value })}
              ></TextField>
            </ThemeProvider>,
        },
        {
          label: 'Stock del producto',
          description: 
          <ThemeProvider theme={theme1}>
            <TextField
              color="pagina1"
            style={{ width: '8.438rem' }}
            label="stock:"
            value={state.stock}
            onChange={(e) => setState({ ...state, stock: e.target.value })}
            ></TextField>
            </ThemeProvider>,
        },
        {
          label: 'Imagen o imagenes del producto',
          description: 
          <ThemeProvider theme={theme1}>
            <TextField
              color="pagina1" id="imgsubir" style={{opacity:'0',position:'absolute',top:'-1000px'}} onChange={(e) => handleimage(e, state)} type={"file"}>
               </TextField>
               <label className={loadingImagen?'label-button-cargando':"label-button"} for={loadingImagen?'':"imgsubir"}>               
              {loadingImagen?'Cargando':'Subir'} Imagen  <CloudUploadIcon/>
              </label>
              </ThemeProvider>,
        },
        {
          label: 'Publicar producto',
          description:
            <LoadingButton
              size="large"
              loading={loading}
              endIcon={<SendIcon />}
              onClick={() => enviarProducto()}
              loadingPosition="end"
              variant="contained"
            >
              <span>{loading?'Publicando':'Publicar'}</span>
            </LoadingButton>
          ,
        },
      ];
      return steps
}