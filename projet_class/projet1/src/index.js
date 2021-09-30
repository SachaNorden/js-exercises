// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';

import { AnalogClock } from 'customizable-analog-clock'

// This is the entry point to your app : add all relevant import and custom code
const clock = new AnalogClock({
    htmlElement : 'my-clock',
    //showDate: true,
    //showDigitalClock: true,
    showIndicators: true,
    clockIndicators : ['😄', '🙂', '🥪' , '🦜', '🐊', '💻', '🐅', '🐼', '🐘', '🚴‍♂️', '🏂', '🧑'],
    styleOptions : {
        fontSize: '50px',
        fontFamily: 'Roboto'
    }
});
const pageContainer = document.querySelector(".page");
pageContainer.innerHTML=`<div class="alert alert-success">salut toi</div>`
