import './assets/css/App.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import ViewCar from './routes/ViewCar';
import Login from './routes/Login';
import Register from './routes/Register';
import PricePrediction from './routes/PricePrediction';

import CustomCursor from "./components/CustomCursor";

import UserContext from './contexts/user';
import Cars from './routes/Cars/list';
import FindCar from './routes/FindCar';
import AdminDashboard from './routes/Admin/Dashboard';
import ManageListings from './routes/Admin/ManageListings';

function App() {
  const [user, setUser] = useState([]);

  const dispatchUserEvent = (action, data) => {
    switch (action) {
      case 'LOGIN':
        setUser(data.User);
        console.log("Logged in");
        return;
      case 'LOGOUT':
        setUser(null);
        console.log("Logged out");
        return;
      default:
        return;
    }
  };

  return (
    <UserContext.Provider value={{ user, dispatchUserEvent }}>
      <>
        <CustomCursor />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check-price" element={<PricePrediction />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<ViewCar />} />
            <Route path="/find-car" element={<FindCar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/manage-listings" element={<ManageListings />} />
          </Routes>
        </BrowserRouter>
      </>
    </UserContext.Provider>
  );
}

export default App;