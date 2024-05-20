import { print } from "graphql";
import QUERY from "./category";
import { fetchCmsGraphql } from "../../fetchCmsData";
import {
  CategoriesQuery,
  CategoriesQueryVariables,
} from "./category.generated";
export type { CategoriesQuery, CategoriesQueryVariables };

export const getcategoryData = async (
  variables: CategoriesQueryVariables
): Promise<CategoriesQuery | null> => {
  try {
    const data = await fetchCmsGraphql(print(QUERY), variables);
    return data as CategoriesQuery;
  } catch (error) {
    console.error(error);
    return null;
  }
};
