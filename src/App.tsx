import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Layout } from './components/Layout'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Layout>App</Layout>
    </BrowserRouter>
  )
}

export default App
