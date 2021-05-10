import { IconContext } from 'react-icons'
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { BiAdjust } from "react-icons/bi";

import './App.css';

function App() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
    <div className="App">
      <h1>This is Font Awesome Icon<FaReact /></h1>
      {/* <FaReact color='red' size='2rem'/> */}
      <h1>This is Material Design Icon</h1><MdAlarm />
      <BiAdjust color='green' size='2rem'/>
    </div>
    </IconContext.Provider>
  );
}

export default App;
