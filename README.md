# Hello, TypeScript!
  
![Static Badge](https://img.shields.io/badge/typescript-5+-1C2024?style=for-the-badge&logo=typescript&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/javascript-ES6+-1C2024?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/node.js-20+-1C2024?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/HTML-HTML5+-1C2024?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/css-css3+-1C2024?style=for-the-badge&logo=css&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/bash-5.2.37+-1C2024?style=for-the-badge&logo=gnubash&logoColor=white&labelColor=101010)

This repository is my personal learning space for exploring TypeScript from scratch. It is a collection of practice scripts and examples from intensive courses, and it also represents a structured journey through the language’s most important features.  

Each exercise highlights a specific concept, from the basics of type annotations to advanced techniques like generics and type inference, building confidence step by step. Alongside small programming challenges, you will find experiments with API integration, Node.js, and Express, demonstrating how TypeScript applies in real-world scenarios.  

Ultimately, this repository is both a sandbox for experimentation and a growing reference guide that documents my transition from JavaScript into TypeScript with clarity and discipline.

![header_hello_typescript](https://github.com/user-attachments/assets/6e718616-add5-4b03-98bd-89c2b9aef36f)

## What's TypeScript

> [TypeScript](https://www.typescriptlang.org/) is an open-source programming language developed and maintained by Microsoft. It builds on JavaScript by adding optional static typing, interfaces, and advanced tooling that help developers catch errors early and write more maintainable code. 

> TypeScript compiles down to plain JavaScript, meaning it can run anywhere JavaScript runs, while providing a richer developer experience with features like type inference, autocompletion, and strong IDE support. It has become a popular choice for building scalable web applications and large codebases where clarity and reliability are essential.

## TypeScript code example 

```typescript
// Define interface for a message
interface Message {
  id: number
  text: string
  author: string
  timestamp: Date
}

// Define type for a logger function
type Logger = (msg: Message) => void

// Implement typed logger function
const showMessage: Logger = (msg) => {
  console.log(`[${msg.timestamp.toISOString()}] ${msg.author}: ${msg.text}`)
}

// Create a strongly typed message object
const greeting: Message = {
  id: 1,
  text: "Hello, TypeScript!",
  author: "Jesús",
  timestamp: new Date()
}

// Call typed function with typed object
showMessage(greeting)
```

> `@Jesús hello-typescript/greeting.ts git(main)`
>
> `[2026-03-11T14:47:00.123Z] Jesús: Hello, TypeScript! 0.19 ms`

## TypeScript Technical Vocabulary

- **Type Annotations** – explicitly specify the type of a variable or parameter.  
- **Type Inference** – the compiler’s ability to automatically deduce types.  
- **Interfaces** – contracts that define the shape of objects and classes.  
- **Type Aliases** – custom names for complex or repetitive types.  
- **Union Types** – combine multiple possible types for a single variable.  
- **Intersection Types** – merge several types into one.  
- **Literal Types** – specific values used as types (e.g., `"success" | "error"`).  
- **Tuples** – arrays with a fixed length and defined types at each position.  
- **Enums** – collections of named constant values.  
- **Generics** – parameterized types that enable flexible and reusable code.  
- **Optional Properties** – properties that may or may not exist in an object.  
- **Readonly Properties** – properties that cannot be modified after initialization.  
- **Type Narrowing** – refining types at runtime through conditional checks.  
- **Type Assertions** – force the compiler to treat a value as a specific type.  
- **Modules & Imports** – organize code into files and dependencies.  
- **Decorators** – experimental annotations for classes and methods.  
- **Ambient Declarations (.d.ts)** – files that describe types of external libraries.  
- **Strict Mode** – a set of rules that enforce stronger safety and consistency in code.

## Repository Content

### → [`midudev/`](./midudev/)

**Core TypeScript Fundamentals:** introductory examples covering editor errors, typed functions, type inference, object and array typing, tuples, type aliases, optional and readonly properties, template literal types, union and intersection types, and type narrowing/assertion techniques.

**API Integration and Advanced Typing:** practical examples using `fetch` with top-level `await`, error handling in API calls, explicit parameter typing, and strong typing of external responses with generated types from tools like quicktype.io.

**Interfaces and Data Structures:** examples focused on defining and extending interfaces, implementing object methods, working with specialized and mixed shopping carts, applying union types, and building structured operations such as add, remove, and clear with different interface syntaxes and merging.

> [MiduDev](https://github.com/midudev) is a Spanish software engineer, educator, and content creator who shares practical programming knowledge with a global developer community. He is well known for his live coding sessions, tutorials, and intensive courses that focus on modern web technologies such as JavaScript, TypeScript, React, and Node.js. Through his work, MiduDev has built a reputation for making complex concepts approachable, fostering open-source collaboration, and inspiring developers to grow their skills with hands-on examples and clear explanations.
  
### → [`playground/`](./playground/)

The Playground section is a dedicated space for **experimentation**, **exploration**, and **discovery** within TypeScript. Each script captures patterns, curiosities, and language behaviors that emerge as I study, while also reflecting questions and insights gained from learning with others. By transforming these ideas into practical examples, I extend both my knowledge and my skills, creating a growing catalog of scenarios that demonstrate how TypeScript works in real contexts. This approach ensures that every exercise contributes to a deeper understanding of the language and strengthens my ability to apply it with clarity and precision.

## Repository Goals

The primary goal of this repository is to strengthen my foundation in TypeScript by practicing syntax, typing rules, and core concepts through structured examples, challenges, and course exercises. Each script highlights a specific feature of the language, making the learning process incremental and reproducible.  

This repository is a bridge for transitioning from JavaScript into TypeScript. By consolidating knowledge in typing, interfaces, and modular design, I am preparing for deeper work with Node.js, React, React Native, and Expo. This progression ensures that I can apply TypeScript effectively in both backend and frontend environments.  

> The long-term vision is to use this repository as a stepping stone toward building cross‑platform applications for **iOS**, **Android**, and the **Web**.

## License

This repository is licensed under the terms of the [Apache License 2.0](LICENSE). The license grants permission to use, modify, and distribute the code with proper attribution, while ensuring that improvements and extensions remain open and accessible to the community.

> Made with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
