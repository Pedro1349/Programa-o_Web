import { MariaPrea, Gato } from "./componentes/componentes";
export default function RootLayout({children}) {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh"}}>
            {children}
            <Gato></Gato>
            <MariaPrea name = "Texto enviado para MariaPrea" />
        </div>
    )
}