import React from "react";

export default function CharacterCard(props) {
  return (
  <header>
    <img src = {props.character.image}/>
    <div>
      <h1>{props.character.name}</h1>
      <h2>{props.character.species}</h2>
      <h2>{props.character.gender}</h2>
    </div>
  </header>
  );
}
