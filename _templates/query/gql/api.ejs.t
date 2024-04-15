---
to: src/utils/pageQueries/<%= h.changeCase.pascal(queryName) %>/index.ts
---
import { print } from 'graphql';
import {
  <%= h.changeCase.pascal(queryName) %>Query,
  <%= h.changeCase.pascal(queryName) %>QueryVariables,
} from './<%= h.changeCase.pascal(queryName) %>.generated';
export type { <%= h.changeCase.pascal(queryName) %>Query, <%= h.changeCase.pascal(queryName) %>QueryVariables };
import QUERY from './<%= h.changeCase.pascal(queryName) %>';
import { fetchCmsGraphql } from '../../fetchCmsData';

export const get<%= queryName %>Data = async (
  variables: <%= h.changeCase.pascal(queryName) %>QueryVariables
): Promise<<%= h.changeCase.pascal(queryName) %>Query | null> => {
  try {
    const data = await fetchCmsGraphql(print(QUERY), variables);
    return data as <%= h.changeCase.pascal(queryName) %>Query;
  } catch (error) {
    console.error(error);
    return null;
  }
};



