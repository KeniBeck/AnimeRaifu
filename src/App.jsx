import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home'
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
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