import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

import { useClassicalFetch } from '../hooks/useClassicalFetch'

export const ClassicalFetchA: VFC = () => {
  const history = useHistory()
  const { isLoading, isError, tasks } = useClassicalFetch()
  console.log('rendered ClassicalFetchA')

  if (isLoading) return <div>{'Loading..'}</div>
  if (isError) return <div>{'Error'}</div>

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        className="h-s w-S mt-2 text-blue-500 cursor-pointer"
        onClick={() => history.push('/fetch-b')}
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
