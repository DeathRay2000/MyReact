
import {React, useState, useEffect} from 'react'
function PeriodicTable(){
    const [chem1, setChem1] = useState('');
const [chem2, setChem2] = useState('');

function SelectElement(element){
if(chem1 === null){
    setChem1(element);
    console.log(chem1);
}
else if(chem2 === null){
    setChem2(element);
    console.log(chem2);
}


}

function MyReact(chem1, chem2){
if(chem1 === null || chem2 ===null){
    console.log('please select two elements');
}
else if(chem1 === hydrogen && chem2 === oxygen ||
     chem2 === hydrogen && chem1 === oxygen){
         console.log('Congratulations! You got Water');
     }
}

 

    return(
        <div><button onclick = {SelectElement(hydrogen)}>Hydrogen</button>
        <button onclick = {SelectElement(helium)}>Helium</button>
        <button onclick = {SelectElement(oxygen)}>Oxygen</button>
        <button onclick = {SelectElement(boron)}>Boron</button>
        <button onclick = {SelectElement(lithium)}>Lithium</button>
        <button onclick = {SelectElement(nitrogen)}>Nitrogen</button>
        <button onclick = {SelectElement(Carbon)}>Carbon</button>
        <button onclick = {SelectElement(beryllium)}>Beryllium</button>
        <button onclick = {SelectElement(fluorine)}>Fluorine</button>
        <button onclick = {SelectElement(sodium)}>Sodium</button>
        <button onclick = {SelectElement(chlorine)}>Chlorine</button>
        <button onclick = {MyReact(chem1, chem2)}>React!</button>
        </div>
        

        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
        // <button onclick = {selectElement(hydrogen)}><img src = 'https://cdn5.vectorstock.com/i/1000x1000/99/59/periodic-table-element-hydrogen-icon-vector-21249959.jpg'/></button>
    )
        
    
}
export default PeriodicTable