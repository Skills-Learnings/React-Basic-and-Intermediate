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
	```
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
		```
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
		```
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
		```
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
		```
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
```
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
```
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
```
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
To be added
### 1.6 Render Raw HTML
To be added
### 2.1 Hook Rules
To be added
### 2.2 useRef Hook
To be added
### 2.3 Refs in class components
To be added
### 2.4 useMemo Hook
To be added
### 2.5 useCallback Hook
To be added
### 2.6 Custom Hooks
