import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 30%;
  margin: auto;
  
  `
const Button = styled.div`
  padding: 10px;
  border 3px solid lime;
  margin: 10px;
  border-radius: 5px;
  background-color: lightblue;
  &&:hover{
    background: white;
    color: lime;
  }
  `
const StyleLink = styled(Link)`
  text-decoration: none; 
  color: black;

`

function Header() {
  return (
    <header
    >
      <h1>The Rick and Morty MultiVerse!</h1>

    <Navigation>
    <StyleLink to='/'><Button>Home</Button></StyleLink>
    <StyleLink to='/Search'><Button>Search</Button></StyleLink>
    <StyleLink to='/Characters'><Button>Characters</Button></StyleLink>
    </Navigation>

    </header>
  );
}

export default Header;