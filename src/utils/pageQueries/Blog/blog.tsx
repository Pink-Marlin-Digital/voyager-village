import gql from "graphql-tag";

export default gql`
  query blog(
    $sort: [String]
    $pagination: PaginationArg
    $filters: VoyagerArticleFiltersInput
  ) {
    voyagerArticles(sort: $sort, pagination: $pagination, filters: $filters) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          title
          article
          slug
          categories {
            data {
              id
              attributes {
                category
              }
            }
          }
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
