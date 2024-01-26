import React from 'react';

function GameCard({ game }) {
    return (
        <div className="card">
            <img className="img-card" src={game.image_background} alt={game.name} />
            <h3>{game.games.name}</h3>
            <h4>Slug: {game.games.slug}</h4>
            <h5><button className="card-button">Add to Wish List</button></h5>
            <h6>Price: {game.games.price}</h6>
        </div>

    )

}

export default GameCard;