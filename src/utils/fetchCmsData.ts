import { getStrapiUrl, getGraphQLApiUrl } from "./environment";
import { parse, print } from "graphql";
/**
 * Fetches data from the CMS and handles errors when they occur
 * @param route - the route to fetch data from
 * @param options - any options to include in the request
 */
export async function fetchCmsData<T>(
  route: any,
  { headers = {}, ...rest } = {}
): Promise<T> {
  const url = getStrapiUrl();
  const target = new URL("/api" + route, url);
  try {
    const response = await fetch(target.href, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_KEY || "",
        ...headers,
      },
      ...rest,
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error(`error fetching data from ${route} ${error.message}`);
    throw error;
  }
}

export const fetchCmsGraphql = async (query: any, variables: any) => {
  const url = getGraphQLApiUrl();
  let parsedQuery = query;
  if (typeof query === "string") {
    parsedQuery = parse(query);
  }
  //@ts-ignore
  const opName = parsedQuery.definitions[0].name.value;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_KEY || "",
      },
      body: JSON.stringify({ query: print(parsedQuery), variables }),
    });

    const { data, errors } = await response.json();
    if (errors) {
      console.group(`QUERY: ${opName}\n`);
      console.log(print(parsedQuery));
      console.groupEnd();
      console.error(`ERROR: ${opName}:`, errors);
    }
    return data;
  } catch (error) {
    console.error(`ERROR: ${opName}:`, error);
    return null;
  }
};
