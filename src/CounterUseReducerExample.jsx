import { useReducer } from "react"

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CHANGE_COUNT: "CHANGE_COUNT",
  RESET: "RESET",
}

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.value
    case ACTIONS.RESET:
      return 0
    default:
      return count
  }
}

export function CounterUseReducerExample({ initialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialCount)

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { value: 5 } })
        }
      >
        +5
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </>
  )
}
