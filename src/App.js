import './assets/css/App.css';
import Home from './routes/Home';
import FindCar from './routes/FindCar';
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';

function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-car" element={<FindCar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
