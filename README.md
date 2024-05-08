

# Routing

## Topics covered in this section of course
1. Routing without a library
2. React router basics
3. Nested routes
4. Dynamic routes
5. Loaders

## Learnings
### 1. Routing without a library
Routing in React without a library involves managing the application's navigation and rendering different components based on the URL path using built-in features like `window.location` and React's state management. While this approach is not as feature-rich or flexible as using a routing library like React Router, it can be suitable for small projects or simple applications where you want to minimize dependencies. Here's a basic example of how to implement routing without a library in React:
Example:
```jsx
import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

export default function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/store":
      component = <Store />;
      break;
    default:
      component = <div>Page Not Found</div>;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
        </ul>
      </nav>
      {component}
    </>
  );
}` 
```
Explanation:

1.  **Routing Logic:**
    -   Inside the `App` component, a `switch` statement is used to conditionally render components based on the current `window.location.pathname`.
    -   Depending on the pathname, a corresponding component (`Home`, `About`, `Store`) is assigned to the `component` variable.
2.  **Rendering Navigation Links:**
    -   Navigation links are rendered using anchor (`<a>`) tags with `href` attributes set to the desired pathnames (`"/"`, `"/about"`, `"/store"`).
3.  **Fallback Route:**
    -   A default case is included in the `switch` statement to handle cases where the pathname doesn't match any of the defined routes. In this example, it renders a "Page Not Found" message.
4.  **Rendering the Component:**
    -   Finally, the `component` variable is rendered below the navigation links, displaying the appropriate component based on the current URL.

This approach provides a basic routing mechanism without the need for additional dependencies. However, it lacks advanced features such as nested routes, route matching, and route transitions that are commonly available in routing libraries like React Router. Depending on the complexity of your application and your specific requirements, you may choose to use a routing library for a more robust and flexible routing solution.

### 2. React router basics
