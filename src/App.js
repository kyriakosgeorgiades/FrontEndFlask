import './assets/css/App.css';

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import FindCar from './routes/FindCar';
import ViewCar from './routes/ViewCar';
import Login from './routes/Login';
import Register from './routes/Register';
import PricePrediction from './routes/PricePrediction';

import CustomCursor from "./components/CustomCursor";

import UserContext from './contexts/user';

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
            <Route path="/find-car" element={<FindCar />} />
            <Route path="/view-car/:id" element={<ViewCar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
    </UserContext.Provider>
  );
}

export default App;