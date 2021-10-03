// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
import Pizza from "./img/Pizza.jpg"; 
import spinoza from "./img/spinoza.jpg";
// This is the entry point to your app : add all relevant import and custom code
let pizzaimg =document.getElementById("pizza");
let spinoz =document.getElementById("spinoza");
pizzaimg.src =Pizza;
spinoz.src = spinoza;
