import graphqlFields from 'graphql-fields';
import { GraphQLResolveInfo } from 'graphql';

export const getRelationsFromQuery = (info: GraphQLResolveInfo) => {
  const fields = graphqlFields(info)
  const relations = [];
  for (const [key, value] of Object.entries(fields)) {
    if (Object.keys(value).length > 0) {
      relations.push(key);
    }
  }

  return relations.join(',');
}
