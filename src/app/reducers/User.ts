import { UserActions } from 'app/actions';
import * as UserInterfaces from 'app/types/User';

const userStoreIntialState: UserInterfaces.UserStoreState = {
  country: 'IN',
  email: '',
  errorMessage: '',
  fullName: '',
  isLoggedIn: false,
  isUserProfileModalOpen: false,
  username: '',
};

export const userReducer = (
  state = userStoreIntialState,
  action: UserInterfaces.UserStoreAction,
) => {
  switch (action.type) {
    case UserActions.Type.UPDATE_USER_DETAILS: {
      const {
        country,
        email,
        isLoggedIn,
        username,
        fullName,
        isUserProfileModalOpen,
        errorMessage,
      } = action.payload.userDetails;
      return {
        ...state,
        country: country !== undefined ? country : state.country,
        email: email !== undefined ? email : state.email,
        errorMessage: errorMessage !== undefined ? errorMessage : state.errorMessage,
        fullName: fullName !== undefined ? fullName : state.fullName,
        isLoggedIn: isLoggedIn !== undefined ? isLoggedIn : state.isLoggedIn,
        isUserProfileModalOpen:
          isUserProfileModalOpen !== undefined
            ? isUserProfileModalOpen
            : state.isUserProfileModalOpen,
        username: username !== undefined ? username : state.username,
      };
    }

    case UserActions.Type.UPDATE_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.payload.errorMessage ? action.payload.errorMessage : '',
      };
    }
    case UserActions.Type.TOGGLE_USER_PROFILE_MODAL: {
      return {
        ...state,
        isUserProfileModalOpen: action.payload.isUserProfileModalOpen,
      };
    }
    case UserActions.Type.RESET_USER_STATE: {
      return {
        ...userStoreIntialState,
      };
    }
    default:
      return state;
  }
};
