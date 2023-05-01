import './App.css';
import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import ForzaPage from './components/ForzaPage';
import ViewingPost from './components/ViewingPost';
import Menu from './components/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     
       <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/posts/new' element={<NewPost />} />
           <Route path='/posts/:id' element={<ViewingPost />} />
           <Route path='/forza' element={<ForzaPage />} />
           
       </Routes>
     
    </div>
  );
}

export default App;
