export const getLoginContainer = () => {
  return 'div.wrapper';
};

export const getLoginIcon = () => {
  return '#logomini';
};

export const getLoginTitle = () => {
  return 'center h1';
};

export const getLoginUserNameFiled = () => {
  return 'input[name="username"]';
};

export const getLoginPasswordFiled = () => {
  return 'input[name="password"]';
};

export const getLogiButton = () => {
  return 'input[type="submit"]';
};

export const errorNotificationContainer = () => {
  return cy.get('div[class="form-group has-error"] span');
};

export const getErrorMessage = (indexOfErrorMessage) => {
  return `div[class="form-group has-error"]:nth-child(${indexOfErrorMessage}) span`;
};
