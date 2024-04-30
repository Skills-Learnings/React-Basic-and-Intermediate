# Advanced Components

## Topics covered in this section of course
1. Advanced components
   - React Dev Tools
   - Conditional Rendering
   - Rendering Lists
   - Fragments
   - Spread Props
   - Render Raw HTML

2. Basic Hooks
   - Hook Rules
   - useRef Hook
   - Refs in class components
   - useMemo Hook
   - useCallback Hook
   - Custom Hooks

## Learnings

### 1.1 React Dev Tools

To be added

### 1.2 Conditional Rendering
Conditional rendering in React involves dynamically rendering different components or content based on certain conditions or states in your application. It allows us to control what is displayed to the user based on various factors such as user input, data fetching results, or application state. Here's how we can implement conditional rendering in React:

1. **Using if Statements:**

   - We can use regular JavaScript `if` statements or ternary operators (`condition ? true : false`) directly within your JSX to conditionally render components or content.
	```jsx
	function ConditionalRenderingExample({ isLoggedIn }) {
		if (isLoggedIn) {
			return <p>Welcome, User!</p>;
		} else {
			return <p>Please log in to continue.</p>;
		}
	}
	```

2. **Using Logical && Operator:**
	- We can use the logical AND (`&&`) operator to conditionally render content based on a truthy value.
		```jsx
		function ConditionalRenderingExample({ isLoggedIn }) {
			return (
				<div>
					{isLoggedIn && <p>Welcome, User!</p>}
					{!isLoggedIn && <p>Please log in to continue.</p>}
				</div>
			);
		
		}
		```
3. **Using Conditional (ternary) Operator:**
	- We can use the conditional (ternary) operator to conditionally render different components or content based on a condition.
		```jsx
		function ConditionalRenderingExample({ isLoggedIn }) {
			return (
				<div>
					{isLoggedIn ? (
						<p>Welcome, User!</p>
					) : (
						<p>Please log in to continue.</p>
					)}
				</div>
			);
		}
		```
By leveraging conditional rendering techniques in React, we can create dynamic and interactive user interfaces that adapt to different states and conditions in your application. This flexibility allows us to provide a better user experience and handle various scenarios gracefully.

### 1.3 Rendering Lists
Rendering lists in React involves dynamically rendering a collection of items from an array or an iterable data source. Lists are a common UI pattern in web applications, and React provides several ways to efficiently render lists of data. Here's how wc can render lists in React:
1. **Using Array.map() Method:**
	- We can use the `map()` method of JavaScript arrays to iterate over each item in the array and generate a corresponding JSX element for each item.
		```jsx
		function ListRenderingExample({ users }) {
		  return (
		    <ul>
		      {users.map(user => (
		        <li key={user.id}>
		          <span>{user.name}</span>
		          <span>{user.email}</span>
		        </li>
		      ))}
		    </ul>
		  );
		}
		```
	- Ensure that each rendered element within the `map()` function has a unique `key` prop. This helps React identify which items have changed, added, or removed efficiently.
2. **Using External Components:**
	-   We can encapsulate the rendering logic for each list item into a separate component and use it inside the `map()` function.
		```jsx
		function ListItem({ user }) {
		  return (
		    <li>
		      <span>{user.name}</span>
		      <span>{user.email}</span>
		    </li>
		  );
		}

		function ListRenderingExample({ users }) {
		  return (
		    <ul>
		      {users.map(user => (
		        <ListItem key={user.id} user={user} />
		      ))}
		    </ul>
		  );
		}
		```
By using these techniques, we can efficiently render lists of data in React components. Whether working with simple arrays or complex data structures, React provides flexible and powerful tools for rendering lists and handling dynamic content in your applications.
### 1.4 Fragments
In React, Fragments provide a way to group multiple elements together without adding an additional DOM element. They allows us to return multiple elements from a component's render method without needing to wrap them in a single parent element. Fragments are especially useful when we need to render a list of elements or when we want to avoid unnecessary div wrappers in your component tree. Here's an explanation of how fragments work in React:
1. **Using Fragments:**
    -   We can use the `React.Fragment` component or the shorthand syntax `<>...</>` to create fragments in React.
		```jsx
		import React from 'react';    
		function MyComponent() {
		  return (
		    <React.Fragment>
		      <h1>Hello</h1>
		      <p>React Fragments</p>
			</React.Fragment>
		  )
		}
		```
		```jsx
		function MyComponent() {
		  return (
		    <>
		      <h1>Hello</h1>
		      <p>React Fragments</p>
		    </>
		  );
		}
		```
