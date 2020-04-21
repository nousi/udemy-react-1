import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="foo">ここがタイトル</h1>
      <input type="text" onClick={() => {console.log("OK  ")}} />
    </div>
  );
}

export default App;
