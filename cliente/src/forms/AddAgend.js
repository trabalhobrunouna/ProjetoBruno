import React, {useState} from 'react'

function AddAgend(props) {

    const initialState = { id_servico: null, horarioAgendado:'', servico: '', horario: '', profissional: '', avaliacao:'', insumos: '', portfolio:'' }
    
    const [agend, setAgend] = useState(initialState)

    function handleInputChange(event) {
        const { name, value } = event.target
        setAgend({ ...agend, [name]: value })
    }

    return (
        <form onSubmit = { event => {
            event.preventDefault();
            if(!agend.horarioAgendado) return;
            props.addAgend(agend);
            setAgend(initialState);
        }

        }>
            <label>Digite o horário desejado</label>
            <input type="text" 
                name="horarioAgendado" 
                value={agend.horarioAgendado} 
                onChange={handleInputChange}/>
            <button>Agendar</button>
        </form>
    )
}

export default AddAgend