import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ButtonBase from './components/ButtonBase.jsx';
import ButtonSolid from './components/ButtonSolid.jsx';
import ButtonGhost from './components/ButtonGhost.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <div className="flex justify-center mb-4">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p className="mb-5">Base + Variant Pattern</p>
        <ButtonBase>ButtonBase</ButtonBase>
        <br />
        <ButtonSolid>ButtonSolid</ButtonSolid>
        <br />
        <ButtonGhost>ButtonGhost</ButtonGhost>
      </div>
    </div>
  );
}

export default App;
