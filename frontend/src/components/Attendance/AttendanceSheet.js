import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Attendance.css"

const AttendanceSheet = () => {

  const initialEmployees = [
    // { id: 1, name: 'Employee 1', attendance: [] },
    // { id: 2, name: 'Employee 2', attendance: [] },
    // { id: 3, name: 'Employee 3', attendance: [] },
    // { id: 4, name: 'Employee 4', attendance: [] },
    // { id: 5, name: 'Employee 5', attendance: [] },
  ];
  // const Employee = () => {
  //   const [Employee, setEmployee] = useState([]);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //       fetchEmployee();
  //   }, []);

  //   const fetchEmployee = async () => {
  //       try {
  //           const response = await axios.get('https://localhost:7148/api/Employee'); // Make sure the API route is correct
  //           console.log(response.data); // Log the data to see the response
  //           setEmployee(response.data.$values); // Adjust this based on the API response structure
  //       } catch (error) {
  //           console.error('Error fetching Employees:', error);
  //       }
  //   };
  const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('https://localhost:7148/api/Attendance'); // Make sure the API route is correct
            console.log(response.data); // Log the data to see the response
            setServices(response.data.$values); // Adjust this based on the API response structure
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

  }





  const [Employees, setEmployees] = useState(initialEmployees);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  const toggleAttendance = (EmployeeId) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((Employee) =>
        Employee.id === EmployeeId
          ? {
              ...Employee,
              attendance: Employee.attendance.includes(selectedDate)
                ? Employee.attendance.filter((date) => date !== selectedDate)
                : [...Employee.attendance, selectedDate],
            }
          : Employee
      )
    );
  };
  
  const filteredEmployees = Employees.map((Employee) => ({
    ...Employee,
    present: Employee.attendance.includes(selectedDate),
  }));
  const generatePrintableAttendance = () => {
    const printableData = filteredEmployees.map((Employee) => ({
      name: Employee.name,
      attendance: Employee.attendance.includes(selectedDate) ? 'Present' : 'Absent',
     
    }));
   
    const printableText = printableData
      .map((Employee) => `${selectedDate},${Employee.name},${Employee.attendance}`)
      .join('\n');

    // Create a data URL for downloading the printable data
    const dataUri = `data:text/csv;charset=utf-8,${encodeURIComponent(printableText)}`;
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = `${selectedDate}_attendance.csv`;
    link.click();
  };

  const printableData = filteredEmployees.map((Employee) => ({
    ID: Employee.id,
    name: Employee.name,
    attendance: Employee.attendance.includes(selectedDate) ? 'Present' : 'Absent',
  }));

  



const generateAttendanceData = () => {
    return (
        <div>
            <h3>Attendance Report for {selectedDate}</h3>
        <table className="attd-table">
          <thead>
            <tr>
            <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Date</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {printableData.map((Employee, index) => (
              <tr key={index}>
                  <td>{Employee.ID}</td>
                <td>{Employee.name}</td>
                <td>{selectedDate}</td>
                <td>{Employee.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
  };

  const [formattedAttendance, setFormattedAttendance] = useState('');

  const handleGenerateButtonClick = () => {
    const attendanceData = generateAttendanceData();
    setFormattedAttendance(attendanceData);
  };

  //BOC nkhil naik
  const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('https://localhost:7148/api/Attendance'); // Make sure the API route is correct
            console.log(response.data); // Log the data to see the response
            setServices(response.data.$values); // Adjust this based on the API response structure
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };
//EOC Nikhil Naik


  return (
      <div className="divadd">
    <div>
      <h1>Attendance Sheet</h1>
      <div>
        <label htmlFor="datePicker">Select Date:</label>
        <input className="dateinput"
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}/>
      </div>
      <table className="attd-table">
        <thead>
          <tr>
              <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {services.map((Employee) => (
            <tr key={Employee.id}>
                <td>{Employee.AttendanceId}</td>
              <td>{Employee.EmpName}</td>
              <td>
                <input
                  type="checkbox"
                  checked={Employee.present}
                  onChange={() => toggleAttendance(Employee.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table><br></br>
    </div>
        
        {formattedAttendance && <pre>{formattedAttendance}</pre>}
        <button className="buttonclass" onClick={handleGenerateButtonClick}>
          Generate Attendance Record
        </button>
        <button className="buttonclass" onClick={generatePrintableAttendance}>Download Printable Attendance</button>
      </div>
  );
};
// };
export default AttendanceSheet;