2. **Benefits of Fragments:**
    -   **Avoiding Extra DOM Elements:** Fragments allow you to group elements together without adding an extra div or wrapper element to the DOM. This can help keep your DOM structure cleaner and more semantic.
    -   **Better Performance:** Using fragments can result in better performance because it reduces the number of unnecessary DOM nodes and improves rendering performance.
    -   **Reduced CSS Complexity:** Fragments can help simplify your CSS selectors by avoiding additional wrapper elements, especially in cases where CSS styles are scoped based on parent elements.
3. **Key Attribute in Fragments:**
    -   When using fragments in a list or iteration, you may need to assign a unique `key` attribute to each fragment to help React identify each fragment efficiently.
```jsx
import React from 'react'   
function MyComponent({ items }) {
  return (
    <>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <span>{item.name}</span>
          <span>{item.description}</span>
        </React.Fragment>
      ))}
    </>
  );
}
   ```
Using fragments in React allows us to create cleaner, more concise components by grouping elements together without introducing additional DOM elements. They provide a simple and effective way to structure your component tree while improving performance and maintainability.
### 1.5 Spread Props
In React, the spread operator (`...`) can be used to pass props dynamically to child components. It's a convenient and flexible way to spread the properties of an object into individual props when rendering a component. This technique is often referred to as "spread props" or "prop spreading." Here's how it works:
1. **Using Spread Props:**
	-  We can use the spread operator (`...`) to pass all the key-value pairs of an object as individual props to a child component.
		```jsx
		import React from 'react';
		import ChildComponent from './ChildComponent';

		function ParentComponent() {
		  const props = {
		    name: 'John',
		    age: 30,
		    gender: 'male'
		  };

		  return (
		    <div>
		      <ChildComponent {...props} />
		    </div>
		  );
		}

		export default ParentComponent;
		```
		```jsx
		function ChildComponent ({name, age, gender}) {
			return (
				<>
					<p>Name: {name}</p>
					<p>Age: {age}</p>
					<p>Gender: {gender}</p>
				</>
			);
		}

		export default ChildComponent;
		```
2. **Benefits of Spread Props:**
    -   **Flexibility:** Spread props allow you to pass props dynamically without hardcoding them in the parent component. This makes your code more flexible and reusable.
    -   **Simpler Syntax:** It provides a concise and readable syntax for passing multiple props to child components.
    -   **Avoiding Repetition:** You can avoid repetition by passing a single object containing all the props instead of passing each prop individually.

Overall, spread props are a powerful feature in React that allow you to pass props dynamically and efficiently between components. They help improve code readability, maintainability, and flexibility, making them a valuable tool in React component development.
### 1.6 Render Raw HTML
In React, rendering raw HTML can be achieved using the dangerouslySetInnerHTML attribute. This attribute allows you to inject HTML directly into the DOM, but it comes with potential security risks if not used carefully. Here's how you can render raw HTML in React:
1.  **Using dangerouslySetInnerHTML:**
    -   The dangerouslySetInnerHTML attribute accepts an object with a __html key containing the raw HTML string to be rendered.
		```jsx
		import React from 'react';

		function RawHTMLComponent() {
		  const htmlString = '<div><h1>Hello, World!</h1><p>This is raw HTML.</p></div>';

		  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
		}

		export default RawHTMLComponent;
		```
2.  **Cautions and Security Considerations:**
    -   Be cautious when using dangerouslySetInnerHTML, as it allows injecting arbitrary HTML into your React components.
    -   Make sure the HTML content is safe and does not contain any user-generated or untrusted content to prevent XSS (Cross-Site Scripting) attacks.
    -   Always sanitize and validate any user-generated HTML content before rendering it using dangerouslySetInnerHTML.
3.  **Avoiding dangerouslySetInnerHTML:**
    -   Whenever possible, prefer using React's standard JSX syntax to render content.
    -   Rendering raw HTML may make your site vulnerable to XSS attacks so use it only when necessary

By using dangerouslySetInnerHTML, you can render raw HTML content in React components when necessary, but remember to handle it with care and consider the potential security implications. Whenever possible, prefer safer alternatives or ensure that the HTML content is properly sanitized to mitigate security risks.
### 2.1 Hook Rules
In React, hooks come with a set of rules and guidelines to ensure they are used correctly and effectively. These rules help maintain consistency, prevent bugs, and optimize performance in React applications. Here are the key rules to follow when using hooks in React:
1.  **Only Call Hooks at the Top Level:**    
    -   Hooks should only be called at the top level of React functional components or custom hooks.
    -   Don't call hooks inside loops, conditions, or nested functions.
    -   Ensure that hooks are always called in the same order on every render.
