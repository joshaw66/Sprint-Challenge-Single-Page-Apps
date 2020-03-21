import React from "react";
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

function CharacterCard(props) {
  return (
  <CardStyle>
    <img src = {props.character.image}/>
    <TextStyle>
      <H1Style>{props.character.name}</H1Style>
      <h2>{props.character.species}</h2>
      <h2>{props.character.gender}</h2>
    </TextStyle>
  </CardStyle>
  );
}

export default CharacterCard;