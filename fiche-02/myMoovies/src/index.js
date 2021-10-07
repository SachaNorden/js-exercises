// Import Bootstrap CSS
import './stylesheets/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
import Pizza from "./img/Pizza.jpg"; 
import spinoza from "./img/spinoza.jpg";
// This is the entry point to your app : add all relevant import and custom code
let pizzaimg =document.getElementById("pizza");
let spinoz =document.getElementById("spinoza");

pizzaimg.src =Pizza;
spinoz.src = spinoza;
const form = document.querySelector("form");
form.addEventListener("submit", table);

function table(e){
    e.preventDefault();
    let lines=document.forms["form"]["lines"].value;
    let column=document.forms["form"]["column"].value;
    let string=document.forms["form"]["string"].value;
    if(isNaN(lines)){
        alert("Veuillez entrez un nombre valide svp");
        return false;
    }
    if(isNaN(column)){
        alert("Veuillez entrez un nombre valide svp");
        return false;
    }
    let main =document.querySelector("main");
    let table =document.createElement("table");
    //let br =document.createElement("br");
    main.appendChild(table);
    table.setAttribute('class','border border-secondary mt-5');
    
    for(let i=0;i<lines;i++){
        let listRow = document.createElement("tr");
        for(let j=0;j<column;j++){
            let listCol = document.createElement("td");
            listCol.setAttribute('class','border border-primary m-2 p-3');
            let text=document.createTextNode( string+" [ "+i+" ] [ "+j+" ]");
            listCol.appendChild(text);
            listRow.appendChild(listCol);
        }
        table.appendChild(listRow);
    }
}
function array(e){
    
}
