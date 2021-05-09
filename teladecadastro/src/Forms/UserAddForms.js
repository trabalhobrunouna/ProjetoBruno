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

    return (
        <form onSubmit={event => {
            event.preventDefault();
            //if (!user.nome || !user.usuario || !user.email || !user.confirmarsenha || !user.senha || !user.sobrenome || !user.cidade || !user.estado || !user.genero) return;
            props.addUser(user);
            setUser(initialState);
            console.log(user);
        }

        }>
            <div class="NomeDoSite">
                <p>ASO.com</p>
            </div>
            <div class="TituloCadastro">
                <h1>Crie Sua Conta ASO</h1>
            </div>
            <section class="segundofundo">
                <div class="Escolha">
                    <h2>Escolha seu tipo de conta</h2>
                </div>
                <div class="Conteudo">
                    <label class="radio1" for="Profissional">Profissional</label>
                    <input type="radio"
                        name="usuario"
                        class="radio1"
                        value="profissional"
                        checked={user.usuario === 'profissional'}
                        onChange={handleInputChange} />
                    <label class="radio1" for="Cliente">Cliente</label>
                    <input type="radio"
                        name="usuario"
                        class="radio1"
                        value="cliente"
                        checked={user.usuario === 'cliente'}
                        onChange={handleInputChange} />
                </div>

                <div class="email">
                    <h3>Email:</h3>
                </div>
                <input type="text"
                    name="email"
                    class="borda1"
                    value={user.email}
                    onChange={handleInputChange} />

                <div class="senha">
                    <h3>Senha:</h3>
                </div>
                <input type="password"
                    class="borda2"
                    name="senha"
                    id="senha"
                    value={user.senha}
                    onChange={handleInputChange} />
                <p class="Requisito">Mínimo de 8 caracteres, <br />e pelo menos 1 número!</p>

                <div className="form-group">
                    <input className="checkbox" type="checkbox" onClick={() =>MostrarSenha()} />
                    <label className="Mostrar" for="MostrarSenha">Mostrar <br />Senha</label>
                </div>

                <div class="ConfirmaSenha">
                    <h3>Confirma Senha:</h3>
                </div>
                <input type="password"
                    name="confirmarsenha"
                    id="confirmarsenha"
                    class="borda3"
                    value={user.confirmarsenha}
                    onChange={handleInputChange} />

                <div className="form-group">
                    <input className="checkbox1" type="checkbox" onClick={() =>ConfirmarSenha()} />
                    <label className="Mostrar2" for="ConfirmarSenha">Mostrar Senha</label>
                </div>

                <div class="Nome">
                    <h3>Nome:</h3>
                </div>
                <input type="text"
                    name="nome"
                    class="borda4"
                    value={user.nome}
                    onChange={handleInputChange} />

                <div class="Sobrenome">
                    <h3>Sobrenome:</h3>
                </div>
                <input type="text"
                    name="sobrenome"
                    class="borda5"
                    value={user.sobrenome}
                    onChange={handleInputChange} />

                <div class="Cidade">
                    <h3>Cidade:</h3>
                </div>
                <input type="text"
                    name="cidade"
                    class="borda6"
                    value={user.cidade}
                    onChange={handleInputChange} />

                <div class="Estado">
                    <h3>Estado:</h3>
                </div>
                <input type="text"
                    name="estado"
                    class="borda7"
                    value={user.estado}
                    onChange={handleInputChange} />

                <div class="Gênero">
                    <h3>Gênero:</h3>
                </div>
                <div class="Content">
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
            <div class="Nome">
                <button type="submit" class="btn"><strong>CADASTRAR</strong><em /></button>
            </div>
        </form>
    )
}
export default AddUserForm