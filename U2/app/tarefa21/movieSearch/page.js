import { ImageDefault } from "./componentes/componentes";

export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad', yearSearchKey = '1940', typeSearchKey = "movie"} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=7a7e2055&s=${titleSearchKey}&y=${yearSearchKey}&type=${typeSearchKey}`)
    const data = await res.json()

    return (
        <div>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", minHeight:"80vh"}}>
            {data.Search?.map( (m) => 
            <div key={m.imdbID} style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                {m.Title} --- {m.Year}
                <br></br>
                <ImageDefault src= {m.Poster} fallbackSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwFO3vXeT6jrcmjItILk4BgHskftP3z8hNYut2WrezUQ&s=10"/>
            </div>  )}
            </div>
        </div>
    )
}