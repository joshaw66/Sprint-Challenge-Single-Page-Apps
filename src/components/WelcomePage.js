import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  text-align: center;
  margin: 2%;
`
const Header1Style = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 2%;
  color: white;
`
const PageStyle = styled.div`
`


function WelcomePage() {
  return (
    <PageStyle>
      <HeaderStyle>
        <Header1Style>"There's worse things than becoming a pickle" - Rick Sanchez</Header1Style>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick">
        </img>
      </HeaderStyle>
    </PageStyle>
  );
}

export default WelcomePage;
