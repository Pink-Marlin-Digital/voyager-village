---
to: src/utils/pageQueries/<%= queryName %>/<%= queryName %>.tsx

---
import gql from 'graphql-tag';

export default gql`
  query <%= queryName %> {
    # Add your query here

  }
`;



