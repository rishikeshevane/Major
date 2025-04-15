import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PaymentPage from './pages/PaymentPage';
import ShirtType from './pages/ShirtType';
import CategoryPage from './pages/CategoryPage';
import SubtypePage from './pages/SubtypePage'; // You need to create this
import SellerLogin from "./pages/SellerLogin";
import SellerDashboard from "./pages/SellerDashboard";
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/collection/:category" element={<CategoryPage />} />
        <Route path="/collection/:category/:type" element={<ShirtType />} />
        <Route path="/collection/:category/:type/:subtype" element={<SubtypePage />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/login" element={<Login />} />
        

      </Routes>
    </Router>
    



  );
  

}

export default App;
