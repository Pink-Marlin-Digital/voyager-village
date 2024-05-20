import gql from "graphql-tag";

export default gql`
  query DetailBlog($filters: VoyagerArticleFiltersInput) {
    voyagerArticles(filters: $filters) {
      data {
        id
        attributes {
          categories {
            data {
              id
              attributes {
                category
              }
            }
          }
          title
          slug
          article
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
