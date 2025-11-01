import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Random from '../Components/Random';
import AdminDasboard from '../Layout/AdminDasboard';
import Loginpage from '../Pages/Loginpage';
import RegisterPages from '../Pages/RegisterPages';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/" element={<AdminDasboard />} />
        <Route path="/dashboard" element={<Random />} />
        <Route path="/pharmacy" element={<Random />} />
        <Route path="/patients" element={<Random />} />
        <Route path="/doctors" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
