"use client"

import Form from "next/form"
import {useState} from "react"

export default function Home(){
    const [chavePesquisa, setChavePesquisa] = useState("")
    const [resultMovies, setResultMovies] = useState([])

    async function handleAction(formData){
        const titleSearchKey = formData.get("titleSearchKey")

        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=7a7e2055&s&s=${titleSearchKey}`)
        const jsonRes = await httpRes.json()

        setChavePesquisa(titleSearchKey)
        setResultMovies(jsonRes.Search || [])
    }

    return (
        <div>
            <MovieForm handleAction={handleAction} chavePesquisa = {chavePesquisa}/>
            <MovieTable movies={ resultMovies }/>
        </div>

    )
}

export function MovieForm({handleAction, chavePesquisa}){
    return (
        <form action={handleAction}>
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" defaultValue={chavePesquisa?? ""}/>
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