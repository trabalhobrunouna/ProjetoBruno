import React, {useState, useEffect} from 'react'
import BuscaTable from '../tabelas/BuscaTable'

const Busca = () => {
    const baseUrl = "https://localhost:8080/busca";

    const initialFormState = { servico: '', horario: '', profissional: '', avaliacao:''}
    
    const [ busca, setBusca ] = useState([])

    useEffect(() => { 
     getBuscaService();
     }, []);

    return (<BuscaTable busca={busca} />)
                    
async function getBuscaService() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setBusca(data);
    });
}
}

export default Busca