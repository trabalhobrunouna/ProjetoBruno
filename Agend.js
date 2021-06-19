import React, {useState, useEffect, Fragment} from 'react'
import EditAgend from '../Forms/EditAgend'
import AgendTable from '../Tabelas/AgendTable'
import { NavLink } from 'react-router-dom'

const Agendado = () => {
    const baseUrl = "https://localhost:8080/agendamentos_cliente";

    const initialFormState = { id_agend: null, horarioAgendado:'', servico: '', horarios: '', 
                               profissional: '', avaliacao:''}
    
    const [ agend, setAgend ] = useState([])
    const [ currentAgend, setCurrentAgend ] = useState(initialFormState)
    const [ editing, setEditing ] = useState(false)

    useEffect(() => { 
     getAgendService();
     }, []);

    const deleteAgend = id_agend => {
        if(window.confirm("Você tem certeza que deseja deletar?")) {
            setEditing(false)
            removeAgendService(id_agend);
        }
    }

    const updateAgend = (id_agend, updateAgend) => {
        updateAgendService(updateAgend)
    }

    const editRow = agend => {
        setEditing(true)
        setCurrentAgend({id_agend: agend.id_agend, horarioAgendado: agend.horarioAgendado, servico: agend.servico, horarios: agend.horarios,
            profissional: agend.profissional, avaliacao: agend.avaliacao,})
    }

    return (
        <section>
        <p class="siteCliente" >ASO.com</p>
       <div className="telaAgendadoCliente">
           <NavLink to="home" style={{ textDecoration: 'none' }}> 
         <div class="voltarCliente">
            <button type="button" class="perfilCliente">
            Voltar
            </button>
         </div>
        </NavLink>
       <div className="containerCliente">
           <h1>Agendamentos</h1> 
           <div className="flex-row">
            <div className="flex-large">
                <section className="resultadoCliente">
            <AgendTable className="telaAgendadoCliente" agend={agend} editRow={editRow} deleteAgend={deleteAgend} />
            {editing ? (
                     <Fragment className="telaAgendadoCliente">
                     <EditAgend 
                         editing={editing}
                         setEditing={setEditing}
                         currentAgend={currentAgend}
                         updateAgend={updateAgend}
                         />
                      </Fragment>
                       ) : (
                        null
                       )}
                      </section>
             </div>
           </div>
          </div>
          </div>
          </section>
         

         
               )
                    
async function getAgendService() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setAgend(data);
    });
}

async function removeAgendService(id_agend) {
    fetch(baseUrl+id_agend, {
        method: "DELETE"
    })
    .then(response => {
        getAgendService();
    })
}

async function updateAgendService(agend) {
    fetch(baseUrl+agend.id_agend, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
    },
    method: "PUT",
    body: JSON.stringify(agend)
})
.then(
    response => {
        setCurrentAgend(agend);
        getAgendService()
    })   
}
}

export default Agendado