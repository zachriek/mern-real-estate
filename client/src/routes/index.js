// React
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
};

export default Router;
