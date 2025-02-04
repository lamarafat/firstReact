import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './footer'
import Navbar from './navbar'

function App() {
 const [counter, setCounter] = useState(0);
 const increase = ()=> {
  setCounter(counter+1);
 }
 
 const [prod]= useState(
    [
    { name:"iphone x",
      price: 800,
      description: "latest iphone x"
    },
    { name:"iphone 11",
      price: 900,
      description: "latest iphone x"
    },
    { name:"iphone 12",
      price: 1000,
      description: "latest iphone x"
    }
    ,{ name:"iphone 13",
      price: 1100,
      description: "latest iphone x"
    }
    ,{ name:"iphone 14",
      price: 1200,
      description: "latest iphone x"
    }
    ,{ name:"iphone 15",
      price: 1300,
      description: "latest iphone x"
    }
    ,{ name:"iphone 16",
      price: 1400,
      description: "latest iphone x"
    }
  ]
 );
 const [showProd, setShowProd] = useState(false);
 const show = ()=>{
  setShowProd(!showProd);
 }
  return (
    
      <React.Fragment>
        <h1>counter is : {counter} </h1>
        <button onClick={increase}> + </button>
        <button onClick={show}> show product </button>
        {showProd ? 
        <React.Fragment>
        <h2>Products Info</h2>
        <p>product name : {prod[counter].name}</p>
        <p>product price : {prod[counter].price}</p>
        <p>product description : {prod[counter].description}</p>
        </React.Fragment>
        : null}

      </React.Fragment>
  )
}

export default App

