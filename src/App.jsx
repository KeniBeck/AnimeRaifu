import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home'
import { CapsAnime } from './pages/CapsAnime/CapsAnime';
import { VideoAnime } from './pages/VideoAnime/VideoAnime';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anime' element={<CapsAnime />} />
        <Route path='/videoanime' element={<VideoAnime />} />
      </Routes>
      
    </>    
  )
}

export default App




// <Router>
//       <div className="app">
//         <Header />
//           <Switch>
//             <Route exact path="/" component={Home} />
//           </Switch>
//         <Footer />
//       </div>
//     </Router>