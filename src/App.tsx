import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './lib/components/Login';
import AppLayout from './lib/components/AppLayout';
import Dashboard from './lib/components/Dashboard';
import Soundboard from './lib/components/Soundboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/soundboards" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path=":soundboardId" element={<Soundboard />} />
      </Route>
    </Routes>
  );
}

export default App;
