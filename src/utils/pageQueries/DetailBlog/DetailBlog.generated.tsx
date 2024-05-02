import * as Types from '../../../../types/graphql';

export type DetailBlogQueryVariables = Types.Exact<{
  filters?: Types.InputMaybe<Types.VoyagerArticleFiltersInput>;
}>;


export type DetailBlogQuery = { __typename?: 'Query', voyagerArticles?: { __typename?: 'VoyagerArticleEntityResponseCollection', data: Array<{ __typename?: 'VoyagerArticleEntity', id?: string | null, attributes?: { __typename?: 'VoyagerArticle', title?: string | null, slug?: string | null, article?: string | null, blog_type?: string | null, minutes_read?: number | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, blog_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, width?: number | null, height?: number | null, url: string, alternativeText?: string | null } | null } | null } | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, firstname?: string | null, lastname?: string | null } | null } | null } | null } | null }> } | null };
