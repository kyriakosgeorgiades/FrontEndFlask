import './assets/css/App.css';
import Home from './routes/Home';
import FindCar from './routes/FindCar';
import ViewCar from './routes/ViewCar';
import CustomCursor from "./components/CustomCursor";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-car" element={<FindCar />} />
          <Route path="/view-car/:id" element={<ViewCar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;