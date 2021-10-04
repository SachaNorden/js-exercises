// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
import Pizza from "./img/Pizza.jpg"; 
import spinoza from "./img/spinoza.jpg";
// This is the entry point to your app : add all relevant import and custom code
let pizzaimg =document.getElementById("pizza");
let spinoz =document.getElementById("spinoza");
let lines=document.forms["form"]["lines"].value;
let column=document.forms["form"]["column"].value;
let string=document.forms["form"]["string"].value;
pizzaimg.src =Pizza;
spinoz.src = spinoza;
function table(){
    for(let i=0;i<lines;i++){
        for(let j=0;j<column;j++){
            let text=string+" [ "+i+" ] [ "+j+" ]";
            alert("yo");
        }
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", table);