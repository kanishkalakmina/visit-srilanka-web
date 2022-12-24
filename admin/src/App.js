import {Navbar} from "./component/Navbar";
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import AdminHome from "./pages/AdminHome";
import Festivals from "./pages/Festivals";
import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import {getwPosts} from './actions/posts'
import Wild from "./pages/wild";

function App() { 
  
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  useEffect(()=>{
    dispatch(getwPosts())
  },[dispatch])
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<AdminHome/>}/>
      <Route path='/crudfestival' element={<Festivals/>}/>
      <Route path='/crudwild' element={<Wild/>}/>
      </Routes>
    </Router>

    </> 
  );
}

export default App;
