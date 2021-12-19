import { gql } from 'apollo-angular';

export const refreshMutation = () => gql`
  mutation {
    refresh
  }
`;
