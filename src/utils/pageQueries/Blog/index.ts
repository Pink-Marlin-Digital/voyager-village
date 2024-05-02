import { print } from "graphql";
import { fetchCmsGraphql } from "../../fetchCmsData";
import QUERY from "./blog";
import { BlogQuery, BlogQueryVariables } from "./blog.generated";
export type { BlogQuery, BlogQueryVariables };

export const getblogData = async (
  variables: any
): Promise<BlogQuery | null> => {
  try {
    const data = await fetchCmsGraphql(print(QUERY), variables);
    return data as BlogQuery;
  } catch (error) {
    console.error(error);
    return null;
  }
};
