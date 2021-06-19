import React, { useState } from 'react'

function AddUserForm(props) {
    const initialState = { id: null, usuario: '', email: '', senha: '', confirmarsenha: '', nome: '', sobrenome: '', cidade: '', estado: '', genero: ''}
    const [user, setUser] = useState(initialState)

    function handleInputChange(event) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    function MostrarSenha(){
        var Senha=document.getElementById("senha");
        if(Senha.type === "password"){
            Senha.type = "text";
        }else{
            Senha.type = "password";
        }
    }
    
    function ConfirmarSenha(){
        var Senha=document.getElementById("confirmarsenha");
        if(Senha.type === "password"){
            Senha.type = "text";
        }else{
            Senha.type = "password";
        }
    }

    function myfunction2(){
        window.alert("O cadastro foi realizado com sucesso!");
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (!user.nome || !user.usuario || !user.email || !user.confirmarSenha || !user.senha || !user.sobrenome || !user.cidade || !user.estado || !user.genero) return;
            props.addUser(user);
            setUser(initialState);
        }

        }>
            <div className="NomeDoSite">
                <p>ASO.com</p>
            </div>
            <div className="TituloCadastro">
                <h1>Crie Sua Conta ASO</h1>
            </div>
            <section className="segundofundo">
                <div className="Escolha">
                    <h2>Escolha seu tipo de conta</h2>
                </div>
                <div className="Conteudo">
                    <label className="radio1" for="Profissional">Profissional</label>
                    <input type="radio"
                        name="usuario"
                        className="radio1"
                        value="profissional"
                        checked={user.usuario === 'profissional'}
                        onChange={handleInputChange} />
                    <label className="radio1" for="Cliente">Cliente</label>
                    <input type="radio"
                        name="usuario"
                        className="cliente"
                        value="cliente"
                        checked={user.usuario === 'cliente'}
                        onChange={handleInputChange} />
                </div>

                <div className="email">
                    <h3>Email:</h3>
                </div>
                <input type="text"
                    name="email"
                    className="borda1"
                    value={user.email}
                    onChange={handleInputChange} />

                <div className="senha">
                    <h3>Senha:</h3>
                </div>
                <input type="password"
                    className="borda2"
                    name="senha"
                    id="senha"
                    value={user.senha}
                    onChange={handleInputChange} />
                <p className="Requisito">Mínimo de 8 caracteres, <br />e pelo menos 1 número!</p>

                <div className="form-group">
                    <input className="checkbox" type="checkbox" onClick={() =>MostrarSenha()} />
                    <label className="Mostrar" for="MostrarSenha">Mostrar <br />Senha</label>
                </div>

                <div className="ConfirmaSenha">
                    <h3>Confirma Senha:</h3>
                </div>
                <input type="password"
                    name="confirmarSenha"
                    id="confirmarsenha"
                    className="borda3"
                    value={user.confirmarSenha}
                    onChange={handleInputChange} />

                <div className="form-group">
                    <input className="checkbox1" type="checkbox" onClick={() =>ConfirmarSenha()} />
                    <label className="Mostrar2" for="ConfirmarSenha">Mostrar Senha</label>
                </div>

                <div className="Nome">
                    <h3>Nome:</h3>
                </div>
                <input type="text"
                    name="nome"
                    className="borda4"
                    value={user.nome}
                    onChange={handleInputChange} />

                <div className="Sobrenome">
                    <h3>Sobrenome:</h3>
                </div>
                <input type="text"
                    name="sobrenome"
                    className="borda5"
                    value={user.sobrenome}
                    onChange={handleInputChange} />

                <div className="Cidade">
                    <h3>Cidade:</h3>
                </div>
                <input type="text"
                    name="cidade"
                    className="borda6"
                    value={user.cidade}
                    onChange={handleInputChange} />

                <div className="Estado">
                    <h3>Estado:</h3>
                </div>
                <input type="text"
                    name="estado"
                    className="borda7"
                    value={user.estado}
                    onChange={handleInputChange} />

                <div className="Gênero">
                    <h3>Gênero:</h3>
                </div>
                <div className="Content">
                    <label for="M">M</label>
                    <input type="radio" id="M" name="genero"
                        value="M"
                        checked={user.genero === 'M'}
                        onChange={handleInputChange} />
                    <label for="F">F</label>
                    <input type="radio" id="F" name="genero"
                        value="F"
                        checked={user.genero === 'F'}
                        onChange={handleInputChange} />
                    <label for="Outro">Outro</label>
                    <input type="radio" id="Outro" name="genero"
                        value="Outro"
                        checked={user.genero === 'Outro'}
                        onChange={handleInputChange} />
                    <label for="Prefiro não informar">Prefiro não <br />informar</label>
                    <input type="radio" id="Prefiro não informar" name="genero"
                        value="Prefironaoinformar"
                        checked={user.genero === 'Prefironaoinformar'}
                        onChange={handleInputChange} />
                </div>
            </section>
            <div className="Nome">
                <button type="submit" className="btn" onClick={()=> myfunction2()}><strong>CADASTRAR</strong><em /></button>
            </div>
        </form>
    )
}
export default AddUserForm