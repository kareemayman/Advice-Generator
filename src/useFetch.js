import { useEffect, useState } from "react"

export function useFetch(url) {
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
        changeIsError(false)
        console.error(Error)
      })
      .finally(() => changeIsLoading(false))

    return () => {
      changeIsError(true)
      changeIsError(false)
      setData([])
    }
  }, [url])

  return { isLoading, isError, data }
}
