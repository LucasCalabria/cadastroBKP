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
    let allRestaurants =[]

    const idAdm = 0

    useEffect(() => {
        (async function getAdmById(){
            const resp = await RestaurantService.getAdmById(idAdm)
            setName(resp["name"])
            if(resp["restaurants"]){
                setRestaurantes(resp["restaurants"].map(function(item){
                    return item.name
                }))
            }
            else{
                allRestaurants = []
            }
        })()
    },[])

    for(var i=0; i<restaurantes.length; i++){
        let aux = {id:i, title: restaurantes[i]}
        allRestaurants.push(aux)
    }

    localStorage.setItem("editId",selected)
    localStorage.setItem("idAdm", idAdm)

    const handleDelete = () =>{
        (async function removeRestaurant(){
            if (selected){
                console.log(selected)
                RestaurantService.deleteRestaurant(idAdm, {selected})
                window.location.reload()
            }
            else alert("Selecione um Restaurante")
            
        })()
    }

    return(
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    disabled
                    label = {name}
                    name = "nome"
                    />
                    <Select
                        label = "Restaurante"
                        name = "restauranteId"
                        onChange = {event => {setSelected(event.target.value)}}
                        options = {allRestaurants}
                    />

                    <Button
                    size = "small"
                    startIcon = {<EditIcon />}
                    color = "primary"
                    href = "/edit"
                    variant  = "contained"
                    ></Button>

                    <Button
                    size = "small"
                    startIcon = {<DeleteOutlineIcon />}
                    color = "secondary"
                    onClick = {handleDelete}
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