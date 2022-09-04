import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Profile/Dialogs';
import Music from './components/Profile/Music';
import News from './components/Profile/News';
import Profile from './components/Profile/Profile';


const App = (props) =>{
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
       
      <Header/>
      <Navbar/>
      
      
      <Routes>
      <Route path='/profile' element={<Profile postDt={props.state.profilePage} addPost={props.addPost}/>}/>
      <Route path='/dialogs' element={<Dialogs dialogsDt={props.state.dialogPage} messagesDt={props.state.dialogPage}/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/music' element={<Music/>}/>
      </Routes>
     
      
    </div>
    </BrowserRouter>
    
  );
}


export default App;
