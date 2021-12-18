import { RegisterRequest } from '@modules/auth/domain/interfaces/register.request';
import { gql } from 'apollo-angular';

export const registerMutation = (registerRequest: RegisterRequest) => gql`
  mutation {
    register(registerUserInput: ${registerRequest}) {
      email,
      firstName,
      lastName
    }
  }
`;
