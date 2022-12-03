import React from 'react';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import Recom from '../src/pages/Recom';
import New from '../src/pages/New';
import Popular from '../src/pages/Popular';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Recom' element={<Recom />} />
          <Route path='/new' element={<New />} />
          <Route path='/Popular' element={<Popular />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

