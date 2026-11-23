
import Link from 'next/link'

export default function RootLayout({ children }) {
    console.log("montando layout")

    return (
        <div style={{ minHeight: "100vh" }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "green"
            }}>
                <h1 style={{ padding: "5px" }}>
                    Viva Santana!
                </h1>

                <div style={{
                    padding: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "700px"
                }}>
                    <button>
                        <Link href="/tarefa21/novarota">NovaRota (Link)</Link>
                    </button>

                    <button>
                        <a href="/tarefa21/novarota">NovaRota (tag a)</a>
                    </button>

                    <button>
                        <a href="/tarefa21/rota1">Rota 1</a>
                    </button>

                    <button>
                        <a href="/tarefa21/rota2">Rota 2</a>
                    </button>

                    <button>
                        <Link href="/tarefa21/movieSearch">Pesquisar filmes</Link>
                    </button>

                    <button>
                        <Link href="/tarefa21/clientsMovies1">clientsMovies1 (OMDB_API)</Link>
                    </button>

                    <button>
                        <Link href="/tarefa21/clientsMovies2">clientsMovies2 (API própria)</Link>
                    </button>

                    <button>
                        <Link href="/tarefa21/clientServerMovies">clientServerMovies</Link>
                    </button>
                </div>
            </div>

            {children}
        </div>
    )
}
