import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Services from './Services';
import About from './pages/About';
import Home from './pages/Home'
import BookService from './BookService';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DashboardRender from './Dashboard/DashboardRender'
import BlogList from './UI/BlogList';
import Contact from './pages/Contact'
import EmployeeRegister from './EmployeeForm/EmployeeRegister';
import EmployeeAttendance from './Attendance/AttendanceSheet'
const Routing = () => {
  return (
    <div>
    
    <BrowserRouter>

    {/* < NavbarComponent /> */}
    <Header></Header> 
        <Routes>
        <Route path="/" element={ < Home/> } />
        <Route path="/home" element={ < Home/> } />
        <Route path="/about" element={ < About /> } />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/services" element={< Services/>} />
        <Route path="/bookservices" element={< BookService/>} />
        <Route path="/dashboard" element={< DashboardRender/>} />
        <Route path="/blogs" element={< BlogList/>} />
        <Route path="/contact" element={< Contact/>} />
        <Route path="/employeeRegister" element={< EmployeeRegister/>} />
        <Route path="/attendance" element={< EmployeeAttendance/>} />
      </Routes> 
    
    <Footer></Footer>
 
     
    </BrowserRouter>
    </div>
  );
};

export default Routing;
