import { useState } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Pokedex from './components/Pokedex';
import PokemonCard from './components/PokemonCard';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserInput from './components/UserInput';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonCard />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
