export const carregarTable = (cs, id, hd) => {
    const div = document.getElementById(id)

    div.innerHTML = `
        <table id = "tabela">
            <thead>
                <tr id = "t_header" style="background-color: limegreen;">
                </tr>
            </thead>
            <tbody id ="elementos">
            </tbody>
        </table>
    `

    let elementos = document.getElementById("elementos")
    const itensHtml = cs.map( item => `<tr><td>${item['name']}</td> <td>${item['alcohol']}</td> <td>${item['style']}</td> <td>${item['ibu']}</td></tr>` )
    elementos.innerHTML = `${itensHtml.join("")}`

    let cabecalho = document.getElementById("t_header")
    const headerHtml = hd.map( item => `<th>${item}</th>` ) 
    cabecalho.innerHTML = `${headerHtml.join("")}`

}