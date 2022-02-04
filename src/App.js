import './assets/css/App.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import PricePrediction from './routes/PricePrediction';

import CustomCursor from "./components/CustomCursor";

import UserContext from './contexts/user';
import Cars from './routes/Cars/list';
import CarDetails from './routes/Cars/details';

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
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
    </UserContext.Provider>
  );
}

export default App;