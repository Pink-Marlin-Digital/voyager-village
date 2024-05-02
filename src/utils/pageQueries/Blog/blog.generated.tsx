import * as Types from '../../../../types/graphql';

export type BlogQueryVariables = Types.Exact<{
  pagination?: Types.InputMaybe<Types.PaginationArg>;
}>;


export type BlogQuery = { __typename?: 'Query', voyagerArticles?: { __typename?: 'VoyagerArticleEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, page: number, pageSize: number, pageCount: number } }, data: Array<{ __typename?: 'VoyagerArticleEntity', id?: string | null, attributes?: { __typename?: 'VoyagerArticle', title?: string | null, article?: string | null, slug?: string | null, blog_type?: string | null, minutes_read?: number | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', category: string } | null }> } | null, blog_image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, width?: number | null, height?: number | null, url: string, alternativeText?: string | null } | null } | null } | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, firstname?: string | null, lastname?: string | null } | null } | null } | null } | null }> } | null };
