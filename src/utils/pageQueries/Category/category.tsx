import gql from "graphql-tag";

export default gql`
  query categories {
    categories {
      data {
        attributes {
          category
        }
      }
    }
  }
`;
