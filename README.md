


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
React Router is a powerful routing library for React applications that enables you to handle navigation and rendering different components based on the URL. It provides components and utilities for defining routes, navigating between pages, and managing application state.
Here's an overview of React Router basics, including how to use `RouterProvider` to declare a router, declare routes using objects and components, use the `Link` component for navigation, and implement layout components for structuring UI:
1.  **Installation:**
    -   Before using React Router, we need to install it in project using npm:
        `npm install react-router-dom` 
        
2.  **Router Setup with RouterProvider:**
    -   In your main entry point (e.g., `index.js` or `App.js`), wrap your application with a router provider. You can use either `BrowserRouter` or `HashRouter`.
    -   Use `RouterProvider` to provide the router configuration to your application.
    -   Example:
		```jsx
		import { RouterProvider } from 'react-router';
		import { router } from './router';
		ReactDOM.createRoot(document.getElementById("root")).render(
		  <React.StrictMode>
		    <RouterProvider router={router}/>
		  </React.StrictMode>
		 );
		```
3.  **Route Declaration using Objects:**
    -   Define routes using an array of route objects, each containing a `path` and an `element` (component to render).
    -   Example:
		```jsx
		import { createBrowserRouter } from "react-router-dom"
		export const router = createBrowserRouter([
		  { path: '/', element: <Home /> },
		  { path: '/about', element: <About /> },
		  { path: '/store', element: <Store /> },
		]); 
		```        
4.  **Route Declaration using Components:**
    -   Alternatively, you can declare routes using component-based syntax within a `Router` component.
    -   Example:
		```js
		import { Route, createBrowserRouter, createRoutesFromElements } from  "react-router-dom"
		import Layout from  "./Layout"
		export const router = createBrowserRouter(
		  createRoutesFromElements(
		    <Route  element={<Layout  />}>
		      <Route path="/" component={Home} />
		      <Route path="/about" component={About} />
		      <Route path="/store" component={Store} />
		    </Route>
		  )
		)
		```       
5.  **Navigation using Link Component:**
    -   Instead of using anchor (`<a>`) tags for navigation, use the `Link` component from React Router.
    -   Example:
		```jsx
		import { Link } from 'react-router-dom';
		export  default  function  Navbar() {
		  return (
		    <nav>
		      <ul>
		        <li>
		          <Link to="/">Home</Link>
		        </li>
		        <li>
		          <Link to="/about">About</Link>
		        </li>
		        <li>
		          <Link to="/store">Store</Link>
		        </li>
		      </ul>
		    </nav>
		  )
		}
		```
6.  **Layout Components for Navbar and Outlet:**
    -   Create layout components to structure your UI, such as a common navbar and an outlet component where route components will be rendered.
    -   Example:
		```jsx
		import Navbar from  "./Navbar"
		import { Outlet } from  "react-router-dom"
		export default function Layout({ children }) {
		  return (
		    <>
		      <Navbar  />
		      <Outlet  />
		    </>
		  )
		}
		``` 

React Router provides a flexible and powerful way to handle routing in your React applications, allowing you to create dynamic and interactive navigation experiences with ease.
### 3. Nested Routes
Nested routes in React Router allow you to define routes within routes, creating a hierarchical structure for your application's navigation. This is useful for organizing and managing complex UIs with multiple levels of hierarchy. Here's how you can declare nested routes using both objects and components in React Router:

1.  **Route Declaration using Objects:**
    -   Define nested routes using an array of route objects, each containing a `path` and an `element` (component to render).
    -   Example:
		```jsx
		import  { createBrowserRouter }  from  "react-router-dom"
		export const nestedRoutes = createBrowserRouter([{
		  element: <NavLayout />,
		  errorElement: <h1>Error</h1>,
		  children: [
		    { path: "/", element: <Home /> },
		    { path: "/store", element: <Store /> },
		    { path: "/about", element: <About /> },
		    {
		      path: "/team",
		      element: <TeamNavLayout />,
		      children: [
		        { index: true, element: <Team /> },
		        { path: "joe", element: <TeamMember name="joe" /> },
		        { path: "sally", element: <TeamMember name="sally" /> },
		      ],
		    },
		  ],
		}]);
		```         
        
2.  **Route Declaration using Components:**
    -   Alternatively, you can declare nested routes using component-based syntax.
    -   Example:
		```jsx
		import { Route, createBrowserRouter, createRoutesFromElements }  from  "react-router-dom"  
		import {Layout, TeamLayout} from  "./Layout"
		export const router =  createBrowserRouter(  
		  createRoutesFromElements(
		    <Route path="/" element={<Layout />}>
		      <Route path="/" element={<Home />} />
		      <Route path="/store" element={<Store />} />
		      <Route path="/about" element={<About />} />
		      <Route path="/team" element={<TeamLayout />}>
		        <Route index element={<Team />} />
		        <Route path="joe" element={<TeamMember name="joe" />} />
		        <Route path="sally" element={<TeamMember name="sally" />} />
		      </Route>
		    </Route>
		  )
		)
		```        
3.  **Layout Components for Nested Routes:**
    -   Create layout components for nested routes to structure your UI. These layout components can contain common UI elements such as navigation bars and outlets.
    -   Example:
		```jsx
		import Navbar from  "./Navbar"  
		import TeamNav from  "./TeamNav"  
		import  { Outlet }  from  "react-router-dom"
		export function Layout() {
		   return (
		     <>
		       <Navbar />
		       <Outlet />
		     </>
		   );
		 }
		        
		export function TeamLayout() {
		  return (
		    <>
		      <TeamNav />
		      <Outlet />
		    </>
		  );
		}
		```
        
