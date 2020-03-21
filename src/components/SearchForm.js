import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2%;
  padding: 1%;
  background-color: lightblue;
`
const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`

const H1Style = styled.div`
  color: lime;
  font-size: 1.5rem;
  text-shadow: 1px 1px black;
`

const EliminateButton = styled.div`
  text-align: center;
  margin: 3%; 
`


function SearchForm() {
 
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
      <EliminateButton>
      <input
        id="name" 
        type="text" 
        name="textfield" 
        placeholder="Eliminate Target"
        value={query} 
        onChange={handleInputChange}
      /></EliminateButton>
  
    {data.map((character => {
  
    return(
  
    <CardStyle>
    <img src = {character.image}/>
    <TextStyle>
      <H1Style>{character.name}</H1Style>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
    </TextStyle>
  </CardStyle>
  
    )
  }	
  ))}
  </div>
  )}

  export default SearchForm;