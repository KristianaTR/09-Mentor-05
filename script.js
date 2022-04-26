


function getData(){
const rawData = document.querySelector("#data_source").value;
const filteredDataFirst = rawData.split("<table")[1];

const filteredDataSecond = filteredDataFirst.split("</table>")[0];

const filteredTableRows = filteredDataSecond.split("</tr>");
//console.log(filteredTableRows);


/* Izcēlu ārā divus mainīgos, lai tos varētu izmantot vairāki, viens otram sekojoši cikli 
-> BET ŠIS NENOSTRĀDĀJA  */
let filteredSteetCells = []; 
let streetName = [];

for(let i = 1; i <= filteredTableRows.length; i++){
    filteredSteetCells[i-1] = filteredTableRows[i].split("</td>")[0];
   streetName[i-1] = filteredSteetCells[i-1].split('">')[1];
   console.log(streetName[i-1].split("</a>")[0]);
   return (streetName[i-1].split("</a>")[0]);
};
/*
for (let j = 0; j <= filteredSteetCells.length; j++){
    console.log(filteredSteetCells[j].split('">')[1]);
};
*/
/*for(let j = 1; j<= filteredData.lenght; j++){
 console.log(filteredData[j].split(""))
}*/

//console.log(filteredTableRows);
//return refinedData;


};



function getStreetNames(){
    var streetNames = getData();
    const resultContainer = document.querySelector(".street_names");
    const streetContainer = document.createElement("div");
    streetContainer.className = "street_container";
    streetContainer.innerHTML = streetNames;
    resultContainer.append(streetContainer);
    
};