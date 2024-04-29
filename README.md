


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
1.  **Using if Statements:**
    -   We can use regular JavaScript `if` statements or ternary operators (`condition ? true : false`) directly within your JSX to conditionally render components or content.
	    ```
	    function ConditionalRenderingExample({ isLoggedIn }) {
	      if (isLoggedIn) {
	        return <p>Welcome, User!</p>;
	      } else {
	        return <p>Please log in to continue.</p>;
	      }
	    }
	    ```
2.  **Using Logical && Operator:**
    -   We can use the logical AND (`&&`) operator to conditionally render content based on a truthy value.
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
3.  **Using Conditional (ternary) Operator:**
    -   We can use the conditional (ternary) operator to conditionally render different components or content based on a condition.
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
	    }`
		```
By leveraging conditional rendering techniques in React, we can create dynamic and interactive user interfaces that adapt to different states and conditions in your application. This flexibility allows us to provide a better user experience and handle various scenarios gracefully.
### 1.3 Rendering Lists
To be added
### 1.4 Fragments
To be added
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