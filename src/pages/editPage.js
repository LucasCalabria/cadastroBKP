import React from "react"
import { Container, Typography } from "@material-ui/core"
import Add from "../components/add"
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";

const themeAdd = createTheme({
  palette: {
    secondary: { main: '#008000'}
  }
});
/*
function Render() {
  const { data } = useLocation().data;
  return (
    data
  )
}*/

function EditPage(){
    //let a = Render
    //console.log(a)
    return (
    <Container maxWidth = "md">
      <Typography
      gutterBottom
      variant = "h2"
      align = "center">
        Editar Cadastro
      </Typography>

      <MuiThemeProvider theme = {themeAdd}>
      <Add
        edit = "true"
        editId = "0">
      </Add>
      </MuiThemeProvider>

    </Container>
    )
}

export default EditPage;