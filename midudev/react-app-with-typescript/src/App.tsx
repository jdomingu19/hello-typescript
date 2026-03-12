// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/App.tsx

// . ?
import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { SubscriberInterface } from "./types";

// . ?
// Es aconsejable separar el estado del componente
// Es aconsejable dejar los types del estado del componente en el mismo archivo
interface AppState {
  subscribers: Array<SubscriberInterface>;
  newSubscribersNumber: number;
}

// . ?

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

  // . ? (un estado inicial)
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

  // . ?
  // Error: ?
  // subscribers.toLowerCase()

  // . ?
  // const [subscribers, setSubscribers] = useState<Array<SubscriberInterface>>(
  //   [],
  // );

  // . ?
  // const [subscribers, setSubscribers] = useState<SubscriberInterface[]>([]);

  // . ?
  const [subscribers, setSubscribers] = useState<AppState["subscribers"]>([]);

  // . ?
  const [newSubscribersNumber, setNewSubscribersNumber] =
    useState<AppState["newSubscribersNumber"]>(0);

  // . ?
  const divRef = useRef<HTMLDivElement>(null);

  // . ?
  useEffect(() => {
    fetch("http://localhost:3001/subs") // MiduDev's Twitch Subscribers API
      .then((res) => res.json())
      .then((subscribers) => {
        console.log(subscribers);
        setSubscribers(subscribers);
      });
  }, []);

  // . ?
  const handleNewSubscriber = (newSubscriber: SubscriberInterface): void => {
    setSubscribers((subscribers) => [...subscribers, newSubscriber]);
    setNewSubscribersNumber((subscribersNumber) => subscribersNumber + 1);
  };

  // . ?
  return (
    <div className="App" ref={divRef}>
      <h1>MiduDev's Twitch Subscribers</h1>
      <List subscribers={subscribers} />
      New Subscribers : {newSubscribersNumber}
      <Form onNewSubscriber={handleNewSubscriber} />
      {/* . ? */}
      {/* <Form onNewSubscriber={setSubscribers} /> */}
    </div>
  );
}

// . ?
export default App;
