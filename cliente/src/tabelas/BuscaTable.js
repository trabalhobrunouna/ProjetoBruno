import React from 'react'

function BuscaTable(props) {
    return (
        <table>
                <tr>Descrição do Serviço</tr>
                <tr>Horários disponíveis</tr>
                <tr>Nome do Profissional</tr>
                <tr>Avaliação</tr>
                {props.users.length !== 0 ? (
                    props.users.map(busca => (
                        <tr key={busca.servico}>
                            <td>{busca.horario}</td>
                            <td>{busca.profissional}</td>
                            <td>{busca.avaliacao}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Não encontramos serviços relacionados ao buscado</td>
                    </tr>
                )
                }
        </table>
    )
}

export default BuscaTable