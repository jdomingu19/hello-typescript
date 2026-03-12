// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/App.tsx

// 1. Import core React hooks and project modules
import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { SubscriberInterface } from "./types";
import { getAllSubscribers } from "./services/getAllSubscribers";

// 2. Define component state interface for subscribers and counter
// Es aconsejable separar el estado del componente
// Es aconsejable dejar los types del estado del componente en el mismo archivo
interface AppState {
  subscribers: Array<SubscriberInterface>;
  newSubscribersNumber: number;
}

// 3. Main App component entry point
function App() {
  // 4. Example of typed state with union types
  // Use angle brackets <Type> or  <Type | Type | ...>
  // const [number, setNumber] = useState<number | string>(5);

  // 5. Example function showing type error handling in state updates
  // const changerNumber = () => {
  //   // 6. Boolean assignment error in typed state
  //   // Error: Argument of type 'boolean' is not assignable to parameter of type 'SetStateAction<string | number>'.
  //   // setNumber(true);
  //   setNumber("2");
  // };

  // 7. Example of initial state with hardcoded subscribers
  // const [subscribers, setSubscribers] = useState([
  //   {
  //     nick: "john",
  //     subscriptionMonths: 3,
  //     avatar: "https://i.pravatar.cc/150?u=john",
  //     description: "John is a channel moderator",
  //   },
  //   {
  //     nick: "robin",
  //     subscriptionMonths: 7,
  //     avatar: "https://i.pravatar.cc/150?u=robin",
  //   },
  // ]);

  // 8. Invalid operation example on array state
  // subscribers.toLowerCase()

  // 9. Alternative typed state declaration using Array<SubscriberInterface>
  // const [subscribers, setSubscribers] = useState<Array<SubscriberInterface>>(
  //   [],
  // );

  // 10. Alternative typed state declaration using shorthand SubscriberInterface[]
  // const [subscribers, setSubscribers] = useState<SubscriberInterface[]>([]);

  // 11. State for tracking new subscribers count
  const [newSubscribersNumber, setNewSubscribersNumber] =
    useState<AppState["newSubscribersNumber"]>(0);

  // 12. Ref for accessing the root div element
  const divRef = useRef<HTMLDivElement>(null);

  // 13. State for managing subscribers list
  const [subscribers, setSubscribers] = useState<AppState["subscribers"]>([]);

  // 14. Fetch subscribers from API on component mount
  useEffect(() => {
    // 15. Call service to retrieve all subscribers and update state
    getAllSubscribers().then(setSubscribers);
  }, []);

  // 16. Handler to add new subscriber and increment counter
  const handleNewSubscriber = (newSubscriber: SubscriberInterface): void => {
    setSubscribers((subscribers) => [...subscribers, newSubscriber]);
    setNewSubscribersNumber((subscribersNumber) => subscribersNumber + 1);
  };

  // 17. Render application layout with subscribers list and form
  return (
    <div className="App" ref={divRef}>
      <h1>MiduDev's Twitch Subscribers</h1>
      <List subscribers={subscribers} />
      New Subscribers : {newSubscribersNumber}
      <Form onNewSubscriber={handleNewSubscriber} />
      {/* 18. Example of passing setSubscribers directly to Form */}
      {/* <Form onNewSubscriber={setSubscribers} /> */}
    </div>
  );
}

// 19. Export App component as default
export default App;
