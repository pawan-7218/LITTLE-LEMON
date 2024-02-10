import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index path="/" element={<Homepage />} />
       
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
