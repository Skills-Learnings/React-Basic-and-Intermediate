
# Advanced Stateful Components

## Topics covered in this section of course
1. useReducer Hook
2. useContext Hook
3. Context in class components
4. Local state is best
5. Never store derived state
6. Envrionment variables

## Learnings
### 1. useReducer Hook
`useReducer` is a React hook that is used as an alternative to `useState` for managing state in functional components. While `useState` is primarily used for managing individual state variables, `useReducer` is more suitable for managing complex state logic that involves multiple state transitions based on actions.

Here's an overview of how `useReducer` works and when to use it:
1.  **Syntax:**
	```jsx
	const [state, dispatch] = useReducer(reducer, initialState); 
	```
    -   `state`: The current state value, similar to the state returned by `useState`.
    -   `dispatch`: A function used to dispatch actions to update the state.
    -   `reducer`: A function that specifies how the state should be updated based on the dispatched actions.
    -   `initialState`: The initial state value, similar to the initial state passed to `useState`.
2.  **Reducer Function:**
    -   The `reducer` function takes two arguments: the current state (`state`) and an action (`action`).
    -   It returns the new state value based on the action.
    -   The reducer function should be a pure function, meaning it should not mutate the state directly but return a new state object.
3.  **Dispatching Actions:**
    -   Actions are plain JavaScript objects that describe the type of state transition to perform.
    -   When you want to update the state, you call the `dispatch` function with an action object.
    -   The action object typically contains a `type` property that indicates the type of action to perform, along with any additional data needed for the action.
4.  **Updating State:**
    -   Inside the reducer function, you switch on the action type to determine how to update the state.
    -   Based on the action type, you can perform different state transitions and return the new state accordingly.
    -   The reducer function encapsulates the state transition logic, making it easier to manage complex state behaviors.
5.  **Benefits of useReducer:**
    -   **Complex State Logic:** `useReducer` is suitable for managing complex state logic where state transitions depend on multiple factors or involve multiple state variables.
    -   **Predictable State Updates:** By centralizing state transition logic in the reducer function, `useReducer` promotes predictable state updates and helps avoid unexpected side effects.
    -   **Improved Code Organization:** Reducer functions encapsulate state management logic, improving code organization and making it easier to understand and maintain state-related code.
6.  **When to Use useReducer:**
    -   Use `useReducer` when state logic becomes too complex to manage with `useState`, such as when state updates depend on previous state or involve multiple state variables.
    -   It's particularly useful for managing state in components with complex UI interactions, form handling, or state machines.
7. **Example of useReducer hook**
	```jsx
	import React, { useReducer } from 'react';

	// Reducer function
	const reducer = (state, action) => {
	  switch (action.type) {
	    case 'INCREMENT':
	      return { count: state.count + 1 };
	    case 'DECREMENT':
	      return { count: state.count - 1 };
	    case 'RESET':
	      return { count: 0 };
	    default:
	      return state;
	  }
	};

	const Counter = () => {
	  // Initial state
	  const initialState = { count: 0 };

	  // useReducer hook
	  const [state, dispatch] = useReducer(reducer, initialState);

	  return (
	    <div>
	      <h2>Count: {state.count}</h2>
	      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
	      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
	      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
	    </div>
	  );
	};

	export default Counter;
	```
	In this example:
	-   We define a `reducer` function that takes the current state and an action as arguments and returns the new state based on the action type.
	-   The `Counter` component initializes the state using `useReducer` with the `reducer` function and an initial state object `{ count: 0 }`.
	-   We render the current count value from the state, along with buttons to dispatch different actions (`INCREMENT`, `DECREMENT`, `RESET`) to update the count.
	- When we click the buttons, they dispatch corresponding actions to the reducer, which updates the state based on the action type. The component then re-renders with the updated state, reflecting the changes in the UI. This example demonstrates how `useReducer` can be used to manage state for a simple counter application.

Overall, `useReducer` provides a powerful mechanism for managing state in React components, especially for scenarios involving complex state logic and multiple state transitions. It offers a structured approach to state management and helps keep state-related code organized and maintainable.
### 2. useContext Hook
`useContext` is a React hook that allows functional components to consume values from the React context without the need for a nested consumer component. Context provides a way to pass data through the component tree without having to pass props down manually at every level. `useContext` simplifies the process of accessing context values within functional components. Here's an overview of how `useContext` works:

1.  **Creating Context:**
    
    -   First, you define a context using the `React.createContext()` function. This creates a new context object.
    -   The context object consists of two components: `Provider` and `Consumer`, but `useContext` provides an alternative way to consume the context value without needing a `Consumer`.
