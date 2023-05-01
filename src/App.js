import './App.css';
import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams } from "react-router-dom";
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import ViewingPost from './components/ViewingPost';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     
       <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/posts/new' element={<NewPost />} />
           <Route path='/posts/:id' element={<ViewingPost />} />
                     
       </Routes>
     
    </div>
  );
}

export default App;
