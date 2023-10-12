//import React from 'react'
//import Home from './Home'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Cars from './Cars'
import Interface from './Interface';

function App() {
  return (
    <div>
      <nav>
        <Routes>
          <Route path="/" element={<Interface/>}/>
          <Route path='/Home' element={<Cars/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </nav>
    
    
    </div>
  );
}

export default App;
