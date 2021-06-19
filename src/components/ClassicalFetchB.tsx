import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

import { useStateContext } from '../context/StateProvider'

export const ClassicalFetchB: VFC = () => {
  const history = useHistory()
  const { tasks } = useStateContext()
  console.log('rendered ClassicalFetchB')

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        className="h-s w-S mt-2 text-blue-500 cursor-pointer"
        onClick={() => history.push('/fetch-a')}
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
