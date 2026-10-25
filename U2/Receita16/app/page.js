import Link from 'next/link'

export default function Home(){
    return (
        <div style={{display:"flex", justifyContent: "space-between", alignItems: "center",}}>
            <h1>
                Viva Santana!
            </h1>
            <div style={{display:"flex", justifyContent: "space-between", alignItems: "center",}}>
                <Link href="/novarota">NovaRota</Link>
                <a href="/novarota">NovaRota</a>
                <a href="/rota1">Rota 1</a>
                <a href="/rota2">Rota 2</a>
                <Botao texto = "esse eh o botao1"></Botao>
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