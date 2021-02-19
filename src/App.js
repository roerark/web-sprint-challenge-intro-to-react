// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from "./components/Character.js"
import axios from "axios"

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
      .then((response)=>{
          console.log(response.data)
          setPeople(response.data.results)
      })  
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {people.map(char => {
        return <CharacterCard key = {char.name} character = {char} />
      })}
    </div>
  );
}

export default App;