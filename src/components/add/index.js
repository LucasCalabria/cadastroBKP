import React from "react"
import AddForm from './addForm';

const getFreshModelObject = () =>({
    restMasterId : 0,
    restNome : 'none',
    resTel : 'none',
    restEmail : 'none',
    restCidade : 'none',
    restBairro : 'none',
    restRua : 'none',
    restNumero : 'none',
    restPreco : 'none',
    restDesc : 'none',
})

export default function Add(){
    //const [values, setValues] = useState(getFreshModelObject());

    return(
        <AddForm/>
    )
}