2.  **Use Hooks Only in Functional Components:**
    -   Hooks should only be called from within React function components or custom hooks.
    -   Don't call hooks from regular JavaScript functions, class components, or event handlers.
    -   Ensure that hooks are used within the context of a React component to access the component's lifecycle and state.

By following these rules, you can ensure that hooks are used correctly and effectively in your React components. Adhering to these guidelines helps improve code quality, maintainability, and performance in React applications, while also reducing the risk of bugs and inconsistencies.
### 2.2 useRef Hook
The `useRef` hook in React provides a way to create mutable references to elements or values that persist across renders. It allows you to access and manipulate the DOM directly within functional components, as well as store mutable values without causing re-renders. Here's a breakdown of how the `useRef` hook works and common use cases:
1. **Creating a Ref:**
	-   We can create a ref by calling the `useRef` hook and passing an initial value as an optional argument.
		```jsx
		import React, { useRef } from 'react';

		function MyComponent() {
		  const inputRef = useRef(null);

		  // `inputRef` now holds a reference to the input element
		  return <input ref={inputRef} />;
		}
		```
2. **Accessing the Ref(DOM Elements):**
	- Refs created with `useRef` can be assigned to DOM elements using the `ref` attribute. This allows us to access and manipulate DOM elements directly within functional components.  
	- We can access the current value of the ref using the `.current` property.
		```jsx
		function MyComponent() {
		  const inputRef = useRef(null);

		  function focusInput() {
		    inputRef.current.focus(); // Focuses the input element
		  }

		  return (
		    <div>
		      <input ref={inputRef} />
		      <button onClick={focusInput}>Focus Input</button>
		    </div>
		  );
		}
		```
3. **Storing Mutable Values:**
	-   We can also use `useRef` to store mutable values that persist across renders without causing re-renders.
		```jsx
		function MyComponent() {
		  const renderCount = useRef(0);

		  renderCount.current++; // Increment the render count

		  return <div>Render count: {renderCount.current}</div>;
		}
		```
4.  **Imperative DOM Manipulation:**  
    -   `useRef` enables imperative DOM manipulation, which can be useful for scenarios such as focusing elements, measuring dimensions, or interacting with third-party libraries that require direct access to DOM elements.
5.  **Preserving Values Between Renders:**
    -   Refs created with `useRef` persist across renders and maintain their current value. This makes them suitable for storing values that need to be preserved between renders without causing re-renders.

Overall, the `useRef` hook provides a powerful mechanism for working with mutable values and interacting with the DOM directly within functional components in React. Whether you need to access DOM elements, store mutable values, or perform imperative DOM manipulation, `useRef` offers a flexible and efficient solution.

### 2.3 Refs in class components
To be added
### 2.4 useMemo Hook
The `useMemo` hook in React is used to memoize the result of expensive computations so that they are only re-executed when their dependencies change. This helps improve performance by avoiding unnecessary re-computations, especially in situations where expensive calculations are involved. Here's an overview of how the `useMemo` hook works and common use cases:
1.  **Syntax:**
    -   The `useMemo` hook accepts a function as its first argument, which represents the expensive computation that needs to be memoized.
    -   It also accepts an array of dependencies as its second argument. The memoized value will only be recalculated when one of these dependencies changes.
		```jsx
		import React, { useMemo } from 'react';
		function MyComponent({ a, b }) {
		  const result = useMemo(() => {
		    // Expensive computation based on 'a' and 'b'
		    return a + b;
		  }, [a, b]); // Dependency array
		  return <div>Result: {result}</div>;
		} 
		```    
2.  **Memoizing Expensive Computations:**
    -   We can use `useMemo` to memoize the result of expensive computations, such as complex mathematical calculations, data transformations, or filtering operations.
    -   The memoized value will be computed once and cached, and subsequent renders will reuse the cached value as long as the dependencies remain the same.
    -    This helps avoid unnecessary re-computations and improves the performance of your React components, especially in scenarios where expensive calculations are involved.
3.  **Caveats:**
    -   Use `useMemo` judiciously and only for computations that are truly expensive or have a noticeable impact on performance.
    -   Avoid overusing `useMemo`, as it can lead to unnecessary complexity and potentially obscure code.

