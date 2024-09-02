import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import './Coins.css';

const Coins = (props) => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = props.coins.filter(coin =>
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='container'>
            <input
                type='text'
                placeholder='Search for a coin...'
                value={search}
                onChange={handleSearchChange}
                className='search-input'
            />
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {filteredCoins.map(coin => (
                    <Link to={`/coin/${coin.id}`} key={coin.id}>
                        <CoinItem coins={coin} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Coins;
