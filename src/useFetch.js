import { useEffect, useState } from "react"

export function useFetch(apiUrl, fetchOptions = {}) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsError(false)
    setIsLoading(true)

    const controller = new AbortController()
    fetch(apiUrl, { signal: controller.signal, ...fetchOptions })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then((data) => {
        setData(data)
      })
      .catch((e) => {
        if (e.name === "AbortError") return
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [apiUrl])
  return {
    data,
    isLoading,
    isError,
  }
}
