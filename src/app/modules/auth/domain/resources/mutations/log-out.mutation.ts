import { gql } from 'apollo-angular';

export const logOutMutation = () => gql`
  mutation {
    logOut
  }
`;
