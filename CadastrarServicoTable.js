import React, {useState} from 'react'






function ServicoTable(props) {

    const [ servico, setServico ] = useState([])

function handleInputChange(event) {
    const { name, value } = event.target
    setServico({ ...servico, [name]: value })
}

    return (
        <section>
        <table className="agendsP">
            
                {props.servico.length !== 0 ? (
                    props.servico.map(servico => (
                        <table>
                        <tr key={servico.id_servico}> </tr>
                            <table>
                            <div className="servico37">
                    <h3>Nome do Serviço:</h3>
                </div>
                <input type="text"
                    name="nomeServico"
                    className="borda1.2"
                    value={servico.nomeServico}
                    onChange={handleInputChange} />

                <div className="insumos">
                    <h3>Insumos Necessários:</h3>
                </div>
                <input type="text"
                    className="borda2.3"
                    name="insumos"
                    value={servico.insumos}
                    onChange={handleInputChange} />

                    <div className="horarios">
                    <h3>Horário:</h3>
                </div>
                <input type="text"
                    className="borda2.4"
                    name="horarios"
                    value={servico.horarios}
                    onChange={handleInputChange} />

                <div className="detalhes">
                    <h3>Detalhes do Serviço:</h3>
                </div>
                <input type="text"
                    className="borda2.5"
                    name="detalhes"
                    value={servico.detalhesServico}
                    onChange={handleInputChange} />

                    <div className="portfolio">
                    <h3>Portfólio:</h3>
                </div>
                <input type="text"
                    className="borda2.6"
                    name="portfólio"
                    value={servico.insumos}
                    onChange={handleInputChange} />

                    
                
                            </table>
                            </table>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3} >Ainda não há nenhum agendamento</td>
                    </tr>
                    
                    
                )
                }
             
        </table>
        </section> 
    )
}

export default ServicoTable