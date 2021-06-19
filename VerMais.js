import React, {useState, useEffect, Fragment} from 'react'
import AddAgend from '../Forms/AddAgend'
import VerMaisTable from '../Tabelas/VerMaisTable'
import { NavLink } from 'react-router-dom'

const App = () => {
    const baseUrl = "https://localhost:8080/servicos";

    const initialFormState = { id_servico: null, servico: '', horario: '', profissional: '', avaliacao:'', 
                               insumos: '', portfolio:'' }
    
    const [ servico, setServico ] = useState([])
    const [ agend, setAgend ] = useState([])

    useEffect(() => { 
     getServicoService();
     }, []);

    const addAgend = agend => {
        addAgendService(agend);
    }

    return (
        <section>
        <p class="siteCliente" >ASO.com</p>
       <div className="telaVerMaisCliente">
           <NavLink to="home" style={{ textDecoration: 'none' }}> 
         <div class="voltarCliente">
            <button type="button" class="perfilCliente">
            Voltar
            </button>
         </div>
        </NavLink>

       <div className="containerCliente">
           <h1>Detalhes do serviço</h1> 
           <div className="flex-row">
            <div className="flex-large">
                <section className="resultadoCliente">
                     <Fragment>
                            <VerMaisTable servico={servico} />
                        </Fragment>
                        <Fragment>
                            <h2>Agendar horário</h2>
                            <AddAgend addAgend={addAgend} />
                        </Fragment>
                        </section>
             </div>
           </div>
          </div>
          </div>
          </section>
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