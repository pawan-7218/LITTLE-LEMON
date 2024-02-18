import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index path="/" element={<Homepage />} />
        <Route  path="about" element={<About />} />
        <Route  path="reservation" element={<BookingPage/>} />
        <Route  path="confirmedbooking" element={<ConfirmedBooking/>} />
       
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
