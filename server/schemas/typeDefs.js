const typeDefs = `
  type Book {
    _id: ID
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!

  }
  type User {
    id_: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [User]
    user(username: String!): User
    savedBooks(username: String): [Book]
    book(bookId: ID!): Book
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook

  }
`;

module.exports = typeDefs;
