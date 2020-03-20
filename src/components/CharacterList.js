import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

function CharacterList() {
  const[characters,setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/').then(response=>{

      setCharacters(response.data.results)
})
   .catch(error => {
      console.log('Server Error', error);
    })
  }, []);

  return (
    <div className="CharacterCard">
      {characters.map(character => (
        <CharacterCard key ={character.id} character={character}/>
      ))}
      <div className = "CharacterCard"></div>
    </div> 
  );
}

export default CharacterList;