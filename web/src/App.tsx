import { VFC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layoute';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';
import { ReactQueryA } from './components/ReactQueryA';
import { ReactQueryB } from './components/ReactQueryB';
import { MainContext } from './components/MainContext';
import { MainRTKit } from './components/MainRTKit';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: false,
    },
  },
});

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
            <Route exact path="/main-rtkit">
              <MainRTKit />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
