import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://arauto-tables.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

export default client