With nested routes, you can create complex navigation structures and organize your application's UI in a hierarchical manner, making it easier to manage and maintain as your application grows. Each nested route can have its own layout and functionality, providing a flexible and scalable solution for building React applications with multiple levels of navigation.
### 4. Dynamic Routes
Dynamic routes in React Router allows to define routes with dynamic segments that match specific patterns in the URL. This is useful for creating routes that can handle varying data or parameters, such as user IDs or product names. Here's how we can declare dynamic routes using both objects and components in React Router, and how to access the dynamic parameters:
1.  **Route Declaration using Objects:**
    -   Define dynamic routes using the `:parameterName` syntax to specify dynamic segments in the route path.
    -   Example:
		```jsx
		import  { createBrowserRouter }  from  "react-router-dom 
		export const dynamicRoutes = createBrowserRouter([
		{
		  element: <Layout />,
		  errorElement: <h1>Error</h1>,
		  children: [
		    { path: "/", element: <Home /> },
		    { path: "/store", element: <Store /> },
		    { path: "/about", element: <About /> },
		    {
		      path: "/team",
		      element: <TeamNavLayout />,
		      children: [
		        { index: true, element: <Team /> },
		        { path: ":memberId", element: <TeamMember /> }, // Dynamic route
		        { path: "new", element: <NewTeamMember /> },
		      ],
		    },
		  ],
		}]);
		```       
        
2.  **Route Declaration using Components:**    
    -   Alternatively, you can declare dynamic routes using component-based syntax within a `Router` component.
    -   Example:
		```jsx
		import  { Route, createBrowserRouter, createRoutesFromElements }  from  "react-router-dom"
		import  { Layout, TeamLayout }  from  "./Layout"  
		export  const router =  createBrowserRouter(  
		  createRoutesFromElements(
		    <Route path="/" element={<Layout />}>
		      <Route path="/" element={<Home />} />
		      <Route path="/store" element={<Store />} />
		      <Route path="/about" element={<About />} />
		      <Route path="/team" element={<TeamLayout />}>
		        <Route index element={<Team />} />
		        <Route path=":memberId" element={<TeamMember />} /> {/* Dynamic route */}
		        <Route path="new" element={<NewTeamMember />} />
		      </Route>
		    </Route>
		  )
		)
		```		       
        
3.  **Accessing Dynamic Parameters:**    
    -   To access dynamic parameters in the component associated with the dynamic route, you can use the `useParams` hook.    
    -   Example:
		```jsx
		import { useParams } from 'react-router-dom';  
		export default function TeamMember() {
		  const { memberId } = useParams();
		  return <h1>Team Member ID: {memberId}</h1>;
		}
		```        
        
Dynamic routes provide a flexible way to handle varying data in your application and create dynamic navigation experiences. By using dynamic parameters, you can create routes that respond to user input and display relevant content based on the URL.
### 5. Loaders
  
In React Router, loaders are used to fetch data before rendering the route component. They allow you to asynchronously load data for a route and display a loading indicator while the data is being fetched. Here's how you can use loaders to load data using both objects and components in React Router, access the loaded data, and show a loading message to the user:

1.  **Route Declaration with Loader (Using Objects):**    
    -   Define a `loader` function inside the route object to fetch data asynchronously before rendering the route component.
    -   Example:
```jsx  
export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Error</h1>,
    children: [            
      { path: "/", element: <Home /> },            
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        loader: ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users?_limit=5", {
            signal,
          })
        },
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                { signal }
              ).then((res) => {
                if (res.status === 200) return res.json()
                throw redirect("/team")
              })
            },
            element: <TeamMember />,
          },
          { path: "new", element: <NewTeamMember /> },
        ],
      },
    ],
  },
])
``` 
        
2.  **Route Declaration with Loader (Using Components):**
    
    -   Alternatively, you can declare loaders using component-based syntax within a route component.
    -   Example:
```jsx  
import { Route, createBrowserRouter, createRoutesFromElements } from  "react-router-dom"
export  const  router  =  createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/"  element={<NavLayout  />}>
      <Route  index={true} element={<Home  />} />
      <Route  path="/about"  element={<About  />} />
      <Route
        path="/team"
        element={<TeamNavLayout  />}
        loader={({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users_limit=5", 
          {signal})
        }}>
        <Route  index  element={<Team  />} />
        <Route
          path=":memberId"
          element={<TeamMember  />}
          loader={({ params, request: { signal } }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`,
            { signal }
          ).then((res) => {
            if (res.status  ===  200) return  res.json()
            throw  redirect("/team")
          })
        }}/>
      </Route>
    </Route>
  )
)
``` 
        
3.  **Accessing Loaded Data:**
    
    -   Inside the route component associated with the loader, you can access the loaded data using props or state.
    -   Example:
		```jsx        
		function TeamMember() {
		  const { data } = useLoaderData();
		  // Access data here
		}
		``` 
        
4.  **Showing Loading Message:**
    
    -   Use a loading state or indicator to inform the user that data is being fetched.
    -   Example:
        ```jsx
        function NavLayout() {
          const { state } = useNavigation();
          return (
            <>
              <Navbar />
              {state === "loading" ? <h1>Loading</h1> : <Outlet />}
            </>
          );
        }
        ``` 
        
Loaders in React Router provide a convenient way to handle asynchronous data fetching for routes and ensure that data is available before rendering the route component, enhancing the user experience by displaying loading indicators when necessary.
