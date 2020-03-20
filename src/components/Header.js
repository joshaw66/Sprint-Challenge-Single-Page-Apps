import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
    >
      <h1>The Rick and Morty MultiVerse!</h1>

    <nav>
    <Link to='/'><button>Home</button></Link>
    <Link to='/Search'><button>Search</button></Link>
    <Link to='/Characters'><button>Characters</button></Link>
    </nav>

    </header>
  );
}
