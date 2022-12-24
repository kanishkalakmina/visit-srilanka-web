import './App.css';
import { Navbar } from './components/navbar/Navbar';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Festivals from './pages/festivals/Festivals';
import Home from './pages/home/home';
import Wild from './pages/wild/Wildpost'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/postfconnection'
import { getwPosts } from './actions/postfconnection';
import React,{useEffect} from 'react';

function App() { 
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  useEffect(()=>{
    dispatch(getwPosts())
  },[dispatch])
  
  return ( 
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/festival' element={<Festivals/>}/>
            <Route path='/wild' element={<Wild/>}/>
            

        </Routes>
        

    </Router>
  ); 
}

export default App;
