import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Europa from './pages/Europa';

import './App.css';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/europa' element={<Europa/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
