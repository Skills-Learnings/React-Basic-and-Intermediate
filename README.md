
# Stateful Components

## Topics covered in this section of course
0. What are React Hooks and States in React
1. Basic Stateful Components
    - useState Hook
    - State in class components
    - Input event listeners
2.  Component Lifecycle
    - Virtual DOM
    - Component Lifecycle
    - useEffect Hook
    - Class component lifecycle methods
    - Strict mode
    - Fetching data from api

## Learnings
### What are React Hooks and States in react
1. **React Hooks**
	- React hooks are functions that enable functional components to use state, lifecycle methods, and other React features without needing to convert them to class components.
	- They allow you to add stateful logic and side effects to functional components, making them more powerful and flexible. 
	- Hooks were introduced in React 16.8 as a way to simplify state management and encourage the use of functional components.
2.  **States in React:**
    -   In React, state represents the data that a component manages and can change over time.
    -   States are used to store information that affects the rendering of a component, such as user input, fetched data, or UI state.
    -   Changes to state trigger re-rendering of the component, updating the UI to reflect the new state.
### 1.1 UseState Hook
The `useState` hook is a built-in hook in React that allows functional components to manage state. It enables us to add stateful logic to functional components without needing to convert them to class components. Here's how we can use the `useState` hook and work with the current value in `setState`:
1. **Importing the useState Hook:**
	-   First, we need to import the `useState` hook from the `react` package.
	`import React, { useState } from 'react';`
2. **Using the useState Hook:**
	-   Call the `useState` hook inside your functional component to declare a state variable. It takes the initial state value as an argument and returns an array containing the current state value and a updated function to update that value.
		```
		function  Counter() { 
			const [count, setCount] = useState(0); 
			// 'count' is the current state value, initialized to 0  
			// 'setCount' is the function to update the 'count' state 
		}
		```
3. **Updating State with setState:**
	-   When updating state with `useState`, we can use the updater function returned by the hook to work with the current value of state.
	-   The updater function can accept the current state value or a function that returns the new state value.
		```
		// Updating state with a new value
		setCount(newValue);
		// Updating state based on the current value
		setCount(prevCount => prevCount + 1);
		```
	- When updating state based on the current value, it's recommended to use the functional form of `setState` to ensure that you're working with the most up-to-date value of state, especially when the new state value depends on the current state.
4. **Complete Example:**
	```
	import React, { useState } from 'react';

	function Counter() {
	  const [count, setCount] = useState(0);

	  const increment = () => {
	    setCount(prevCount => prevCount + 1); // Update count based on current value
	  };

	  const decrement = () => {
	    setCount(prevCount => prevCount - 1); // Update count based on current value
	  };

	  return (
	    <div>
	      <p>Count: {count}</p>
	      <button onClick={increment}>Increment</button>
	      <button onClick={decrement}>Decrement</button>
	    </div>
	  );
	}

	export default Counter;
	```
	In this example, the `Counter` component uses the `useState` hook to manage the `count` state. The `increment` and `decrement` functions use the functional form of `setCount` to update the `count` state based on its current value. This ensures that the state updates correctly, even in cases of concurrent updates or stale state values.
### 1.2 State in Class Components
In React class components, states are managed using the `setState` method provided by the base `Component` class. Here's how you can implement states in a class component:

1.  **Defining Initial State:**
    -   Initialize the component's state in the constructor method by assigning an object to `this.state`.
	    ```
	    import React, { Component } from 'react';
	    
	    class Counter extends Component {
	      constructor(props) {
	        super(props);
	        this.state = {
	          count: 0
	        };
	      }
	    }
	    ```
2.  **Accessing State:**
    -   Access the state values using `this.state.<stateName>`.
	    ```
	    render() {
	      return <p>Count: {this.state.count}</p>;
	    } 
	    ```
3.  **Updating State:**
    -   Update the state using the `setState` method provided by the base `Component` class.
    -   Pass an object to `setState` containing the updated state values, or pass a function that returns the updated state based on the current state.
		```
	    increment = () => {
	      this.setState({ count: this.state.count + 1 });
	    };
	    
	    decrement = () => {
	      this.setState({ count: this.state.count - 1 });
	    };
	    ```     
4.  **Complete Example:**
    -   Here's a complete example of a counter component implemented using a class component:
		```
	    import React, { Component } from 'react';
	    class Counter extends Component {
	      constructor(props) {
	        super(props);
	        this.state = {
	          count: 0
	        };
	      }
	      increment = () => {
	        this.setState(prevState => ({
	          count: prevState.count + 1
	        }));
	      };
	      decrement = () => {
	        this.setState(prevState => ({
	          count: prevState.count - 1
	        }));
	      };
	      render() {
	        return (
	          <div>
	            <p>Count: {this.state.count}</p>
	            <button onClick={this.increment}>Increment</button>
	            <button onClick={this.decrement}>Decrement</button>
	          </div>
	        );
	      }
	    }
	    export default Counter;
	    ```
		   In this example, the `Counter` component is implemented as a class component. It manages the `count` state using the `setState` method and provides methods (`increment` and `decrement`) to update the state based on user interaction. This pattern allows you to implement stateful logic and manage dynamic data within class components in React.
