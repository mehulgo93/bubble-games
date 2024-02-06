import React from 'react';
import PropTypes from 'prop-types';

function GameCard({ game }) {
    // Default values to handle missing information
    const imageName = game?.name ?? 'Unknown Game';
    const imageUrl = game?.image_background ?? 'default_image_url_here';
    const platformName = game?.platform ?? 'Unknown Platform'; // Assuming you have a 'platform' property

    return (
        <div className="card">
            <img className="img-card" src={imageUrl} alt={imageName} />
            <h2>Name: {imageName}</h2>
            <h4>Platform: {platformName}</h4>
            <h5><button className="card-button">Add to Wish List</button></h5>
        </div>
    );
}

// PropType validation
GameCard.propTypes = {
    game: PropTypes.shape({
        image_background: PropTypes.string,
        name: PropTypes.string.isRequired,
        platform: PropTypes.string, // Adjust based on the actual structure of your game object
    })
};

export default GameCard;
