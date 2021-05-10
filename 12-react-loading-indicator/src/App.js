import React from 'react'
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'
import { css } from '@emotion/react'
import './App.css';

const loaderCSS = css`
    margin-top: 25px;
    margin-bottom: 25px;
`

function App() {
  return (
    <div className="App">
      <br />
      <BounceLoader css={loaderCSS} size={24} color='red' loading />
      <br />
      <br />
      <BarLoader css={loaderCSS} size={48} color='orange' loading />
      <br />
      <br />
      <BeatLoader css={loaderCSS} size={72} color='maroon' loading />
    </div>
  );
}

export default App;
