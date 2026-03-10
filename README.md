# Hello, TypeScript!
  
![Static Badge](https://img.shields.io/badge/typescript-5+-1C2024?style=for-the-badge&logo=typescript&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/javascript-ES6+-1C2024?style=for-the-badge&logo=javascript&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/node.js-20+-1C2024?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/HTML-HTML5+-1C2024?style=for-the-badge&logo=html5&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/css-css3+-1C2024?style=for-the-badge&logo=css&logoColor=white&labelColor=101010)
![Static Badge](https://img.shields.io/badge/bash-5.2.37+-1C2024?style=for-the-badge&logo=gnubash&logoColor=white&labelColor=101010)

This repository is my personal learning space for exploring TypeScript from scratch. It is designed not only as a collection of practice scripts and examples from intensive courses, but also as a structured journey through the language’s most important features. 

Each exercise reflects a specific concept, from the basics of type annotations to advanced techniques like generics and type inference, allowing me to build confidence step by step. Alongside small programming challenges, you’ll also find experiments with API integration, Node.js, and Express, which demonstrate how TypeScript can be applied in real-world scenarios.

Ultimately, this repository serves as both a sandbox for experimentation and a growing reference guide that documents my transition from JavaScript into TypeScript with clarity and discipline.

![header_hello_typescript](https://github.com/user-attachments/assets/6e718616-add5-4b03-98bd-89c2b9aef36f)

> [TypeScript](https://www.typescriptlang.org/) is an open-source programming language developed and maintained by Microsoft. It builds on JavaScript by adding optional static typing, interfaces, and advanced tooling that help developers catch errors early and write more maintainable code. 

> TypeScript compiles down to plain JavaScript, meaning it can run anywhere JavaScript runs, while providing a richer developer experience with features like type inference, autocompletion, and strong IDE support. It has become a popular choice for building scalable web applications and large codebases where clarity and reliability are essential.

```typescript
// Define typed string variable
let greeting: string = "Hello, TypeScript!";

// Typed function that log messages
function showMessage(msg: string): void {
  console.log(msg);
}

// Call typed function
showMessage(greeting);
```

> `@Jesús hello-typescript/greeting.ts git(main)`
>
> `[Run] Hello, TypeScript! 0.19 ms`

## Repository Content

#### [`midudev/`](./midudev/)

**Core TypeScript Fundamentals:** introductory examples covering editor errors, typed functions, type inference, object and array typing, tuples, type aliases, optional and readonly properties, template literal types, union and intersection types, and type narrowing/assertion techniques.

**API Integration and Advanced Typing:** practical examples using `fetch` with top-level `await`, error handling in API calls, explicit parameter typing, and strong typing of external responses with generated types from tools like quicktype.io.

**Interfaces and Data Structures:** examples focused on defining and extending interfaces, implementing object methods, working with specialized and mixed shopping carts, applying union types, and building structured operations such as add, remove, and clear with different interface syntaxes and merging.

> [MiduDev](https://github.com/midudev) is a Spanish software engineer, educator, and content creator who shares practical programming knowledge with a global developer community. He is well known for his live coding sessions, tutorials, and intensive courses that focus on modern web technologies such as JavaScript, TypeScript, React, and Node.js. Through his work, MiduDev has built a reputation for making complex concepts approachable, fostering open-source collaboration, and inspiring developers to grow their skills with hands-on examples and clear explanations.
  
#### [`playground/`](./playground/)

...

## Repository Goals

The primary goal of this repository is to strengthen my foundation in TypeScript by practicing syntax, typing rules, and core concepts through structured examples, challenges, and course exercises. Each script is designed to highlight a specific feature of the language, making the learning process incremental and reproducible.

Beyond fundamentals, this repository serves as a bridge for transitioning from JavaScript into TypeScript. By consolidating knowledge in typing, interfaces, and modular design, I am preparing for deeper work with Node.js, React, React Native, and Expo. This progression ensures that I can apply TypeScript effectively in both backend and frontend environments.

Ultimately, the long-term vision is to use this repository as a stepping stone toward building cross‑platform applications for iOS, Android, and the Web. By maintaining a disciplined workflow and consistent documentation, I aim to create a resource that not only supports my growth but also becomes a reference for others exploring TypeScript and modern web development. 

## abc

Vocabulario técnico de TypeScript

- Type Annotations – especificar el tipo de una variable o parámetro.

- Type Inference – capacidad del compilador de deducir tipos automáticamente.  
- Interfaces – contratos para definir la forma de objetos y clases.  
- Type Aliases – nombres personalizados para tipos complejos o repetitivos.  
- Union Types – combinación de múltiples tipos posibles para una variable.  
- Intersection Types – fusión de varios tipos en uno solo.  
- Literal Types – valores específicos como tipos (ej. "success" | "error").  
- Tuples – arrays con longitud fija y tipos definidos en cada posición.  
- Enums – colecciones de valores constantes con nombre.  
- Generics – tipos parametrizados que permiten reutilizar código flexible.  
- Optional Properties – propiedades que pueden o no estar presentes en un objeto.  
- Readonly Properties – propiedades que no pueden ser modificadas después de inicializadas.  
- Type Narrowing – refinamiento de tipos en tiempo de ejecución mediante condicionales.  
- Type Assertions – forzar al compilador a tratar un valor como un tipo específico.  
- Modules & Imports – organización del código en archivos y dependencias.  
- Decorators – anotaciones experimentales para clases y métodos.  
- Ambient Declarations (.d.ts) – archivos que describen tipos de librerías externas.  
- Strict Mode – conjunto de reglas que refuerzan la seguridad y consistencia del código.  


## License

This repository is licensed under the terms of the [Apache License 2.0](LICENSE)

> Made with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