### 1.3 Input event listeners
In React, input event listeners are used to handle user interactions with input elements, such as text fields, checkboxes, radio buttons, etc. These event listeners allow you to capture user input and respond to it dynamically within your React components. Here's how we can implement input event listener in React:
1.  **onChange Event Listener:**
    -   The `onChange` event listener is commonly used with input elements to capture changes in their values.
    -   It fires whenever the value of the input element changes, such as when the user types into a text field or selects an option from a dropdown.
    -   You can access the new value of the input element from the event object passed to the event handler.
		   ```
	    import React, { useState } from 'react';
	    function InputExample() {
	      const [inputValue, setInputValue] = useState('')
	      const handleChange = (event) => {
	        setInputValue(event.target.value)
	      };
	      return (
	        <div>
	          <input
	            type="text"
	            value={inputValue}
	            onChange={(event) => setInputValue(event.target.value)}
	          />
	          <p>Value: {inputValue}</p>
	        </div>
	      );
	    }
	    export default InputExample
	    ```
	   - Input event listeners in React allow you to create interactive and dynamic user interfaces by responding to user input and triggering appropriate actions within your components. They are essential for building forms, handling user interactions, and creating engaging web applications.
### 2.1 Virtual Dom
In React, the Virtual DOM (Document Object Model) is a lightweight, in-memory representation of the actual DOM. It's a key concept that underlies React's performance and efficiency in rendering UI components. Here's an explanation of what the Virtual DOM is and how it works in React:
1.  **What is the Virtual DOM:**
    -   The Virtual DOM is a JavaScript representation of the actual DOM, which is a hierarchical tree structure representing the structure of a web page.
    -   Unlike the real DOM, which is rendered and manipulated by the browser, the Virtual DOM is managed entirely by React.
    -   Each node in the Virtual DOM corresponds to a UI element in the React component tree.
    -   The Virtual DOM is lightweight and exists entirely in memory, allowing React to perform fast and efficient updates.
2.  **How the Virtual DOM Works:**
    -   When we render a React component, React constructs a Virtual DOM representation of the component tree.
    -   React compares the previous Virtual DOM with the new Virtual DOM generated after a state or prop change.
    -   React then calculates the difference between the two Virtual DOM trees, known as the "diffing" process.
    -   Based on the differences, React generates a minimal set of DOM operations needed to update the actual DOM to match the new Virtual DOM.
    -   React applies these DOM updates efficiently, minimizing the number of DOM manipulations required and optimizing performance.
3.  **Benefits of the Virtual DOM:**
    -   **Performance Optimization:** By performing updates on the Virtual DOM instead of the actual DOM, React can minimize expensive DOM operations, leading to faster rendering and improved performance.
    -   **Efficient Updates:** React's diffing algorithm allows it to identify and apply only the necessary changes to the DOM, reducing unnecessary re-renders and optimizing resource utilization.
    -   **Cross-Platform Compatibility:** The Virtual DOM abstraction allows React to work consistently across different browsers and environments, abstracting away browser-specific implementation details.
    -   **Developer Experience:** The Virtual DOM simplifies the development process by providing a clean, declarative API for building UI components and managing state, reducing the complexity of manual DOM manipulation.
 
Overall, the Virtual DOM is a core feature of React that enables efficient, performant, and scalable UI development. By abstracting away the complexities of the actual DOM and providing a streamlined approach to UI rendering, React empowers developers to build interactive and responsive web applications with ease.
### 2.2 Component Lifecycle
In React, the component lifecycle refers to the series of phases or events that occur during the lifetime of a component, from its creation to its destruction. These lifecycle methods allow you to hook into specific points in a component's lifecycle and perform actions such as initialization, state updates, and cleanup. Understanding the component lifecycle is crucial for building robust and efficient React applications. Here's an overview of the component lifecycle in React:
1. **Mounting Phase:** During the mounting phase, a component is created and inserted into the DOM.
2. **Updating or Re-render Phase:** During the updating phase, a component is re-rendered due to changes in its props or state.
3. **Unmounting Phase:** During the updating phase, a component is re-rendered due to changes in its props or state.
### 2.3 useEffect Hook
The `useEffect` hook in React allows functional components to perform side effects, such as data fetching, subscriptions, or DOM manipulation, in a declarative and consistent way. Here's an explanation of how to use the `useEffect` hook and how to work with its return function:
1. **Importing the useEffect Hook:**
	- First, import the `useEffect` hook from the `react` package.
	`import React, { useState, useEffect } from 'react';`
