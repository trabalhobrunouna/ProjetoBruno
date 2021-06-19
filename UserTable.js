import React from 'react'

function UserTable(props) {
    return (
        <table>

            <tbody>
                {props.users.length !== 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <table>
                                <tr>
                                    <td>Usuário</td>
                                    <td>{user.usuario}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <td>Senha</td>
                                    <td>{user.senha}</td>
                                </tr>
                                <tr>
                                    <td>Confirmar Senha</td>
                                    <td>{user.confirmarSenha}</td>
                                </tr>
                                <tr>
                                    <td>Nome</td>
                                    <td>{user.nome}</td>
                                </tr>
                                <tr>
                                    <td>Sobrenome</td>
                                    <td>{user.sobrenome}</td>
                                </tr>
                                <tr>
                                    <td>Cidade</td>
                                    <td>{user.cidade}</td>
                                </tr>
                                <tr>
                                    <td>Estado</td>
                                    <td>{user.estado}</td>
                                </tr>
                                <tr>
                                    <td>Gênero</td>
                                    <td>{user.genero}</td>
                                </tr>

                                


                            </table>

                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Deu ruim</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    )
}

export default UserTable