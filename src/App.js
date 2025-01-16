import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Home from './home';
import Navbar from './navbar';
import ChatComponent from './ChatComponents/ChatComponent'; // Ensure correct path
import { Upcoming } from './Appointments/upcoming';
import FindDoctor from './Find a doctor/FindDoctor';
import ContactUs from './Contactus/contactus';
import AboutUs from './About us/AboutUs';
import LoginPage from './LoginPage/LoginPage';
import { DoctorProvider } from './DoctorContext';


function App() {
  return (
    <DoctorProvider>
    <Router>
      <div>
        <Navbar /> {/* Navbar always displayed */}
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />

          {/* ChatComponent Route */}
          <Route path="/talktoai" element={<ChatComponent />} />

          {/* Appointments Route */}
          <Route path="/appointments" element={<Upcoming />} />

          {/* Find a Doctor Route */}
          <Route path="/FindDoctor" element={<FindDoctor />} />

          {/* Contact Us Route */}
          <Route path="/contactus" element={<ContactUs />} />

          {/* About Us Route */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />}
          
           />
           
        </Routes>
      </div>
    </Router>
    </DoctorProvider>
  );
}

export default App;
