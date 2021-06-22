import { createClient, Provider } from 'urql'

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
      <div>Hello World</div>
    </Provider>
  )
}
