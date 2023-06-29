import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PaySheet() {
  const [paysheets, setPaysheets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/paysheets"); // Adjust the API endpoint accordingly
      setPaysheets(response.data);
    } catch (error) {
      console.error("Error fetching paysheets:", error);
    }
  };

  return (
    <div className="container">
      <h1>Salary Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">NIC</th>
            <th scope="col">Number of days</th>
            <th scope="col">Regular OT</th>
            <th scope="col">Special Holidays</th>
            <th scope="col">Total OT Pay</th>
            <th scope="col">Other Pay</th>
            <th scope="col">Loan</th>
            <th scope="col">Deduction</th>
            <th scope="col">Other Deduction</th>
            <th scope="col">Total Deduction</th>
            <th scope="col">Net Pay</th>
          </tr>
        </thead>
        <tbody>
          {paysheets.map((paysheet) => (
            <tr key={paysheet._id}>
              <td>{paysheet.nic}</td>
              <td>{paysheet.noOfDays}</td>
              <td>{paysheet.regularOt}</td>
              <td>{paysheet.specialHolidays}</td>
              <td>{paysheet.totalOtPay}</td>
              <td>{paysheet.otherPay}</td>
              <td>{paysheet.loan}</td>
              <td>{paysheet.deduction}</td>
              <td>{paysheet.otherDeduction}</td>
              <td>{paysheet.totalDeduction}</td>
              <td>{paysheet.netPay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
