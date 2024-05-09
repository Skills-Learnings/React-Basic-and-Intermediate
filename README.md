


# Advanced Routing

## Topics covered in this section of course
1. Actions

## Learnings
### 1. Actions
Actions in React Router are used to handle various interactions within route components, such as form submissions, user input, or asynchronous data loading. They allow you to perform actions based on user events and update the application state or trigger API calls accordingly. 
Example of using actions to handle search and saving data to DB using api endpoints:
1.  **Route Declaration for handling actions (Using Objects):**
    -   Define a  `action`  function inside the route object to fetch data asynchronously before rendering the route component.
    -   Example:
```jsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Todos />,
    loader: async ({ request: { signal, url } }) => {
      const searchParams = new URL(url).searchParams;
      const query = searchParams.get("query") || "";
      return {
        searchParams: { query },
        todos: await fetch(`http://localhost:3000/todos?q=${query}`, {
          signal,
        }).then((res) => res.json()),
      };
    },
  },
  {
    path: 'new',
    element: <NewTodo />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const title = formData.get("title");

      if (title === "") {
        return "Title is required";
      }
      const todo = await fetch("http://localhost:3000/todos", {
        method: "POST",
        signal: request.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed: false }),
      }).then((res) => res.json());

      return redirect("/");
    },
  }
];
```      
2. **Route Declaration for handling actions (Using Components):**
    -   Alternatively, you can declare loaders using component-based syntax within a route component.
   -   Example:
```jsx
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        index={true}
        element={<Todos />}
        loader={async ({ request: { signal, url } }) => {
          const searchParams = new URL(url).searchParams
          const query = searchParams.get("query") || ""
          return {
            searchParams: { query },
            todos: await fetch(`http://localhost:3000/todos?q=${query}`, {
              signal,
            }).then((res) => res.json()),
          }
        }}
      />
      <Route
        path="new"
        element={<NewTodo />}
        action={async ({ request }) => {
          const formData = await request.formData()
          const title = formData.get("title")

          if (title === "") {
            return "Title is required"
          }
          const todo = await fetch("http://localhost:3000/todos", {
            method: "POST",
            signal: request.signal,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, completed: false }),
          }).then((res) => res.json())

          return redirect("/")
        }}
      />
    </>
  )
)
``` 
3. **Handling search actions using react router**
    - React router provides a `<Form/>` component to work with form and handle the form action. Below is the example of handling a search form using query parameters
    - Example:
		```jsx 
		export default function Todos() {
		  const {
		    searchParams: { query },
		    todos,
		  } = useLoaderData()
		  const queryRef = useRef()
		  const { state } = useNavigation()

		  useEffect(() => {
		    queryRef.current.value = query
		  }, [query])
		  
		  return (
		    <div className="container">
		      <h1 className="page-title mb-2">
		        Todos
		        <div className="title-btns">
		          <Link to="/new" className="btn">
		            New
		          </Link>
		        </div>
		      </h1>

		      <Form className="form">
		        <div className="form-row">
		          <div className="form-group">
		            <label htmlFor="query">Search</label>
		            <input type="search" name="query" id="query" ref={queryRef} />
		          </div>
		          <button className="btn">Search</button>
		        </div>
		      </Form>
		      {state === "loading" ? (
		        "Loading"
		      ) : (
		        <ul>
		          {todos.map((todo) => (
		            <TodoItem key={todo.id} {...todo} />
		          ))}
		        </ul>
		      )}
		    </div>
		  )
		}
		``` 
4. **Handling POST actions using react router **
   - We can also handle POST request actions for sending the data to api for create and update operations
   - Example:
		```jsx
		export default function NewTodo() {
		  const errorMessage = useActionData()
		  const { state } = useNavigation()
		  const isSubmiting = state === "submitting"

		  return (
		    <div className="container">
		      <h1 className="page-title">New todo</h1>
		      <Form className="form" method="post">
		        <div>{errorMessage}</div>
		        <div className="form-row">
		          <div className="form-group">
		            <label htmlFor="title">Title</label>
		            <input type="text" id="title" name="title" />
		          </div>
		        </div>
		        <div className="form-btn-row form-row">
		          <Link to=".." className="btn btn-outline">
		            Back
		          </Link>
		          <button disabled={isSubmiting} className="btn">
		            {isSubmiting ? "Loading" : "Create"}
		          </button>
		        </div>
		      </Form>
		    </div>
		  )
		}
		```    

Overall, actions in React Router provide a way to handle user interactions and trigger changes in the application state or server-side data. They help to create dynamic and interactive user experiences within route components.

## Local Setup Instructions
1. To run this example implementation on your local download the files.
2. This is a API based project, a local json based API is being used to fetch the data. So first we will need to setup the API on local, to setup the API follow the below steps:
   - Open the terminal and navigate to the `api` folder present at the root of project.
   - Execute the command `npm install` and after that execute `npm run dev` command.
   -  This should start up an API on http://localhost:3000 and verify that you are able to access the api.
3. Now to setup the frontend(client) of this project follow the below steps:
   - Open the terminal and navigate to the `client` folder present at the root of project.
   - Execute the command `npm install` and after that execute `npm run dev` command.
   - Open the localhost url returned in the browser to view the project.
