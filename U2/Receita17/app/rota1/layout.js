import {Tabela} from "../page"
export default function RootLayout({children}) {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh"}}>
            {children}
            <Tabela></Tabela>
        </div>
    )
}