2.  **Providing Context Value:**
    
    -   Wrap the part of the component tree where you want to provide the context value with a `Provider` component.
    -   The `Provider` component accepts a `value` prop, which can be any JavaScript value, such as a string, object, or function.
3.  **Consuming Context Value with useContext:**
    
    -   In functional components, you can use the `useContext` hook to access the context value provided by the nearest `Provider` in the component tree.
    -   Call `useContext` with the context object (created using `React.createContext()`) as an argument. This hook returns the current context value.
4.  **Updating Context Value:**
    -   Context values can be updated by the `Provider` component, which re-renders its consumers when the context value changes.
    -   When the context value changes, components that consume the context value using `useContext` are automatically re-rendered to reflect the updated value.
    - Here's an example to illustrate the usage of `useContext`:
		```jsx
		import React, { useContext } from 'react';

		// Create a context
		const ThemeContext = React.createContext('light');

		// A component that provides the context value
		const ThemeProvider = ({ children }) => {
		  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
		};

		// A component that consumes the context value using useContext
		const ThemeComponent = () => {
		  const theme = useContext(ThemeContext);
		  return <div>Current Theme: {theme}</div>;
		};

		// App component
		const App = () => {
		  return (
		    <ThemeProvider>
		      <ThemeComponent />
		    </ThemeProvider>
		  );
		};

		export default App;` 
		```
	In this example:
	-   We create a `ThemeContext` using `React.createContext('light')`, with a default value of `'light'`.
	-   The `ThemeProvider` component provides the context value `'dark'`.
	-   The `ThemeComponent` consumes the context value using `useContext(ThemeContext)` and renders it.
	-   Finally, we render the `ThemeComponent` wrapped inside the `ThemeProvider` in the `App` component.

This allows the `ThemeComponent` to access the current theme value provided by the nearest `ThemeProvider` without having to pass it down through props at every level of the component tree.
### 3. Context in class components
In class components, the equivalent of the `useContext` hook in functional components is the `Context.Consumer` component. The `Context.Consumer` component allows class components to subscribe to a context and access its value. Here's how you can use `Context.Consumer` in a class component:

1.  **Defining Context:** First, you need to define a context using `React.createContext()`:
	```jsx
	import React from 'react';
	const MyContext = React.createContext(defaultValue);` 
	```    
2.  **Using Context.Consumer in Class Component:** In the class component where you want to access the context value, use the `Context.Consumer` component as a child component. The `Context.Consumer` component takes a function as its child, and that function receives the current context value as its argument:
	```jsx
	import React, { Component } from 'react';
	import MyContext from './MyContext';

	class MyClassComponent extends Component {
	  render() {
	    return (
	      <MyContext.Consumer>
	        {value => (
	          <div>
	            {/* Use the context value here */}
	            <p>Context Value: {value}</p>
	          </div>
	        )}
	      </MyContext.Consumer>
	    );
	  }
	}

	export default MyClassComponent;
	``` 
3.  **Accessing Context Value:** Inside the function passed to `Context.Consumer`, you can access the current context value and use it within the component.
### 4. Local state is best  
Local state is often preferred over other types of state management for several reasons:
1.  **Simplicity:**    
    -   Local state is straightforward and easy to implement. It doesn't require additional setup or dependencies, making it suitable for managing state within individual components.
2.  **Component Encapsulation:**    
    -   Local state keeps state logic encapsulated within the component where it's needed. This promotes better component encapsulation and modularity, as each component is responsible for managing its own state.
3.  **Reduced Complexity:**    
    -   Managing state locally reduces the complexity of the overall application state management. It avoids the need for global state management solutions, such as Redux or Context API, which can introduce additional complexity and boilerplate code.
4.  **Performance:**    
    -   Local state updates typically have better performance compared to global state updates. Since local state updates are confined to the component where they occur, they don't trigger unnecessary re-renders in other parts of the application.
5.  **Predictability:**
    
    -   Local state updates are more predictable and easier to reason about. With local state, you have full control over when and how state changes occur within a specific component, leading to clearer code and fewer unexpected side effects.
6.  **Component Reusability:**    
    -   Components with local state are often more reusable since they are self-contained and don't rely on external dependencies for state management. This makes it easier to reuse components in different parts of the application without worrying about conflicting state.
7.  **Separation of Concerns:**    
    -   Local state encourages a clear separation of concerns by keeping state logic close to the UI components that use it. This separation makes it easier to understand and maintain the codebase, as each component focuses on its specific responsibilities.

