import React, { useState } from 'react';
import "./Attendance.css"
const AttendanceSheet = () => {

  const initialEmployees = [
    { id: 1, name: 'Employee 1', attendance: [] },
    { id: 2, name: 'Employee 2', attendance: [] },
    { id: 3, name: 'Employee 3', attendance: [] },
    { id: 4, name: 'Employee 4', attendance: [] },
    { id: 5, name: 'Employee 5', attendance: [] },
  ];

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
      .map((Employee) => `${Employee.name},${Employee.attendance}`)
      .join('\n');

    // Create a data URL for downloading the printable data
    const dataUri = `data:text/csv;charset=utf-8,${encodeURIComponent(printableText)}`;
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = `${selectedDate}_attendance.csv`;
    link.click();
  };

  
  const printableData = filteredEmployees.map((Employee) => ({
    name: Employee.name,
    attendance: Employee.attendance.includes(selectedDate) ? 'Present' : 'Absent',
  }));

const generateAttendanceData = () => {
    const formattedData = printableData.map((student) => (
      `${student.name}: ${student.attendance}`
    )).join('\n');
    return (
        <table className="attd-table">
          <thead>
            <tr>
            <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {printableData.map((Employee, index) => (
              <tr key={index}>
                  <td>{Employee.id}</td>
                <td>{Employee.name}</td>
                <td>{Employee.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
  };

  const [formattedAttendance, setFormattedAttendance] = useState('');

  const handleGenerateButtonClick = () => {
    const attendanceData = generateAttendanceData();
    setFormattedAttendance(attendanceData);
  };
  
  return (
      <div>
    <div>
      <h1>Attendance Sheet</h1>
      <div>
        <label htmlFor="datePicker">Select Date:</label>
        <input className="dateinput"
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
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
          {filteredEmployees.map((Employee) => (
            <tr key={Employee.id}>
                <td>{Employee.id}</td>
              <td>{Employee.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={Employee.present}
                  onChange={() => toggleAttendance(Employee.id)}
                />
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

export default AttendanceSheet;
