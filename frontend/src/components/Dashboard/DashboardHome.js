import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsPlusCircle,
  bsArrowBarRight,
} from "react-icons/bs";
import './DashboardRender.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Home() {
  const handleAddService = () => {
    console.log("Service page called");
  };
const navigate = useNavigate();
  const handleCardClick = () => {
   navigate('/employeeRegister'); // Navigate to the desired route
  };

  const handleCardAttendance=() =>
  {
    navigate('/attendance');
  }

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>ADMIN DASHBOARD</h3>
      </div>

      <div  className="main-cards">
        <div className="card1">
          <div className="card-inner">
            <h3>SERVICE</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>

          <h1>08</h1>
        </div>

        <div onClick={handleCardClick} className="card1">
          <div className="card-inner">
            <h3>EMPLOYEE REGISTRATION</h3>
            <BsPlusCircle className="card_icon" />
          </div>
          <h1>12</h1>
        </div>


        <div onClick={handleCardAttendance} className="card1">
          <div className="card-inner">
            <h3>ATTENDANCE</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h3>Present: 05</h3>
        </div>

        <div  className="card1">
          <div className="card-inner">
            <h3>CUSTOMER COUNT</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
        
          <div className="card1">
            <div className="card-inner">
              <h4>ADD/REMOVE SERVICE</h4>
              <bsArrowBarRight className="card_icon" />
            </div>
            <h1>42</h1>
          </div>
        </div>
      
    </main>
  );
}

export default Home;