While local state is often the preferred choice for managing component-specific state, it's important to consider the requirements of your application and choose the appropriate state management solution accordingly. In some cases, global state management solutions like Redux or Context API may be more suitable for managing complex application-wide state or sharing state between multiple components.
### 5. Never store derived state
Derived state refers to state values that are computed or derived from other state values. Storing derived state directly in the component's state can lead to unnecessary redundancy and potential inconsistencies, as derived state can always be computed from other state values whenever needed. Here's an explanation of why it's generally not advisable to store derived state directly:
1. **Redundancy:**    
    -   Storing derived state alongside original state values can lead to redundant data storage, increasing the memory footprint of the application unnecessarily.
2. **Complexity:**    
    -   Storing derived state can make the component's state more complex and harder to manage, especially as the number of derived state values increases.
3. **Synchronization Issues:**    
    -   Storing derived state separately from its source state can introduce synchronization issues, as updates to the source state may not propagate correctly to the derived state.
4. **Data Staleness:**
    -   Derived state stored separately from its source state may become stale or outdated if not updated consistently with the source state.
5. **Performance Impact:**
    -   Storing derived state can have performance implications, as it requires additional computation and memory overhead to maintain and update.

Instead of storing derived state directly in the component's state, it's generally recommended to compute derived state values as needed, based on the current state of the component. This approach ensures that the derived state remains consistent and up-to-date with the source state. Derived state can be computed in various ways, such as using computed properties, memoization techniques, or selector functions, depending on the specific requirements of the application.

By computing derived state dynamically when needed, you avoid redundancy, reduce complexity, and ensure consistency and accuracy in your component's state management. This approach also promotes better separation of concerns, as each state value is responsible for maintaining its own data integrity and consistency.
### 6. Envrionment Variables
Environment variables in React are variables that are used to configure and customize the behavior of your React application based on the environment it's running in. These variables can hold sensitive information or configuration settings that vary depending on the development, staging, or production environment. Environment variables are commonly used to store API keys, database URLs, feature flags, and other configuration settings.
Here's a breakdown of environment variables in React:

1.  **What are Environment Variables:**
    -   Environment variables are variables that are set outside of the application code and are accessible to the application at runtime.
    -   They are typically set at the operating system level or through configuration files specific to the environment.
2.  **Use of Environment Variables:**    
    -   Environment variables allow you to customize and configure your application behavior based on the environment it's running in.
    -   They help keep sensitive information, such as API keys and credentials, out of version control and prevent them from being exposed in the source code.
3.  **Declaring and Using Environment Variables:**
    - **In Create React App (CRA):**
	   -   Environment variables are prefixed with `REACT_APP_` and can be declared in a file named `.env` at the root of your project.
       -   To use an environment variable, you can access it in your code using `process.env.VARIABLE_NAME`.
    - **In Vite:**
       -   Environment variables are prefixed with `VITE_` and can be declared in a file named `.env` at the root of your project.
       -   To use an environment variable, you can access it in your code using `import.meta.env.VARIABLE_NAME`.
4.  **Creating Environment Files for Different Environments:**    
    - **For Create React App:**
        -   We can create separate `.env` files for different environments, such as `.env.development`, `.env.production`, etc.
        -   Each `.env` file can contain environment-specific variables that override the default `.env` file.
    -  **For Vite:**
        -   Similarly, you can create separate `.env` files for different environments, such as `.env.development`, `.env.production`, etc.
        -   Vite automatically loads the appropriate `.env` file based on the current environment.

	Here's an example of declaring and using environment variables in Create React App:
	```
	// .env.development
	REACT_APP_API_KEY=your-development-api-key` 
	```
	```
	// .env.production
	REACT_APP_API_KEY=your-production-api-key` 
	```
	```
	// Example usage in a React component
	const apiKey = process.env.REACT_APP_API_KEY;
	console.log(apiKey); // Output: your-development-api-key or your-production-api-key` 
	```	
	And here's an example for Vite:
	```
	// .env.development
	VITE_API_KEY=your-development-api-key` 
	```
	```
	// .env.production
	VITE_API_KEY=your-production-api-key` 
	```
	```
	// Example usage in a React component
	const apiKey = import.meta.env.VITE_API_KEY;
	console.log(apiKey); // Output: your-development-api-key or your-production-api-key` 
	```
	By using environment variables, we can easily manage configuration settings and sensitive information across different environments, ensuring consistency and security in your React applications.
