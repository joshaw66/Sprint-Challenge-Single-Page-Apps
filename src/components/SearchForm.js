import React, { useState, useEffect } from "react";
import axios from "axios";


export default function SearchForm() {
 
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then (response =>{
      const characters = response.data.results.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
      );
  
      setData (characters);
    });
  },[query]);
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        id="name" 
        type="text" 
        name="textfield" 
        placeholder="Search"
        value={query} 
        onChange={handleInputChange}
      />
  
    {data.map((character => {
  
    return(
  
    <div>
    <img alt="character" src={character.image} /><br/>
    <section>
    <h1>{character.name}</h1> <br/>
    <h2>{character.species}</h2> <br/>
    <h2>{character.gender}</h2>
    </section>
    </div>
  
    )
  }	
  ))}
  </div>
  )}