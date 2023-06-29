import React from 'react';

const EmployeeContext = React.createContext({
  employees: [],
  addEmployee: () => {},
});

export default EmployeeContext;