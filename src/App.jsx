import React from 'react';
import DropTable from './Components/DropTable';
import {dropdownData,tableData} from "./Data.js"
const App = () => {

  return (
    <div>
      <h1 style={{color:"red"}}>Select a country</h1>
      <DropTable type="dropdown" data={dropdownData} />
      <h2>Table</h2>
      <DropTable type="table" data={tableData} />
    </div>
  );
};

export default App;