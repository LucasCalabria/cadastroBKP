import React from "react"
import { Container, Typography } from "@material-ui/core"
import Dash from "../components/dashboard";

function DashPage(){
    return (
    <Container maxWidth = "md">
      <Typography
      gutterBottom
      variant = "h2"
      align = "center">
        Bem Vindo!
      </Typography>
      <Dash />
    </Container>
    )
}

export default DashPage;