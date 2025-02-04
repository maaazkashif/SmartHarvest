// src/App.js
import React from 'react';
import HarvestRewards from './pages/HarvestRewards';
import RewardsDashboard from './pages/RewardsDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HarvestRewards />} />
          <Route path="dashboard" element={<RewardsDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
