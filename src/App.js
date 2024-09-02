import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './pages/Coin';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 

function App() {
    const [coins, setCoins] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=70&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Routes>
                <Route path='/' element={<Coins coins={coins} />} />
                <Route path='/coin/:coinId' element={<Coin />} />
            </Routes>
        </>
    );
}

export default App;
