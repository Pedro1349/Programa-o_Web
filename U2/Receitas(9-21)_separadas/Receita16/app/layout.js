import Link from 'next/link'
export default function RootLayout({children}) {
    console.log("montando layout")
    return (
        <html lang="pt-BR">
            <body style={{minHeight: "100vh",}}>
                <div style={{display:"flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "green"}}>
                    <h1 style={{padding: "5px"}}>
                        Viva Santana!
                    </h1>
                    <div style={{padding: "5px", display:"flex", justifyContent: "space-between", alignItems: "center", width:"600px"}}>
                        <button>
                            <Link href="/novarota">NovaRota (Link)</Link>
                        </button>

                        <button>
                            <a href="/novarota">NovaRota (tag a)</a>
                        </button>

                        <button>
                            <a href="/rota1">Rota 1</a>
                        </button>

                        <button>
                            <a href="/rota2">Rota 2</a>
                        </button>

                        <button>
                            <Link href="/movies">Movies</Link>
                        </button>
                    </div>
                </div>
                {children}
            </body>
        </html>
    )
}