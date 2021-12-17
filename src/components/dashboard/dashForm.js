import { Grid } from "@material-ui/core"
import Form from "../../layouts/form"
import {Button, Select, Input} from "../../controls"
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useState, useEffect } from "react"
import RestaurantService from "../../service/restaurant"

export default function DashForm(){
    const [selected, setSelected] = useState('')
    const [name, setName] = useState('Nome')
    const [restaurantes, setRestaurantes] = useState([])
    let allRestaurants = [{id:0, title: 'Selecione'}]

    useEffect(() => {
        (async function getAdmById(){
            const resp = await RestaurantService.getAdmById(1)
            setName(resp["name"])
            if(resp["restaurants"]){
                setRestaurantes(resp["restaurants"].map(function(item){
                    return item.name
                }))
            }
            else{
                allRestaurants = [{id:0, title: 'Selecione'}]
            }
        })()
    },[])

    for(var i=1; i<=restaurantes.length; i++){
        let aux = {id:i, title: restaurantes[i-1]}
        allRestaurants.push(aux)
    }

    console.log(selected)
    localStorage.setItem("storageName",selected)

    //Nao ta funcionando
    const handleClick = () => {
        console.log("come handle click fun")
        localStorage.setItem("storageName",selected)
    }

    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    disabled
                    label = {name}
                    name = "nome"
                    //value = {values.admNome}
                    />
                    <Select
                        label = "Restaurante"
                        name = "restauranteId"
                        onChange = {event => {setSelected(event.target.value-1)}}
                        options = {allRestaurants}
                    />

                    <Button
                    size = "small"
                    startIcon = {<EditIcon />}
                    color = "primary"
                    href = "/edit" 
                    variant  = "contained"
                    onClick={handleClick}
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