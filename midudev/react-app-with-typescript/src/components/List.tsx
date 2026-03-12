// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/components/List.tsx

import { JSX } from "react";
import { SubscriberInterface } from "../types";

// . ?
interface PropsInterface {
  // . ?
  // children: JSX.Element;
  // children: JSX.Element[];
  // children: string;
  // children: React.ReactNode;
  // children: (name: string) => React.ReactNode;
  subscribers: Array<SubscriberInterface>;
}

// . ?
// Const function no permite tener hijos en el HTML de App.tsx
// Solo permite <List subscribers={subscribers}/>
const List = ({ subscribers }: PropsInterface) => {
  // . ?
  const renderList = (): JSX.Element[] => {
    return subscribers.map((subscriber) => {
      return (
        <li key={subscriber.nick}>
          <img src={subscriber.avatar} alt={subscriber.nick} />
          <h4>
            {subscriber.nick} (<small>{subscriber.subscriptionMonths}</small>)
          </h4>
          <p>{subscriber.description?.substring(0, 100)}</p>
          {/* . ? */}
          {/* 'subscriber.description' is possibly 'undefined'. */}
          {/* <p>{subscriber.description.substring(0, 100)}</p> */}
          {/* . ? */}
          {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
          {/* {subscriber.abc} */}
        </li>
      );
    });
  };

  // return (
  //   <ul>
  //     {subscribers.map((subscriber) => {
  //       return (
  //         <li key={subscriber.nick}>
  //           <img src={subscriber.avatar} alt={subscriber.nick} />
  //           <h4>
  //             {subscriber.nick} (<small>{subscriber.subscriptionMonths}</small>)
  //           </h4>
  //           <p>{subscriber.description?.substring(0, 100)}</p>
  //           {/* . ? */}
  //           {/* 'subscriber.description' is possibly 'undefined'. */}
  //           {/* <p>{subscriber.description.substring(0, 100)}</p> */}
  //           {/* . ? */}
  //           {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
  //           {/* {subscriber.abc} */}
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );

  return <ul>{renderList()}</ul>;
};

export default List;

// . ?
// export default function List({ subscribers }: PropsInterface) {
//   return (
//     <ul>
//       {subscribers.map((subscriber) => {
//         return (
//           <li key={subscriber.nick}>
//             <img src={subscriber.avatar} alt={subscriber.nick} />
//             <h4>
//               {subscriber.nick} (<small>{subscriber.subscriptionMonths}</small>)
//             </h4>
//             <p>{subscriber.description?.substring(0, 100)}</p>
//             {/* . ? */}
//             {/* 'subscriber.description' is possibly 'undefined'. */}
//             {/* <p>{subscriber.description.substring(0, 100)}</p> */}
//             {/* . ? */}
//             {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
//             {/* {subscriber.abc} */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// . ?
// React.FunctionComponent<PropsInterface> permite tener hijos en el HTML de App.tsx
// Permite <List subscribers={subscribers}/>
// Y permite <List subscribers={subscribers}> ...children... <List/>
// const List: React.FunctionComponent<PropsInterface> = ({ subscribers }) => {
//   return (
//     <ul>
//       {subscribers.map((subscriber) => {
//         return (
//           <li key={subscriber.nick}>
//             <img src={subscriber.avatar} alt={subscriber.nick} />
//             <h4>
//               {subscriber.nick} (<small>{subscriber.subscriptionMonths}</small>)
//             </h4>
//             <p>{subscriber.description?.substring(0, 100)}</p>
//             {/* . ? */}
//             {/* 'subscriber.description' is possibly 'undefined'. */}
//             {/* <p>{subscriber.description.substring(0, 100)}</p> */}
//             {/* . ? */}
//             {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
//             {/* {subscriber.abc} */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// . ?
// React.FC<PropsInterface> permite tener hijos en el HTML de App.tsx
// Permite <List subscribers={subscribers}/>
// Y permite <List subscribers={subscribers}> ...children... <List/>
// const List: React.FC<PropsInterface> = ({ subscribers }) => {
//   return (
//     <ul>
//       {subscribers.map((subscriber) => {
//         return (
//           <li key={subscriber.nick}>
//             <img src={subscriber.avatar} alt={subscriber.nick} />
//             <h4>
//               {subscriber.nick} (<small>{subscriber.subscriptionMonths}</small>)
//             </h4>
//             <p>{subscriber.description?.substring(0, 100)}</p>
//             {/* . ? */}
//             {/* 'subscriber.description' is possibly 'undefined'. */}
//             {/* <p>{subscriber.description.substring(0, 100)}</p> */}
//             {/* . ? */}
//             {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
//             {/* {subscriber.abc} */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