2. **Using the useEffect Hook:**
-   Call the `useEffect` hook inside your functional component to perform side effects.
-   Pass a function as the first argument to `useEffect` to define the side effect.
-   The function will be executed after every render by default, including the initial render and subsequent re-renders.
	```
	function SideEffectExample() {
	  useEffect(() => {
	    // Side effect code here
	    console.log('Component mounted or updated');
	  });
	}
	```
3. **Dependency Array:**
	-   You can specify a dependency array as the second argument to `useEffect` to control when the effect is executed.
	-   The effect will only re-run if one of the dependencies has changed between renders.
	-   Omitting the dependency array causes the effect to run after every render.
	```
	function DependencyArrayExample({ value }) {
	  useEffect(() => {
	    // Side effect code here
	    console.log('Value changed:', value);
	  }, [value]); // Watch for changes in 'value'
	}
	```
4. **Cleanup with return function:**
	-   You can optionally return a cleanup function from the `useEffect` hook to perform cleanup tasks, such as unsubscribing from subscriptions or clearing timers.
	-   The cleanup function is executed before the side effect function is re-executed or when the component is unmounted.
	-   To return a cleanup function, simply return a function from the effect function.
	```
	function CleanupExample() {
	  useEffect(() => {
	    // Side effect code here
	    console.log('Component mounted');

	    // Cleanup function
	    return () => {
	      console.log('Component unmounted');
	    };
	  }, []); // Empty dependency array to run effect only on mount
	}
	```
In summary, the `useEffect` hook in React enables functional components to perform side effects in a declarative manner. It offers a flexible way to manage side effects and cleanup tasks, enhancing the capabilities of functional components. By understanding how to use `useEffect` and its return function, you can effectively handle side effects and manage component behavior in React applications.
### 2.4 Strict Mode
In React, Strict Mode is a tool that enables a set of strict development mode checks for your application. When you enable Strict Mode, React performs additional runtime checks and warnings that help you identify potential issues and problems in your code. It's primarily used during development to catch common mistakes and problematic patterns early, before they cause runtime errors or unexpected behavior in production. Here's an explanation of what Strict Mode does and how to use it:
1. **Benefits of Strict Mode:**
	-  **Identifying Unsafe Lifecycles:** Strict Mode helps identify unsafe lifecycle methods and usage patterns in class components. It warns about deprecated lifecycle methods and suggests alternatives.
    -   **Detecting Legacy Context API Usage:** Strict Mode warns about legacy context API usage, which is being phased out in favor of the new Context API introduced in React 16.3.
    -   **Preventing Deprecated Features:** Strict Mode warns about deprecated features and upcoming changes in React, helping you migrate to newer APIs and patterns.
2. **What Strict Mode Doesn't Do:**
    -   Strict Mode is a development mode tool and does not affect the behavior of your application in production.
    -   It's not a security feature and does not perform any runtime enforcement or validation of your code.
    -   Strict Mode checks and warnings are only performed during development and are not included in the production build of your application.

By using Strict Mode in your React application, you can benefit from additional runtime checks and warnings that help you write cleaner, safer, and more maintainable code. It's a valuable tool for improving the quality of your React applications and ensuring they adhere to best practices and recommended patterns.
### 2.5 Fetching data from API
Fetching data from an API in React using the simple `fetch` method involves making an HTTP request to the API endpoint, receiving the response, and processing the data. Here's how you can fetch data from an API in React using the `fetch` method:
1.  **Making the API Request:**
    -   Use the `fetch` function to make an HTTP request to the API endpoint.
    -   Pass the URL of the API endpoint as the first argument to `fetch`.
    -   Handle the promise returned by `fetch` using `.then()` to process the response.
    ```
    import React, { useState, useEffect } from 'react';
    function FetchData() {
      const [data, setData] = useState(null);
      useEffect(() => {
        fetch('https://api.example.com/data')
          .then(response => response.json())
          .then(data => {
            setData(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
      return (
        <div>
          {data ? (
            <ul>
              {data.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }
    export default FetchData;
    ``` 
    
2.  **Handling the Response:**
    -   In the `.then()` method, call `.json()` on the response object to parse the JSON data.
    -   Use another `.then()` method to access the parsed JSON data.
    -   Update the component state with the fetched data using `setData()`.
3.  **Error Handling:**
    -   Use `.catch()` to handle errors that may occur during the API request.
    -   Log or handle the error appropriately, such as displaying an error message to the user.
4.  **Rendering the Data:**
    -   Conditionally render the fetched data in the component's JSX.
    -   Use state to hold the fetched data and update the component when the data is available.
5.  **Dependencies and useEffect:**
    -   Use the `useEffect` hook to fetch data when the component mounts.
    -   Pass an empty dependency array (`[]`) as the second argument to `useEffect` to ensure the effect runs only once when the component mounts.

By following these steps, you can fetch data from an API in a React component using the simple `fetch` method. This approach is suitable for basic data fetching scenarios and allows you to quickly integrate external data into your React application. However, for more advanced use cases or when working with complex data, you may consider using additional libraries like Axios or React Query for data fetching and management.
	
