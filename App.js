import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snacks from './Snacks';
import Beverage from './Beverage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Breakfast" element={<Breakfast/>} />
          <Route path="Lunch" element={<Lunch/>} />
          <Route path="Dinner" element={<Dinner/>} />
          <Route path="Snacks" element={<Snacks/>} />
          <Route path="Beverage" element={<Beverage/>} />
         
          
</Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
