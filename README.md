
# Basic Components

## Topics covered in this section of course
1. Components
2. JSX Basics
3. Creating components
4. Props
5. Declarative vs. Imperative Programming
6. Importing Non-JS files

## Learnings

### 1. Components
Components are the building blocks of user interfaces in React.
They encapsulate reusable pieces of UI, allowing for the creation of complex UIs from simple, self-contained parts.
- Composition:
  - Components can be composed together to build larger UIs.
  - They can receive data from parent components via props and communicate with other components through events and callbacks.2
- Hierarchy:
  - Follow a tree-like structure, where parent components contain child components, and those child components can contain more child components.
  - Enables a modular and reusable approach to building user interfaces.
- Key Concepts:
  - Components can be reused, helping to maintain consistency and reduce duplication of code.
  - They promote a modular and maintainable approach to UI development.
  -  React components are essential for building both simple UI elements and complex applications.
- Summary:
  - Components are fundamental to React development, providing a way to create reusable, modular, and maintainable user interfaces.
  - Understanding and mastering components is crucial for effective React development, whether building simple UI elements or complex applications.

### 2. JSX Basics
JSX, or JavaScript XML, is an extension of JavaScript syntax that allows you to write HTML-like code within JavaScript. JSX makes it easier to write and manage UI components in React by combining the power of JavaScript and HTML-like syntax into a single language.

 1.  **What is JSX:**
	 - JSX allows you to write HTML-like syntax directly in JavaScript code.
	 - It resembles XML/HTML syntax but is processed as regular JavaScript.
	 - JSX elements are transformed into JavaScript function calls by a transpiler like Babel before being rendered in the browser.
2. **Why use JSX in React:**
	- JSX provides a more readable and concise syntax for defining UI components compared to traditional JavaScript syntax or string concatenation.
	- It allows developers to write UI code in a familiar HTML-like syntax, making it easier to understand and maintain.
	- JSX enables the use of JavaScript expressions within HTML-like markup, allowing for dynamic and expressive UIs.
3. **Differences between JSX and HTML:**
	- **Attribute names**: In JSX, attribute names are written in camelCase (e.g., `className` instead of `class`).
	- **Class vs. className**: To apply CSS classes, use `className` instead of `class`.
	- **Inline styles**: Inline styles are specified using JavaScript objects in JSX (e.g., `style={{ color: 'red' }}`).
	- **Self-closing tags**: JSX allows self-closing tags for elements without children (e.g., `<img src="..." />`).
	- **Expressions**: JavaScript expressions can be embedded within curly braces in JSX (e.g., `{variable}` or `{ 2 + 2 }`).
	- **Comments**: JSX supports JavaScript-style comments (e.g., `{/* comment */}`).
### 3. Creating components
Creating components in React is fundamental to building user interfaces. Components are reusable, self-contained blocks of UI that encapsulate functionality and can be composed together to create complex applications. Here's a basic overview of creating components in React:
1.  **Functional Components:**
    -   Functional components are defined as JavaScript functions.
    -   They return JSX (JavaScript XML) to describe the UI.
    -   Functional components are typically used for simpler UI elements that don't require state or lifecycle methods.
    - Example of a functional component:
		```
		import React from 'react';
		    function Welcome() {
			    return <h1>Hello, React!</h1>;
		    }
		export default Welcome;
		```
2.  **Class Components:**
    -   Class components are defined as ES6 classes that extend `React.Component`.
    -   They have their own internal state and can implement lifecycle methods.
    -   Class components are used for more complex UI elements that require state management or lifecycle methods.
    - Example of a class component:
		```
		import React, { Component } from 'react';
		class Welcome extends Component {
		  render() {
		    return <h1>Hello, React!</h1>;
		  }
		}
		export default Welcome;
		```
3.  **Usage:**
    -   Components can be imported and used in other components or in the main application file.
    -   They can be composed together to build larger UIs.
    - Example of using a component:
	```
	import React from 'react';
	import Welcome from './Welcome'; // Assuming Welcome component is defined in Welcome.js
	function App() {
	  return (
	    <div>
	      <Welcome />
	    </div>
	  );
	}
	export default App;` 
	```
4.  **Exporting:**
    -   Components are typically exported using `export default` to make them available for use in other files.
5.  **File Naming Convention:**
    -   It's a common convention in React to use PascalCase for naming components and to name the file after the component (e.g., `Welcome.js` for the `Welcome` component).
### 4. Props
Props (short for properties) are a fundamental concept in React for passing data from parent components to child components. They allow you to customize and configure child components by passing data and functions as arguments. Props are immutable, meaning they cannot be changed by the child component.
Overview of props in React:
1.  **Passing Props:**
    -   Props are passed from parent components to child components as attributes in JSX.
    -   Parent components specify props when rendering child components, allowing them to pass data and functions.
    - Example of passing props:
		```
		// ParentComponent.js
		import React from 'react';
		import ChildComponent from './ChildComponent';

		function ParentComponent() {
		  return <ChildComponent name="John" age={30} />;
		}

		export default ParentComponent;` 
		```
