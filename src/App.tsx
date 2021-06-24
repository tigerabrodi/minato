import { Navigation } from 'components/Navigation'
import { createClient, Provider } from 'urql'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from 'components/Footer'
import { Home } from 'pages/Home'

const client = createClient({
  url: 'https://api.yelp.com/v3/graphql',
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
    },
  },
})

export const App = () => {
  return (
    <Provider value={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}
