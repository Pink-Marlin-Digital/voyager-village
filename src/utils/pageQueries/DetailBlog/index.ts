import { print } from "graphql";
import {
  DetailBlogQuery,
  DetailBlogQueryVariables,
} from "./DetailBlog.generated";
import { fetchCmsGraphql } from "../../fetchCmsData";
import QUERY from "./DetailBlog";
export type { DetailBlogQuery, DetailBlogQueryVariables };

export const getDetailBlogData = async (
  variables: any
): Promise<DetailBlogQuery | null> => {
  try {
    const data = await fetchCmsGraphql(print(QUERY), variables);
    return data as DetailBlogQuery;
  } catch (error) {
    console.error(error);
    return null;
  }
};
