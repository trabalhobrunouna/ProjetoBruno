import React, {useState} from 'react'

function AddServico(props) {

    const initialFormState = { id_servico: null, nomeServico: '', insumos: '', horarios: '', detalhesServico: '',
                                portfolio:'' }
    
    const [servico, setServico] = useState(initialFormState)

    
    return (
        <form onSubmit = { event => {
            event.preventDefault();
            if(!servico.horario) return;
            props.addServico(servico);
            setServico(initialFormState);
            }}>
            <button className="botoesCliente">Adicionar Serviço</button>
        </form>
    )
}

export default AddServico