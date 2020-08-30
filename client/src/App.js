import React from 'react';

import SetUser from './component/SetUser';
import GetUser from './component/GetUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className={'title'} style={{fontFamily: 'Amatic SC', fontWeight: 700, fontSize: 100}}>SleepyCRUD</h1>
      <SetUser />
      <GetUser />
    </div>
  );
}

export default App;