3.  **Accessing Props:**
    -   Child components access props passed to them as properties of the `props` object.
    -   Props can be accessed inside functional components using the `props` parameter or via `this.props` inside class components.
    - Example of accessing props:
		```
		// ChildComponent.js
		import React from 'react';

		function ChildComponent(props) {
		  return (
		    <div>
		      <p>Name: {props.name}</p>
		      <p>Age: {props.age}</p>
		    </div>
		  );
		}

		export default ChildComponent;
		``` 
5.  **Destructuring Props:**
    -   You can destructure props directly in the function parameters of functional components to simplify access to individual props.
    - Example of destructuring props:
		```// ChildComponent.js
		import React from 'react';

		function ChildComponent({ name, age }) {
		  return (
		    <div>
		      <p>Name: {name}</p>
		      <p>Age: {age}</p>
		    </div>
		  );
		}

		export default ChildComponent;
		```
### 5. Declarative vs. Imperative Programming
Declarative and imperative programming are two different programming paradigms that describe approaches to solving problems and writing code. In the context of React, these paradigms refer to different ways of defining and manipulating UI components.
1.  **Declarative Programming:**
    
    -   **Definition:** Declarative programming focuses on describing what should be done rather than how it should be done. It emphasizes expressing the desired outcome without specifying the exact steps to achieve it.
    -   **Benefits:** Declarative programming promotes code that is easier to understand, maintain, and reason about. It abstracts away implementation details and encourages a higher level of abstraction, leading to more concise and readable code.
2.  **Imperative Programming:**
    
    -   **Definition:** Imperative programming focuses on specifying the exact steps and procedures required to achieve a desired outcome. It involves writing code that explicitly details how each task should be performed, often involving low-level operations and control flow statements.
    -   **Drawbacks:** Imperative programming can lead to code that is more complex, error-prone, and difficult to maintain. It requires developers to manage low-level details and handle corner cases explicitly, leading to code that is harder to understand and debug.

In React, the framework itself promotes a declarative programming model, where UI components are defined as functions of their state and props. Developers specify the desired UI structure and behavior using JSX and React component APIs, and React takes care of efficiently updating the DOM to reflect those changes.

By embracing a declarative approach, React abstracts away many of the complexities of UI development, allowing developers to focus on expressing the desired outcome rather than the specific implementation details. This results in code that is more maintainable, scalable, and easier to reason about, ultimately leading to a better developer experience and higher-quality applications.
### 6. Importing Non-JS files
In React, you can import non-JavaScript files, such as images, stylesheets, JSON files, and other assets, using module bundlers like webpack or Parcel. These bundlers enable you to import these files directly into your JavaScript code and handle them as modules. Here's how you can import different types of non-JavaScript files in React:

1.  **Importing Images:**
    -   We can import image files like PNG, JPG, GIF, or SVG directly into your React components.
    -   The imported image can then be used as the `src` attribute of an `<img>` element or as a background image in CSS.
    - Example:
		```
	   import React from 'react';
	   import logo from './logo.png'; // Import image file
	   
	   function Logo() {
	     return <img src={logo} alt="Logo" />;
	   }
	   
	   export default Logo;
		```    
2.  **Importing Stylesheets:**
    -   We can import CSS or SCSS files into your React components to style them.
    -   The imported styles will be applied to the corresponding component.
    - Example:
	    ```
	    import './styles.css'; // Import CSS file
	    import './styles.scss'; // Import SCSS file
	    ```
3.  **Importing JSON Data:**
    -   We can import JSON files containing data into your React components.
    -   The imported JSON data can be used as regular JavaScript objects.
    Example:
	    ```
	    import data from './data.json'; // Import JSON file
	    console.log(data); // Use imported JSON data
	    ```
4.  **Importing Other Files:**
    -   We can import other types of files, such as text files or font files, into your React components.
    - Example:
	    ```
	    import textFile from './textfile.txt'; // Import text file
	    import fontFile from './font.ttf'; // Import font file
	    ```
