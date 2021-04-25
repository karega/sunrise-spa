import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import config from '../sunrise.config'


const delay = setContext(
  request =>
    new Promise((success, fail) => {
        success()
    })
)

const cache = new InMemoryCache()
const http = new HttpLink({
  uri: `${config.ct.api}/${config.ct.auth.projectKey}/graphql`
})

const link = ApolloLink.from([
  delay,
  http
])

const client = new ApolloClient({
  cache,
  link
})

export default client