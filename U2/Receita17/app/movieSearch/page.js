import Form from "next/form"
export default async function MovieForm(){
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh"}}>
            <Form action="/movies" style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh"}}>
                <div >
                    <label htmlFor="idTitleSearchKey" style={{padding:"5px"}}>Título</label>
                    <input id="idTitleSearchKey" name="titleSearchKey"/>
                </div>
                <br></br>

                <div>
                    <label htmlFor="idyearSearchKey" style={{padding:"12px"}}>Ano</label>
                    <input id="idyearSearchKey" name="yearSearchKey"/>
                </div>
                <br></br>

                <div>
                    <label htmlFor="idtypeSearchKey" style={{padding:"12px"}}>Tipo</label>
                    <input id="idtypeSearchKey" name="typeSearchKey"/>
                </div>
                <br></br>

                <button type="submit">Pesquisar</button>
            </Form>
        </div>
    )
}