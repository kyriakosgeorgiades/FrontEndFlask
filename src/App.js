import './assets/css/App.css';
import Home from './routes/HomePage';
import FindCar from './routes/FindCar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-car" element={<FindCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
