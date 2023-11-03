const { gql } = require("graphql-request");

export const GET_ALL_EVENTS = gql`
  query {
    events {
      _id
      title
      description
      url
      organizer {
        _id
        name
        role
        email
      }
    }
  }
`;
