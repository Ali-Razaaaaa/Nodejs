import { useEffect, useState } from 'react';
import Addstudent from './frontend/Addstudent';
import Allstudent from './frontend/Allstudent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Addstudent/>
      </div>
      <div>
        <Allstudent/>
      </div>
    </div>
  );
}

export default App;