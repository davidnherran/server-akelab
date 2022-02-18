import { gql, ApolloServer } from "apollo-server"
import {movies} from "./movies.js"

const typeDefs = gql`
    type Movies {
      n: Int!
      images_url: String!
      genres: [Genres]!
      results: [Results]!
    }

    type Genres {
      id: Int!
      name: String!
    }
    
    type Results {
      popularity: Float!
      vote_count: Int!
      video: Boolean!
      poster_path: String!
      id: Int!
      adult: Boolean!
      backdrop_path: String!
      original_language: String!
      original_title: String!
      genre_ids: [Int]!
      title: String!
      vote_average: Float!
      overview: String!
      release_date: String!
    }

    type Query { 
      allMovies: [Movies]!
    }
`

const resolvers = { 
  Query: {
    allMovies: () => movies
  }
}

const server = new ApolloServer({ 
  typeDefs: typeDefs, 
  resolvers
})

server.listen().then(({ url }) => { 
  console.log(`🚀 Server ready at ${url}`)
});