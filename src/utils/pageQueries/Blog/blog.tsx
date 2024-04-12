import gql from "graphql-tag";

export default gql`
  query blog {
    voyagerArticles(sort: ["id:desc"]) {
      data {
        id
        attributes {
          title
          article
          slug
          blog_image {
            data {
              id
              attributes {
                name
                width
                height
                url
                alternativeText
              }
            }
          }
          author {
            data {
              id
              attributes {
                username
                email
                firstname
                lastname
              }
            }
          }
          blog_type
          minutes_read
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
