import React, {useState, useEffect, Fragment} from 'react'
import CadastrarServicoTable from '../Tabelas/CadastrarServicoTable'
import { NavLink } from 'react-router-dom'
import AddServico from '../Forms/AddServico'

const CadServico = () => {
    const baseUrl = "https://bancocadastro.herokuapp.com/cadastros";

    const initialFormState = { id_servico: null, nomeServico: '', insumos: '', horarios: '', detalhesServico: '',
                                portfolio:'' }
    
    const [ servico, setServico ] = useState([])

    useEffect(() => { 
     getServicoService();
     }, []);

    const addServico = servico => {
        addServicoService(servico);
    }

    return (
        <section>
        <p class="siteP" >ASO.com</p>
       <div className="telaVerMaisP">
           <NavLink to="profissional" style={{ textDecoration: 'none' }}> 
         <div class="voltarP">
            <button type="button" class="PerfilP">
            Voltar
            </button>
         </div>
        </NavLink>

       <div className="containerP">
           <h1>Detalhes do serviço</h1> 
           <div className="flex-row">
            <div className="flex-large">
                <section className="resultadoP">
                     <Fragment>
                            <CadastrarServicoTable servico={servico} />
                        </Fragment>
                        <Fragment>
                            <h2>Adicionar Serviço</h2>
                            <AddServico addServico={addServico} />
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
        setServico([data]);
    });
}

async function addServicoService(servico) {
    fetch(baseUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(servico)
    })
    }
}

export default CadServico