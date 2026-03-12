// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/components/List.tsx

// 1. Import JSX type and SubscriberInterface definition
import { JSX } from "react";
import { SubscriberInterface } from "../types";

// 2. Define props interface for List component
interface PropsInterface {
  // 3. Examples of alternative children prop definitions
  // children: JSX.Element;
  // children: JSX.Element[];
  // children: string;
  // children: React.ReactNode;
  // children: (name: string) => React.ReactNode;
  subscribers: Array<SubscriberInterface>;
}

// 4. Const function version does not allow children in App.tsx, only <List subscribers={subscribers}/>
const List = ({ subscribers }: PropsInterface) => {
  // 5. Helper function to render subscribers list as JSX elements
  const renderList = (): JSX.Element[] => {
    return subscribers.map((subscriber) => {
      return (
        <li key={subscriber.nick}>
          <img src={subscriber.avatar} alt={subscriber.nick} />
          <h4>
            {subscriber.nick} (<small>{subscriber.subscriptionMonths}</small>)
          </h4>
          <p>{subscriber.description?.substring(0, 100)}</p>
          {/* 6. 'subscriber.description' may be undefined, use optional chaining */}
          {/* 'subscriber.description' is possibly 'undefined'. */}
          {/* <p>{subscriber.description.substring(0, 100)}</p> */}
          {/* 7. Error: property 'abc' does not exist on SubscriberInterface */}
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

// 8. Alternative implementation using function declaration
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
//             {/* 9. 'subscriber.description' may be undefined, use optional chaining */}
//             {/* 'subscriber.description' is possibly 'undefined'. */}
//             {/* <p>{subscriber.description.substring(0, 100)}</p> */}
//             {/* 10. Error: property 'abc' does not exist on SubscriberInterface */}
//             {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
//             {/* {subscriber.abc} */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// 11. React.FunctionComponent<PropsInterface> allows children in App.tsx
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
//             {/* 12. 'subscriber.description' may be undefined, use optional chaining */}
//             {/* 'subscriber.description' is possibly 'undefined'. */}
//             {/* <p>{subscriber.description.substring(0, 100)}</p> */}
//             {/* 13. Error: property 'abc' does not exist on SubscriberInterface */}
//             {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
//             {/* {subscriber.abc} */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// 14. React.FC<PropsInterface> shorthand also allows children in App.tsx
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
//             {/* 15. 'subscriber.description' may be undefined, use optional chaining */}
//             {/* 'subscriber.description' is possibly 'undefined'. */}
//             {/* <p>{subscriber.description.substring(0, 100)}</p> */}
//             {/* 16. Error: property 'abc' does not exist on SubscriberInterface */}
//             {/* Error: Property 'abc' does not exist on type '{ nick: string; subscriptionMonths: number; avatar: string; description?: string | undefined; }'. */}
//             {/* {subscriber.abc} */}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
