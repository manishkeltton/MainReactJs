import React from 'react'
import './App.css';
import { Bar, Line } from 'react-chartjs-2'
import LineChart from './components/LineChart';

function App() {
  return (
    <div className="App">
      {/* <Line data={data} /> */}
      <div className='chart'>
        {/* <LineChart /> */}
        <Bar />
       </div>
    </div>
  );
}

export default App;
