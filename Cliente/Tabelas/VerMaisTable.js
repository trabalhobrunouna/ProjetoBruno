import React from 'react'

function AgendTable(props) {
    return (
        <table>
            <tbody>
                <section className="detalhesCliente">
                {props.servico.length !== 0 ? (
                    props.servico.map(servico => (
                        <tr key={servico.id_servico}>
                            <td>{servico.servico}</td>
                            <td>{servico.horarios}</td>
                            <td>{servico.profissional}</td>
                            <td>{servico.avaliacao}</td>
                            <td>{servico.insumos}</td>
                            <td>{servico.portfolio}</td>
                        </tr>
                    ))
                ) : (
                    <p>não há detalhes</p>
                )
                }
                </section>
            </tbody>
        </table>
    )
}

export default AgendTable