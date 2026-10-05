export default function Home(){
    return (
        <div>
            <div>Menu principal</div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Botao texto = "esse eh o botao1"></Botao>
                <br></br>
                <br></br>
                <Botao texto = "esse eh o botao2"></Botao>
            </div>
        </div>
    )
}

export function Botao(props) {
    return (
        <button>{props.texto}</button>
    )
}

export function Pag2() {
    return (
        <div>
            <h1>Olá, essa é a rota2</h1>
        </div>
    )
}

export function Tabela() {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                </tr>
                <tr>
                    <th>
                        Nome
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        01
                    </td>
                </tr>
                <tr>
                    <td>
                        teste
                    </td>
                </tr>
            </tbody>
        </table>
    )
}