"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");



fetch("./bulbasaur.json")
    .then(response => response.json())
    .then(data => {

        let accumulator = ""
        let test = ""
        /** Procesar los datos **/
        let constjsonData = data.stats;
        console.log(data);

        let title = data.name;
        const article = document.querySelector("article");

        accumulator +=`
            <div><h1>${title.toUpperCase()}</h1></div>
            <div><h1>${data.types[0].type.name}</h1></div>
            <div><h1>${data.types[1].type.name}</h1></div>
            `
        accumulator += 
            `
            <style>
            th, td {
                padding: 10px; /* Ajusta el valor según sea necesario */
            }
            td{
                text-align: center;
            }
            </style>
            <table>
            <thead>
              <tr>
                <th>hp</th>
                <th>attack</th>
                <th>defense</th>
                <th>special-attack</th>
                <th>special-defense</th>
                <th>speed</th>
              </tr>
            `

        data.stats.forEach(element => {
            accumulator += `
                <td>${element.base_stat}</td>
            `
            console.log(element);
        });
        accumulator += `
            </thead>
            </table>
        `;
        article.innerHTML = accumulator;

    })
    .catch(err => {
        console.error("ERROR: ", err.message);
    });
