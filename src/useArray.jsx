import { useState } from "react"

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray)

  const set = (newArray) => {
    setArray(newArray)
  }

  const push = (newItem) => {
    setArray((currentArray) => {
      return [...currentArray, newItem]
    })
  }

  const replace = (index, newItem) => {
    setArray((currentArray) => {
      return currentArray.map((item, key) => {
        if (key === index) return newItem

        return item
      })
    })
  }

  const filter = (filterCondition) => {
    setArray((currentArray) => {
      return currentArray.filter(filterCondition)
    })
  }

  const remove = (indexToRemove) => {
    setArray((currentArray) => {
      return currentArray.filter((item, key) => key != indexToRemove)
    })
  }

  const clear = () => {
    setArray([])
  }

  const reset = () => {
    setArray(initialArray)
  }

  return {
    array,
    set,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  }
}
