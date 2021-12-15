import React, {useState} from "react"
import { Grid } from "@material-ui/core"
import SaveIcon from '@mui/icons-material/Save'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Form from "../../layouts/form"
import {Input, Button} from "../../controls";

export default function AddForm(){

    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Nome"
                    name = "nome"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Telefone"
                    name = "telefone"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "E-mail"
                    name = "email"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Cidade"
                    name = "cidade"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Bairro"
                    name = "bairro"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Rua"
                    name = "rua"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Número"
                    name = "numero"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                    //disabled
                    label = "Preço (Ex. $ ou $$$)"
                    name = "preco"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                    //disabled
                    label = "Descrição"
                    name = "descricao"
                    />

                    <Button
                    size = "large"
                    startIcon = {<SaveIcon />}
                    color = "secondary"
                    >SALVAR</Button>
                    
                    <Button
                    size = "large"
                    startIcon = {<ArrowBackIcon />}
                    href="/" 
                    variant="contained"
                    >VOLTAR</Button>
                </Grid>
            </Grid>
        </Form>
    )
}