# ts-node folder

This folder contains TypeScript examples and exercises from the Udemy course by @Klerith (2021).  
It demonstrates how to work with Node.js, TypeScript, Webpack, and Axios to build and run projects with strong typing and modern tooling.

> All examples are designed to be clear, reproducible, and educational, showing how TypeScript can be applied in real-world scenarios.

## ⚙️ Change the Port

By default, the development server runs on port `8081`.  
If your computer is already using that port, you can change it by editing the `package.json` file under the `scripts` section.  
Locate the `start` script and update the port value:

```json
"start": "webpack serve --mode development --open --port=8081"
```

## 📦 Commands Used

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Install Axios for HTTP requests:

```bash
npm install axios
```

> Built with '\u{2665}' (♥) by Jesús Domínguez [@jdomingu19](https://github.com/jdomingu19/)
