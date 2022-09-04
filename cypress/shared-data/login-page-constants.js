import { getLoginPasswordFiled, getLoginUserNameFiled } from '../page-objects/login-page.spec';

const ENV_DATA = Cypress.env('env');

export const BASE_URL = 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php';

export const LOGIN_TITLE = 'AQA internship Login';

export const PLACEHOLDER_VALUES = {
  username: 'Username',
  password: 'Password',
};

export const ERROR_MESSAGES = {
  enterUsername: 'Please enter username.',
  enterPassword: 'Please enter your password.',
};

export const INDEX_FOR_ERROR_MESSAGE_CONTAINER = {
  usernameError: 1,
  passwordError: 2,
};

export const VERIFY_USERNAME_ERROR_MESSAGE = {
  selector: getLoginPasswordFiled(),
  value: ENV_DATA.testUser.password,
  index: INDEX_FOR_ERROR_MESSAGE_CONTAINER.usernameError,
  errorMessage: ERROR_MESSAGES.enterUsername,
};

export const VERIFY_PASSWORD_ERROR_MESSAGE = {
  selector: getLoginUserNameFiled(),
  value: ENV_DATA.testUser.username,
  index: INDEX_FOR_ERROR_MESSAGE_CONTAINER.passwordError,
  errorMessage: ERROR_MESSAGES.enterPassword,
};

export const SUCCESSFUL_LOGIN_MESSAGE = {
  noAccountFound: 'No account found with that username.'
}
