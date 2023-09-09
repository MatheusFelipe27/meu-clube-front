import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DepartmentDetails from './pages/departmentDetails/DepartmentDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:departmentName' element={<DepartmentDetails/>} />
        </Routes>
      </Router>
    </>    
  );
}

export default App;
