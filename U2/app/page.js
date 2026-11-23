import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Programação Web - U2</h1>

            <h2>Receitas</h2>

            <ul>
                {Array.from({ length: 13 }, (_, i) => i + 9).map(numero => (
                    <li key={numero}>
                        <Link href={`/tarefa${String(numero).padStart(2, "0")}`}>
                            Receita {String(numero).padStart(2, "0")}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
