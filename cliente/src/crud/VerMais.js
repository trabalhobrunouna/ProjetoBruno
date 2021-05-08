import React, {useState, useEffect, Fragment} from 'react'
import AddAgend from '../forms/AddAgend'

const App = () => {
    const baseUrl = "https://localhost:8080/servicos";

    const initialFormState = { id_servico: null, servico: '', horario: '', profissional: '', avaliacao:'', insumos: '', portfolio:'' }
    
    const [ servico, setServico ] = useState([])
    const [ agend, setAgend ] = useState([])

    useEffect(() => { 
     getServicoService();
     }, []);

    const addAgend = agend => {
        addAgendService(agend);
    }

    return (
       <div className="container">
           <h1>Detalhes do serviço</h1> 
           <div className="flex-row">
            <div className="flex-large">
                        <Fragment>
                            <h2>Agendar horário</h2>
                            <AddAgend addAgend={addAgend} />
                        </Fragment>
             </div>
           </div>
          </div>
               )
                    
async function getServicoService() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setServico(data);
    });
}

async function addAgendService(agend) {
    fetch(baseUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(agend)
    })
    }
}

export default App