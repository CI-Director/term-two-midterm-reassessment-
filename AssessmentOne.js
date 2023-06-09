/* ## Term two, Midterm assessment

### Express

1. What is Express and what is it used for?
    - Express is a web application framework for Node.js. It is used to build web applications and APIs, and provides a range of features such as routing, middleware, and templating engines.
2. How do you install Express in a Node.js project?
    - You can install Express using the npm package manager with the command `npm install express`.
3. What is routing in Express?
    - Routing refers to the process of defining endpoints (URIs) for a web application and specifying how requests to those endpoints should be handled. In Express, you can define routes using HTTP methods such as GET, POST, PUT, and DELETE.

### Model

1. What is a model in the context of a MERN stack application?
    - A model is a representation of data in a MERN stack application. It defines the structure of the data and how it is stored in a database.
2. What is Mongoose and why is it used with MongoDB?
    - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a simple, elegant API for interacting with MongoDB and makes it easier to define models, schema, and relationships between data.
3. How do you define a model in Mongoose?
    - You can define a model in Mongoose by creating a new schema object and passing it to the `mongoose.model()` method. For example:
    */
   
    const mongoose = require('mongoose');
    
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String
    });
    
    const User = mongoose.model('User', userSchema);
    
   
    
/*
### Controller

1. What is a controller in the context of a MERN stack application?
    - A controller is a JavaScript function that handles incoming requests and generates responses in a MERN stack application. It interacts with the model to retrieve or modify data and sends the data to the view to be rendered.
2. What is the role of a controller in the Model-View-Controller (MVC) architecture?
    - In the MVC architecture, the controller is responsible for handling user input and updating the model and view accordingly. It acts as an intermediary between the two and ensures that the model and view remain separate and independent.
3. How do you define a controller in a MERN stack application?
    - You can define a controller by creating a new JavaScript file and exporting a module that contains one or more functions to handle specific requests. For example:
    
   */

    const User = require('../models/user');
    
    exports.getUser = async (req, res) => {
      const userId = req.params.id;
    
      try {
        const user = await User.findById(userId);
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };
    
   
    
/*
### Routes

1. What are routes in the context of a MERN stack application?
    - Routes are the endpoints (URIs) that a web application exposes to clients to interact with the server-side of the application. They define how incoming requests should be handled and what responses should be sent back to the client.
2. How do you define a route in Express?
    - You can define a route in Express using the `app` object and the HTTP method you want to handle. For example:
    */
   
    app.get('/users', (req, res) => {
      res.send('List of users');
    });
    
   
    
// 3. What is middleware in the context of Express routes?
//     - Middleware refers to functions that are executed between the server receiving a request and sending a response. They can be used to perform tasks such as parsing request bodies, authentication, and logging. Middleware can be applied to specific routes or globally to all routes in an Express application.

// ### MongoDB

// 1. What is MongoDB and how is it different from traditional SQL databases?
//     - MongoDB is a NoSQL database that stores data in collections rather than tables. It uses a document-oriented data model that allows for more flexible and scalable data storage than traditional SQL databases.
// 2. How do you connect to a MongoDB database in a MERN stack application?
//     - You can connect to a MongoDB database using the `mongoose.connect()` method and passing in the database URI. For example:
    
   
    const mongoose = require('mongoose');
    
    mongoose.connect('mongodb://localhost/myDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));
    
   
    
// 3. What is a document in MongoDB?
//     - In MongoDB, a document is the basic unit of data storage. It is the equivalent of a row in a traditional SQL table and is represented as a JSON-like object. A document can contain nested structures and arrays, and can have different fields for each document in a collection.

// ### Mongoose

// 1. What is Mongoose and why is it used with MongoDB?
//     - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a simple, elegant API for interacting with MongoDB and makes it easier to define models, schema, and relationships between data.
// 2. How do you define a model in Mongoose?
//     - You can define a model in Mongoose by creating a new schema object and passing it to the `mongoose.model()` method. For example:
    
   
    const mongoose = require('mongoose');
    
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String
    });
    
    const User = mongoose.model('User', userSchema);
    
   
    
// 3. What is a schema in Mongoose?
//     - A schema is a definition of the structure of a MongoDB collection. It defines the fields and data types for documents in the collection, as well as any validations, defaults, and other options for the fields. A schema is used to create a model, which is the JavaScript representation of the collection.

// ### React

// 1. What is React and what is it used for?
//     - React is a JavaScript library for building user interfaces. It is used to create reusable UI components that can be combined to build complex web applications.
// 2. What is JSX and how does React use it?
//     - JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript components. React uses JSX to define the structure and appearance of a component, which is then rendered to the DOM.
// 3. How do you create a new React component?
//     - You can create a new React component by defining a JavaScript function or class that returns JSX. For example:
    
   
    import React from 'react';
    
    function MyComponent(props) {
      return (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      );
    }
    
    export default MyComponent;
    
   
    

// ### Hooks

