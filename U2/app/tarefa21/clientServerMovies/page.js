"use client"

import {searchMovies} from "../actions/movieActions"
import Form from "next/form"
import {useState} from "react"

export default function Home(){
    const [data, setData] = useState({})
    const [chavePesquisa, setChavePesquisa] = useState("")
    const [anoPesquisa, setAnoPesquisa] = useState("")

    async function handleAction(formData){
        const res = await searchMovies(formData)
        const titleSearchKey = formData.get("titleSearchKey")
        const anoPesquisa = formData.get("yearSearchKey")

        setAnoPesquisa(anoPesquisa)
        setChavePesquisa(titleSearchKey)
        setData(res)
    }

    return (
        <div>
            <MovieForm handleAction={handleAction} chavePesquisa = {chavePesquisa} anoPesquisa = {anoPesquisa}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>
    )
}

export function MovieForm({handleAction, chavePesquisa, anoPesquisa}){
    return (
        <form action={handleAction}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" defaultValue={chavePesquisa?? ""}/>
            <br></br>

            <div>
                <label htmlFor="idyearSearchKey" style={{padding:"6px"}}>Ano</label>
                <input id="idyearSearchKey" name="yearSearchKey" defaultValue={anoPesquisa?? ""}/>
            </div>
            <br></br>
            
            <button type="submit">Pesquisar</button>
        </form>
    )
}

export function MovieTable({movies}){
    return (
        <div>
            <div>
                {movies.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  )}
            </div>
        </div>
    )

}