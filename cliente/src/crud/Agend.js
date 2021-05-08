import React, {useState, useEffect, Fragment} from 'react'
import EditAgend from '../forms/EditAgend'
import AgendTable from '../tabelas/AgendTable'

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
       <div className="container">
           <h1>Agendamentos</h1> 
           <div className="flex-row">
            <div className="flex-large">
            <AgendTable agend={agend} editRow={editRow} deleteAgend={deleteAgend} />
                if (editing) {
                     <Fragment>
                     <h2>Editar Agendamentos</h2>
                     <EditAgend
                         editing={editing}
                         setEditing={setEditing}
                         currentAgend={currentAgend}
                         updateAgend={updateAgend}
                         />
                      </Fragment>
                }
             </div>
           </div>
          </div>
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