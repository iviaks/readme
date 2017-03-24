# Settings with Redux

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Provider from 'react-redux/lib/components/Provider'
import configureStore from './store'
import browserHistory from 'react-router/lib/browserHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import syncHistoryWithStore from 'react-router-redux/lib/sync'

import App from './containers/App'

import Home from './pages/Home'

import NotFound from './components/NotFound'

export const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>

        {/* Home */}
        <IndexRoute component={Home} />

        {/* 404 */}
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-app')
)
```
