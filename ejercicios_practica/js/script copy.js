"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

fetch("./bulbasaur.json")
    .then(response => response.json())
    .then(data => {

        let accumulator = ""

        let title = data.name;
        const article = document.querySelector("article");

        let pokeName = document.getElementById("pokeName")
        let pokeTypes = document.getElementById("pokeTypes")
        let pokeStats = document.getElementById("pokeStats")

        pokeName.textContent = title.toUpperCase();
        pokeTypes.textContent = data.types[0].type.name;
        pokeStats.textContent = data.types[1].type.name;

        article.appendChild(pokeName)
        article.appendChild(pokeTypes)
        article.appendChild(pokeStats)

        accumulator +=
            `
            <style>
            th, td {
                padding: 10px;
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

        let tableContainer = document.createElement("div");

        data.stats.forEach(element => {
            accumulator += `
                <td>${element.base_stat}</td>
            `
        });
        accumulator += `
            </thead>
            </table>
        `;
        
        tableContainer.innerHTML = accumulator;

        article.appendChild(tableContainer);

        console.log(article)

    })
    .catch(err => {
        console.error("ERROR: ", err.message);
    });
