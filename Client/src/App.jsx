import { useState } from "react";
import "./App.css";
import SignupPage from "./pages/SingupPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/Feature";
import PricingPage from "./pages/Pricing";
import LoginPage from "./pages/LoginPage";
import PriceForecast from "./components/utils/PriceForecast";
import TicketsList from "./components/utils/TicketList";
import BookingPage from "./pages/BookingPage";
import PaymentSuccess from "./components/utils/PaymentSuccess";
import Payment from "./components/utils/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main" element={<BookingPage />} />
          <Route path="/forecast" element={<PriceForecast />} />
          <Route path="/my" element={<TicketsList />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
