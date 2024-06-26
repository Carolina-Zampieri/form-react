import { useState } from "react";
import "./MyForm.css";

function MyForm({ userName, userEmail }) {

    //gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value);
    }

    //envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role)

        //limpar o form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    console.log(name, email);

    return (
        <div>
            {/* Criação de form */}
            {/* envio de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}

                        //controlled input
                        value={name || ""}
                    />
                </div>

                {/* label emvolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="text" name="email" placeholder="Digite o seu e-mail"
                        //simplificando a manipulação:
                        onChange={(e) => setEmail(e.target.value)}
                        //controlled input
                        value={email || ""}
                    />
                </label>

                {/* input textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/* select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}
                        value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>

        </div>
    )
}

export default MyForm