import {Pag2} from "../page"
export default function RootLayout({children}) {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh"}}>
            <Pag2></Pag2>
            {children}
        </div>
    )
}