import './assets/css/App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import FindCar from './routes/FindCar';
import Login from './routes/Login';
import Register from './routes/Register';
import PricePrediction from './routes/PricePrediction';

import CustomCursor from "./components/CustomCursor";

import UserContext from './contexts/user';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: { loggedIn: false }
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user) {
    console.log("User logged in");
    user.loggedIn = true;
    this.setState({ user: user });
  }

  logout() {
    console.log("User logged out");
    this.setState({ user: { loggedIn: false } });
  }

  render() {
    const context = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    };

    return (
      <UserContext.Provider value={context}>
        <>
          <CustomCursor />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/check-price" element={<PricePrediction />} />
              <Route path="/find-car" element={<FindCar />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </>
      </UserContext.Provider>
    );
  }
}

export default App;
