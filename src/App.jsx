import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home'
import { CapsAnime } from './pages/CapsAnime/CapsAnime';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anime' element={<CapsAnime />} />
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