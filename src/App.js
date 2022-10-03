import React from "react";
import "./style.css";

const AgarraJuego =  ()=>{

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
    .then(response => response.json())
    .then((response)=>console.log(response)     
   
    )
    .catch(err => console.error(err));
   
}



export default function App() {
  AgarraJuego();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
