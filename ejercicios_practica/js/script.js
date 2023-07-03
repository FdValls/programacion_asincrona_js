"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

fetch("./bulbasaur.json")
    .then(response => response.json())
    .then(data => {

        let accumulator = ""

        let title = data.name;
        const article = document.querySelector("article");

        accumulator += `
            <div>${title.toUpperCase()}</div>
            <div>${data.types[0].type.name}</div>
            <div>${data.types[1].type.name}</div>
            `
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

        data.stats.forEach(element => {
            accumulator += `
                <td>${element.base_stat}</td>
            `
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
