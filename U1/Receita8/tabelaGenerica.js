function carregarTable (cs, id, hd) {
    const div = document.getElementById(id)
    let headers = hd

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
    const itensHtml = cs.map( item => `<tr style= "padding: 7px;"><td style="border: 1px solid;padding: 5px;">${item[headers[0]]}</td> <td style="border: 1px solid;padding: 5px;">${item[headers[1]]}</td> <td style="border: 1px solid;padding: 5px;">${item[headers[2]]}</td> <td style="border: 1px solid;padding: 5px;">${item[headers[3]]}</td></tr>` )
    elementos.innerHTML = `${itensHtml.join("")}`

    let cabecalho = document.getElementById("t_header")
    const headerHtml = hd.map( item => `<th>${item}</th>` ) 
    cabecalho.innerHTML = `${headerHtml.join("")}`

}