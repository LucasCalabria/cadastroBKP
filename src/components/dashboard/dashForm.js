import { Grid } from "@material-ui/core"
//import React, { useState } from "react"
import Form from "../../layouts/form"
import {Button, Select, Input} from "../../controls"
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function DashForm(){
    //const [values, setValues] = useState(getFreshModelObject());

    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    disabled
                    label = "Nome"
                    name = "nome"
                    //value = {values.admNome}
                    />
                    <Select
                        label = "Restaurante"
                        name = "restauranteId"
                        options = {[
                            {id:0, title: "Selecione"},
                            {id:1, title: "Restaurante 1"},
                            {id:2, title: "Restaurante 2"},
                            {id:3, title: "Restaurante 3"}
                        ]}
                    />

                    <Button
                    size = "small"
                    startIcon = {<EditIcon />}
                    color = "primary"
                    ></Button>

                    <Button
                    size = "small"
                    startIcon = {<DeleteOutlineIcon />}
                    color = "secondary"
                    ></Button>
                </Grid>

                <Button
                    size = "small"
                    href="/add" 
                    variant="contained"
                >Add Restaurante</Button>

                <Button
                    size = "large"
                >Sair</Button>
            </Grid>
        </Form>
    )
}