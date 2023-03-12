// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={decrease}>-</button>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //0 = initial state or count
  // setCount hocche 2nd element/last element of the useState fn jeta count varaible take increase korbe by 1
  // the last element or 2nd element inside the usestate fn updates the 1st element

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
