import processDoubleArgs from './data/processDoubleArgs.js';
import processTripleArgs from './data/processTripleArgs.js';
import Prompt from './data/Prompt.js';

export function checkboxes() {
  const options = processTripleArgs(arguments, 'Choose some options', 'checkbox');
  return new Prompt(options).execute();
}

export function confirm() {
  const options = processDoubleArgs(arguments, 'Confirm?', 'confirm');
  return new Prompt(options).execute();
}

export function password() {
  const options = processDoubleArgs(arguments, 'Enter password', 'password');
  return new Prompt(options).execute();
}

export function select() {
  const options = processTripleArgs(arguments, 'Choose an option', 'list');
  return new Prompt(options).execute();
}

export function text() {
  const options = processDoubleArgs(arguments, 'Enter text', 'input');
  return new Prompt(options).execute();
}

export default { checkboxes, confirm, password, select, text };
