import React from 'react';

function GameCard({ game }) {
    return (
        <div className="card">
            <img className="img-card" src={game.image_background} alt={game.name} />
            <h3>{game.games.name}</h3>
            <h4>Slug: {game.games.slug}</h4>
        </div>

    )

}

export default GameCard;