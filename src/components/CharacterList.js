import React, { useEffect, useState } from "react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

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
      {CharacterList.map(character => (
        <CharacterCard key ={character.id} character={character}/>
      ))}
      <div className = "CharacterCard"></div>
    </div> 
  );
}
