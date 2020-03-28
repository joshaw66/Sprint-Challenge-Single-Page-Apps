import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from 'react-router-dom'
import SearchForm from "./components/SearchForm.js";
import styled from "styled-components";

const MainStyle = styled.div`
  background-color: darkgrey;
  padding: 10%;
  `

function App() {
  return (
    <MainStyle data-testid='app'>
      <Header />
      <Route path ='/Search'><SearchForm /></Route>
      <Route exact path='/'><WelcomePage /></Route>
      <Route path = '/Characters'><CharacterList /></Route>
    </MainStyle>
  );
}

export default App;
