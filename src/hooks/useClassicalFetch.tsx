import { useEffect, useState } from 'react'
import axios from 'axios'

import { useStateContext } from '../context/StateProvider'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios('http://127.0.0.1:8000/api/tasks/')
        setTasks(res.data)
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [setTasks])

  return { tasks, isLoading, isError }
}
