import './App.css';
import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';
import Menu from './components/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     
       <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/posts/new' element={<NewPost />} />
           <Route path='/timeattack' element={<TimeAttackPage />} />
           <Route path='/forza' element={<ForzaPage />} />
           
       </Routes>
     
    </div>
  );
}

export default App;
