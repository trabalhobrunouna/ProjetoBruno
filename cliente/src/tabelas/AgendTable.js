import React from 'react'

function AgendTable(props) {
    return (
        <table>
            <thead>
            <tr>
                <th>horarioAgendado</th>
                <th>servico</th>
                <th>horarios</th>
                <th>profissional</th>
                <th>avaliacao</th>
            </tr>
            </thead>
            <tbody>
                {props.agend.length !== 0 ? (
                    props.agend.map(agend => (
                        <tr key={agend.id_agend}>
                            <td>{agend.horarioAgendado}</td>
                            <td>{agend.servico}</td>
                            <td>{agend.horarios}</td>
                            <td>{agend.profissional}</td>
                            <td>{agend.avaliacao}</td>
                            <td>
                                <button 
                                    className="button muted-button"
                                    onClick={() => props.editRow(agend)}>
                                    Alterar horário agendado
                                </button>
                                <button 
                                    className="button muted-button"
                                    onClick={() => props.deleteAgend(agend.id)}>
                                    Excluir agendamento
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Ainda não há nenhum agendamento</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default AgendTable