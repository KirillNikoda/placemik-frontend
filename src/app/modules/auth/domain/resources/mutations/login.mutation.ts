import { LoginRequest } from '@modules/auth/domain/interfaces/login.request';
import { gql } from 'apollo-angular';

export const loginMutation = (loginRequest: LoginRequest) => gql`
  mutation {
    login(loginUserInput: ${loginRequest}) {
      email,
      firstName,
      lastName
    }
  }
`;
