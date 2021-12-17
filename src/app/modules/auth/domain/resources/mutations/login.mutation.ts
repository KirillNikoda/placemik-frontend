import { LoginRequest } from '@modules/auth/domain/interfaces/login.request';

export const loginMutation = (loginRequest: LoginRequest) => `
    mutation {
      login(loginUserInput: ${loginRequest}) {
        email,
        firstName,
        lastName
      }
    }
  `;
