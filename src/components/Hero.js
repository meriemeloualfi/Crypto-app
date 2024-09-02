import React from 'react';
import './Hero.css'; 
const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1>Welcome to Coin Explore</h1>
            <p>Find and track your favorite cryptocurrencies with ease.</p>
            <button className='explore-btn'>Explore Coins</button>
        </div>
    );
};

export default HeroSection;
