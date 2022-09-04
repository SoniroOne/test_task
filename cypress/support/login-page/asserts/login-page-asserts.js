import { Chance } from 'chance';
import {
  errorNotificationContainer,
  getErrorMessage,
  getLogiButton,
  getLoginPasswordFiled,
  getLoginUserNameFiled,
} from '../../../page-objects/login-page.spec';
import { LOGIN_TITLE, SUCCESSFUL_LOGIN_MESSAGE } from '../../../shared-data/login-page-constants';

const chance = new Chance();

export const login = (username, password) => {
  cy.get(getLoginUserNameFiled()).should('exist').clear().type(username);
  cy.get(getLoginPasswordFiled()).should('exist').clear().type(password);
  cy.get(getLogiButton()).should('exist').click();
  errorNotificationContainer().should('exist').and('have.text', SUCCESSFUL_LOGIN_MESSAGE.noAccountFound);
};

export const verifyAllExistingElements = (array) => {
  array.forEach((element) => {
    cy.get(element).should('exist');
  });
};

export const verifyText = (element, text = LOGIN_TITLE) => {
  cy.get(element).should('exist').and('have.text', text);
};

export const verifyPlaceholder = (element, placeholderValue) => {
  cy.get(element).should('exist').invoke('attr', 'placeholder').should('contain', placeholderValue);
};

export const verifyErrorMessageAppear = (arg) => {
  cy.get(arg.selector).should('exist').clear().type(arg.value);
  cy.get(getLogiButton()).should('exist').click();
  cy.verifyThatElementHasSpecificText(getErrorMessage(arg.index), arg.errorMessage);
};

export const verifyCharacterSetLimits = (selector) => {
  cy.get(selector)
    .clear()
    .type(`${chance.string({ symbols: true, length: 100 })}`);
  cy.clickOutside();
  errorNotificationContainer().should('not.exist');
};
