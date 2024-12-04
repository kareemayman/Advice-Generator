import { useEffect, useState } from "react"

export function useFetch(url, triggerFetch) {
  const [isLoading, changeIsLoading] = useState(true)
  const [isError, changeIsError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json()
        Promise.reject("Error Fetching Data")
      })
      .then((jsonData) => setData(jsonData))
      .catch(() => {
        changeIsError(true)
      })
      .finally(() => changeIsLoading(false))

    return () => {
      changeIsLoading(true)
      changeIsError(false)
      setData([])
    }
  }, [url, triggerFetch])

  return { isLoading, isError, data }
}
