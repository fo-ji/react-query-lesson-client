import { VFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { StateProvider } from './context/StateProvider'
import { Layout } from './components/Layout'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { MainContext } from './components/MainContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // fetchに失敗した際、defaultで3回までリトライするので今回falseにしている
      refetchOnWindowFocus: false, // focusが当たった時に過剰なfetchを防ぐためfalse
    },
  },
})

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <ReactQueryA />
              </Route>
              <Route exact path="/query-b">
                <ReactQueryB />
              </Route>
              <Route exact path="/fetch-a">
                <ClassicalFetchA />
              </Route>
              <Route exact path="/fetch-b">
                <ClassicalFetchB />
              </Route>
              <Route exact path="/main-context">
                <MainContext />
              </Route>
            </Switch>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
