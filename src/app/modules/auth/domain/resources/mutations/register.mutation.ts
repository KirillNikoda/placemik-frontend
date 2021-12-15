import { RegisterRequest } from '@modules/auth/domain/interfaces/register.request';

export const registerMutation = (registerRequest: RegisterRequest) => `
  mutation {
    register(registerUserInput: ${registerRequest}) {
      email,
      firstName,
      lastName
    }
  }
`;