Overall, the `useMemo` hook is a powerful tool for optimizing performance in React applications by memoizing expensive computations and avoiding unnecessary re-calculations. It helps strike a balance between performance and simplicity, allowing you to create efficient and responsive user interfaces.
### 2.5 useCallback Hook
The `useCallback` hook in React is used to memoize callback functions so that they are only recreated when their dependencies change. This helps improve performance by avoiding unnecessary re-creation of callback functions. Here's an overview of how the `useCallback` hook works and common use cases:
1.  **Syntax:**
    -   The `useCallback` hook accepts a callback function as its first argument and an array of dependencies as its second argument.
    -   It returns a memoized version of the callback function.
		```jsx
		import React, { useCallback } from 'react';
		function MyComponent({ onClick }) {
			const [name, setName] =  useState("")
			const  printName  =  useCallback(() => {
				console.log(`Name: ${name}`)
			}, [name])
			useEffect(() => {
				console.log("In Effect")
				printName()
			}, [printName])
			return (
				<>
					<label>
						Name:
						<input  value={name} onChange={(e) =>  setName(e.target.value)} />
					</label>
				</>
			)}
		}
		```
2.  **Memoizing Callback Functions:**
    -  We can use `useCallback` to memoize callback functions, such as event handlers or functions passed as props to child components.
	-  The memoized callback function will be created once and cached, and subsequent renders will reuse the cached function as long as the dependencies remain the same.
3.  **Optimizing Performance:**    
    -   `useCallback` helps optimize performance by memoizing callback functions and avoiding unnecessary re-creations.
    -   It is especially useful in scenarios where callback functions are used as dependencies in other hooks, such as `useEffect` or `useMemo`, to prevent unnecessary re-execution of effects or re-computations of memoized values.

Overall, the `useCallback` hook is a valuable tool for optimizing performance in React applications by memoizing callback functions and preventing unnecessary re-renders of components. It helps improve the efficiency of your application, especially in scenarios where callback functions are frequently passed as props or used as event handlers.
### 2.6 Custom Hooks
Writing custom hooks in React allows us to encapsulate reusable logic into functions that can be easily shared across components. Custom hooks enable you to extract and manage complex stateful or side-effectful logic in a composable and reusable way. Here's a step-by-step guide on how to write custom hooks in React:
1. **Naming Convention:**
   - Custom hooks should always start with the word "use" to follow the naming convention of React hooks.
   - This naming convention helps distinguish custom hooks from regular functions and indicates that they are intended to be used as hooks.
2. **Identify Reusable Logic:**
   - Identify the logic that you want to encapsulate into a custom hook.
   - This could include state management, side effects (such as data fetching), event listeners, or any other reusable functionality.
3. **Create a Custom Hook Function:**
   - Write a function that encapsulates the reusable logic.
   - The function can accept arguments as needed and return any values or stateful objects required by the consuming components.
4. **Use React Hooks Inside the Custom Hook:**
   - Inside the custom hook function, you can use existing React hooks such as `useState`, `useEffect`, `useRef`, `useContext`, or other custom hooks.
5. **Return Values or Stateful Objects:**
   - Ensure that the custom hook returns the necessary values or stateful objects that the consuming components need to interact with.
6. **Example of Writing a Custom Hook:**
   - Here's an example of a custom hook called `useLocalStorage` that manages state in local storage:
   ```jsx
   import { useState, useEffect } from 'react';

   function useLocalStorage(key, initialValue) {
     const [value, setValue] = useState(() => {
       const storedValue = localStorage.getItem(key);
       return storedValue !== null ? JSON.parse(storedValue) : initialValue;
     });

     useEffect(() => {
       localStorage.setItem(key, JSON.stringify(value));
     }, [key, value]);

     return [value, setValue];
   }
   ```

7. **Using the Custom Hook in Components:**
   - Once the custom hook is defined, you can use it in any functional component just like any other React hook.
   - Import the custom hook function and call it within the functional component.
   ```jsx
   import React from 'react';
   import useLocalStorage from './useLocalStorage';

   function MyComponent() {
     const [name, setName] = useLocalStorage('name', '');

     return (
       <input
         type="text"
         value={name}
         onChange={e => setName(e.target.value)}
       />
     );
   }
   ```

8. **Sharing Custom Hooks:**
   - Custom hooks can be shared across multiple components and even across different projects by packaging them into reusable modules.

By following these steps, we can create custom hooks in React to encapsulate reusable logic and enhance the reusability, modularity, and maintainability of your React components. Custom hooks enable you to abstract away complex logic and create more expressive and composable components.
