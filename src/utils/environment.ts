export const getStrapiUrl = () => {
  const strapiAdminUrl = process.env.REACT_APP_API;

  return strapiAdminUrl;
};

export const getRestApiUrl = () => {
  const strapiAdminUrl = process.env.REACT_APP_API;

  return `${strapiAdminUrl}/api`;
};

export const getGraphQLApiUrl = () => {
  const strapiAdminUrl = process.env.REACT_APP_API;

  return `${strapiAdminUrl}/graphql`;
};
