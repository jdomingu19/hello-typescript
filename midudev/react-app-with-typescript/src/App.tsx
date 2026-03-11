// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/App.tsx

// . ?
import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

// . ?
interface SubscriberInterface {
  nick: string;
  subscriptionMonths: number;
  avatar: string;
  description?: string;
}

// . ?
// Es aconsejable separar el estado del componente
interface AppState {
  subscribers: Array<SubscriberInterface>;
  newSubscribersNumber: number;
}

// . ?
const INITIAL_STATE = [
  {
    nick: "john",
    subscriptionMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=john",
    description: "John is a channel moderator",
  },
  {
    nick: "robin",
    subscriptionMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=robin",
  },
];

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
  useEffect(() => {
    setSubscribers(INITIAL_STATE);
  }, []);

  // . ?
  return (
    <div className="App">
      <h1>MiduDev's Twitch Subscribers</h1>
      <List subscribers={subscribers} />
    </div>
  );
}

// . ?
export default App;