// 1. What are React Hooks, and why were they introduced?
//     - React Hooks are functions that allow you to use state and other React features in functional components. They were introduced to simplify state management and reduce the need for class components in React.
// 2. What is the useState Hook, and how is it used?
//     - The useState Hook is a function that allows you to add state to a functional component. It takes an initial value as a parameter and returns an array with two elements: the current state and a function to update the state. For example:
    
   
    import React, { useState } from 'react';
    
    function MyComponent() {
      const [count, setCount] = useState(0);
    
      const handleClick = () => {
        setCount(count + 1);
      };
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={handleClick}>Click me</button>
        </div>
      );
    }
    
    export default MyComponent;
    
   
    
// 3. What is the useEffect Hook and how is it used?
//     - The useEffect Hook is a function that allows you to add side effects to a functional component. It takes a function as a parameter that will be executed after every render of the component. You can use it to update state, fetch data, or interact with the DOM. For example:
    
   
    import React, { useState, useEffect } from 'react';
    
    function MyComponent() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    
      const handleClick = () => {
        setCount(count + 1);
      };
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={handleClick}>Click me</button>
        </div>
      );
    }
    
    export default MyComponent;
    
   
    

// ### Components

// 1. What is a component in React?
//     - A component in React is a reusable piece of UI that can be composed with other components to build complex web applications. Components can be either functional or class-based and have their own state, props, and lifecycle methods.
// 2. What is the difference between a functional component and a class component in React?
//     - A functional component is a JavaScript function that returns JSX, whereas a class component is a JavaScript class that extends the `React.Component` class and has a `render()` method that returns JSX. Functional components are more straightforward and lightweight, while class components can have more advanced features, such as state and lifecycle methods.
// 3. How do you pass data between components in React?
//     - You can pass data between components in React using props. Props are passed from a parent component to a child component as attributes and can be accessed in the child component using the `props` object. For example:
    
   
    import React from 'react';
    
    function ParentComponent() {
      const name = 'John';
    
      return (
        <ChildComponent name={name} />
      );
    }
    
    function ChildComponent(props) {
      return (
        <p>Hello, {props.name}!</p>
      );
    }
    
    export default ParentComponent;
    
   
    

// ### React Router

// 1. What is React Router, and what is it used for?
//     - React Router is a library for handling client-side routing in React applications. It allows you to define routes and their corresponding components and navigate between different application pages without refreshing the entire page.
// 2. How do you define a route in React Router?
//     - You can define a route in React Router using the `Route` component and specifying the path and component props. For example:
    
   
    import React from 'react';
    import { Route } from 'react-router-dom';
    
    function App() {
      return (
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
      );
    }
    
    export default App;
    
   
    
// 3. How do you use URL parameters in React Router?
//     - You can use URL parameters in React Router by defining a route with a path that includes a parameter placeholder. The parameter value can then be accessed in the component using the `match.params` object. For example:
    
   
    import React from 'react';
    import { Route } from 'react-router-dom';
    
    function App() {
      return (
        <div>
          <Route path="/users/:id" component={UserPage} />
        </div>
      );
    }
    
    function UserPage(props) {
      const userId = props.match.params.id;
      return (
        <p>User ID: {userId}</p>
      );
    }
    
    export default App;
    
   
    

// ### Fullstack

// 1. What is a fullstack developer?
//     - A fullstack developer is a developer who is proficient in both frontend and backend development. They are able to develop and maintain a complete web application from the user interface to the server-side logic and database.
// 2. What are some common technologies used in fullstack development?
//     - Some common technologies used in fullstack development include HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and SQL databases.
// 3. What are some challenges of fullstack development?
//     - Some challenges of fullstack development include the need to stay up-to-date with a wide range of technologies, the complexity of designing and implementing a scalable architecture, and the need to balance frontend and backend development tasks.

// ### Fetch

// 1. What is the Fetch API, and what is it used for?
//     - The Fetch API is a web API for fetching resources (such as JSON data, images, and other files) from a web server. It provides a modern alternative to the older XMLHttpRequest (XHR) API and supports promises, and async/await syntax.
// 2. How do you use the Fetch API to fetch data from a web server?
//     - You can use the Fetch API by calling the `fetch()` function and passing in the URL of the resource you want to fetch. The `fetch()` function returns a promise that resolves with a `Response` object, which can be used to extract the data from the response. For example:
    
   
    fetch('<https://api.example.com/data>')
      .then(response => response.json())
      .then(data => console.log(data));
    
   
    
// 3. What are some advantages of using the Fetch API over the XMLHttpRequest (XHR) API?
//     - Some advantages of using the Fetch API over the XHR API include a simpler and more modern syntax, better support for promises and async/await, and more control over request and response headers. Additionally, the Fetch API is implemented using the same underlying networking stack as the browser, which can lead to better performance and security.

// ### Axios

// 1. What is Axios, and what is it used for?
//     - Axios is a JavaScript library for making HTTP requests from a web application. It provides a simple and intuitive API for sending GET, POST, PUT, and DELETE requests, handling response data, and handling errors.
// 2. How do you install Axios in a web application?
//     - You can install Axios using the npm package manager with the command `npm install axios`.
// 3. How do you use Axios to send a GET request to a web server?
//     - You can use Axios to send a GET request by calling the `axios.get()` method and passing
