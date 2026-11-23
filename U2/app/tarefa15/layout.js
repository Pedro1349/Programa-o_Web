import Link from 'next/link'

export default function RootLayout({ children }) {
    console.log("montando layout")

    return (
        <div style={{ minHeight: "100vh" }}>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "green"}}>

                <h1 style={{ padding: "5px" }}>
                    Viva Santana!
                </h1>

                <div style={{
                    padding: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "600px"
                }}>
                    <button>
                        <Link href="/tarefa15/novarota">
                            NovaRota (Link)
                        </Link>
                    </button>

                    <button>
                        <a href="/tarefa15/novarota">
                            NovaRota (tag a)
                        </a>
                    </button>

                    <button>
                        <a href="/tarefa15/rota1">
                            Rota 1
                        </a>
                    </button>

                    <button>
                        <a href="/tarefa15/rota2">
                            Rota 2
                        </a>
                    </button>
                </div>
            </div>

            {children}
        </div>
    )
}