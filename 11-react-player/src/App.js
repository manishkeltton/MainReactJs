import React from 'react'
import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactPlayer 
          width='480px' 
          height='240px' 
          controls url='https://www.youtube.com/watch?v=CWfCp96-yck&list=RDCWfCp96-yck&start_radio=1'
          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
/>
    </div>
  );
}

export default App;
