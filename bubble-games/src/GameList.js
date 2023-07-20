import React from 'react';
import GameCard from './GameCard';

function GameList({ games }) {
    const mappedGames = games.map(game => {
        return <GameCard key={game.id} game={game} />
    })

    return (
        <div className="flex-container">
            {mappedGames}
        </div>
    )
}

export default GameList;