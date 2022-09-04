import {
  getErrorMessage,
  getLogiButton,
  getLoginContainer,
  getLoginIcon,
  getLoginPasswordFiled,
  getLoginTitle,
  getLoginUserNameFiled,
} from '../page-objects/login-page.spec';
import {
  BASE_URL,
  ERROR_MESSAGES,
  INDEX_FOR_ERROR_MESSAGE_CONTAINER,
  PLACEHOLDER_VALUES,
  VERIFY_PASSWORD_ERROR_MESSAGE,
  VERIFY_USERNAME_ERROR_MESSAGE,
} from '../shared-data/login-page-constants';
import {
  login,
  verifyAllExistingElements,
  verifyCharacterSetLimits,
  verifyErrorMessageAppear,
  verifyPlaceholder,
  verifyText,
} from '../support/login-page/asserts/login-page-asserts';

const ENV_DATA = Cypress.env('env');

describe('Test Login form component', () => {
  beforeEach(() => {
    cy.intercept('GET', BASE_URL).as('loadContent');
    cy.visit(BASE_URL);
    cy.wait('@loadContent');
  });
  it('Verify that all alements are present on the page', () => {
    const VERIFY_ELEMENTS = [
      getLoginContainer(),
      getLoginIcon(),
      getLoginTitle(),
      getLoginUserNameFiled(),
      getLoginPasswordFiled(),
      getLogiButton(),
    ];
    verifyAllExistingElements(VERIFY_ELEMENTS);
  });

  it('Imitate successful loginsuccessful login', () => {
    login(ENV_DATA.testUser.username, ENV_DATA.testUser.password);
  });

  it('Verify that title has correct value', () => {
    verifyText(getLoginTitle());
  });

  it('Verify that placeholders have correct values', () => {
    [
      [getLoginUserNameFiled(), PLACEHOLDER_VALUES.username],
      [getLoginPasswordFiled(), PLACEHOLDER_VALUES.password],
    ].forEach((value) => {
      const [elementSelector, elementValue] = value;
      verifyPlaceholder(elementSelector, elementValue);
    });
  });

  it('Test that specific errors are appear when user click login without user name and password data', () => {
    cy.get(getLogiButton()).should('exist').click();
    [
      [INDEX_FOR_ERROR_MESSAGE_CONTAINER.usernameError, ERROR_MESSAGES.enterUsername],
      [INDEX_FOR_ERROR_MESSAGE_CONTAINER.passwordError, ERROR_MESSAGES.enterPassword],
    ].forEach((value) => {
      const [selectorIndex, elementValue] = value;
      cy.verifyThatElementHasSpecificText(getErrorMessage(selectorIndex), elementValue);
    });
  });

  it('Fill only username field, and verify the error message appear', () => {
    verifyErrorMessageAppear(VERIFY_PASSWORD_ERROR_MESSAGE);
  });

  it('Fill only password field, and verify the error message appear,', () => {
    verifyErrorMessageAppear(VERIFY_USERNAME_ERROR_MESSAGE);
  });

  it(`Test that user name field doesn't have any specific character limit`, () => {
    verifyCharacterSetLimits(getLoginUserNameFiled());
  });
});
