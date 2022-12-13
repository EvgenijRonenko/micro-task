import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';


function App() {
   const topCars = [
            {manufacturer:'BMW', model:'m5cs'},
            {manufacturer:'Mercedes', model:'e63s'},
            {manufacturer:'Audi', model:'rs6'}
        ]

    return (
       <NewComponent topCars={topCars}/>
    );
}

export default App;
