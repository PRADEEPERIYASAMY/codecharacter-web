import { AuthType } from 'app/types/Authentication';
import * as UserInterfaces from 'app/types/User';

export interface State {
  isCaptchaValidated: boolean;
  isFormSubmitted: boolean;
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  country: string;
  fullName: string;
  pragyanId?: string;
}
export interface StateProps {
  errorMessage: string;
}

export interface ElementOwnProps {
  handleSelectPanel: (authType: AuthType) => void;
}

export interface DispatchProps {
  checkUsernameExists: (username: string) => void;
  register: (registerDetails: UserInterfaces.Register) => void;
  updateErrorMessage: (errorMessage: string) => void;
}

export type Props = StateProps & DispatchProps & ElementOwnProps;
