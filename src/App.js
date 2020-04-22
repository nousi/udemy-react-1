import React from 'react';

// class App extends Conponent {
//   return (
//     <div>
//       <h1 className="foo">ここがタイトル</h1>
//       <input type="text" onClick={() => {console.log("OK  ")}} />
//     </div>
//   );
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}
export default App;
