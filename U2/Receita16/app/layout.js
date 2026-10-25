export default function RootLayout({children}) {
    console.log("montando layout")
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    )
}