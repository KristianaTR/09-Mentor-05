




function getStreetNames(){

    const rawData = document.querySelector("#data_source").value;
    
    //atlasu tabulu 
    const filteredDataFirst = rawData.split("<table")[1];
    const filteredDataSecond = filteredDataFirst.split("</table>")[0];

    //sadalu tabulu pa rindām un ielieku masīvā
    const filteredTableRows = filteredDataSecond.split("</tr>");
    console.log(filteredTableRows);


    //nodefinēju jaunus masīvus, lai ieliktu jaunās atlasītās vērtības
    let filteredStreetCells = []; 
    let streetNames = [];

    //gribu iziet katrai masīva vērtībai (katrai tabulas rindiņai) cauri, 
    //lai paņemtu tikai daļu ar ielas nosaukumu
    for(let i = 1; i < filteredTableRows.length-1; i++){
        let zzz = filteredTableRows[i].split("</a>")[0];
        //console.log(zzz);
       
        streetNames.push(zzz.split('">')[1]);
            
           
    };
    console.log(streetNames);
    console.log(streetNames.length);

    for(i=0; i<= streetNames.length; i++){
        const resultContainer = document.querySelector(".street_names");
        const streetContainer = document.createElement("div");
        streetContainer.className = "street_container";
        streetContainer.innerHTML = streetNames[i];
        resultContainer.append(streetContainer);
    }
    
    
};