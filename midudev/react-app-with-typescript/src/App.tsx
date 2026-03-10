// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/App.tsx

// . ?
import { useState } from "react";
import "./App.css";

// . ?
function App() {
  // . ?
  // Use angle brackets <Type> or  <Type | Type | ...>
  // const [number, setNumber] = useState<number | string>(5);

  // . ?
  // const changerNumber = () => {
  //   // . ?
  //   // Error: Argument of type 'boolean' is not assignable to parameter of type 'SetStateAction<string | number>'.
  //   // setNumber(true);
  //   setNumber("2");
  // };

  // . ?
  const [subscribers, setSubscribers] = useState([
    {
      nick: "john",
      subscriptionMonths: 3,
      avatar: "https://i.pravatar.cc/150?u=john",
    },
  ]);

  // . ?
  return <div className="App"></div>;
}

// . ?
export default App;
