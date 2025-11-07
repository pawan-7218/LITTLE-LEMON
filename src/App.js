
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import MenuPage from "./pages/MenuPage";
import OrderOnlinePage from "./pages/OrderOnlinePage";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index path="/" element={<Homepage />} />
        <Route  path="about" element={<About />} />
        <Route  path="reservation" element={<BookingPage/>} />
        <Route  path="confirmedbooking" element={<ConfirmedBooking/>} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<Login />} />
      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
