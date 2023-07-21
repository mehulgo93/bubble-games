import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import GameList from './GameList';



function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://api.rawg.io/api/platforms?key=e54d67d773af48d6af7045140de9d84c')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setGames(data.results)
      })
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <GameList games={games} />
    </div>
  )
}

export default App;
