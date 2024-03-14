import {
  $emailInput,
  $pwInput,
  $pwVerifyInput,
  $emailAlertDiv,
  $pwAlertDiv,
  $pwVerifyAlertDiv,
  $form,
  $eyes,
  mockUserInformation,
  message,
  drawAlert,
  eraseAlert,
  handlePasswordSight,
  validateEmailValue,
} from './utils/auth.js'; // 패스워드 인풋창이랑 패스워드 재입력 인풋창
import { numberPattern as numPattern, englishPattern as engPattern } from './utils/regx.js';

let clickable = false;

const checkDuplicateAccount = () => {
  const { value: emailValue } = $emailInput;
  if (emailValue === mockUserInformation.email) {
    drawAlert($emailAlertDiv, $emailInput, message.duplicateEmail);
    clickable = false;
  }
};

const checkPasswordForm = (event) => {
  const { value } = event.target;
  const validatePasswordForm = engPattern.test(value) && numPattern.test(value) && value.length >= 8;
  if (!validatePasswordForm) {
    drawAlert($pwAlertDiv, $pwInput, message.wrongPasswordForm);
    clickable = false;
  } else {
    eraseAlert($pwAlertDiv, $pwInput);
  }
};

const comparePasswords = () => {
  if (!$pwInput.value || $pwInput.value !== $pwVerifyInput.value) {
    drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.diffrentPassword);
    clickable = false;
  } else {
    eraseAlert($pwVerifyAlertDiv, $pwVerifyInput);
    clickable = true;
  }
};

const submitEvent = (event) => {
  // document.querySelector('.signup_button').focus();
  if (clickable) {
    location.href = '../pages/folder.html';
  }
  event.preventDefault();
};

$eyes.addEventListener('click', handlePasswordSight);
$emailInput.addEventListener('focusout', validateEmailValue);
$emailInput.addEventListener('focusout', checkDuplicateAccount);
$pwInput.addEventListener('focusout', checkPasswordForm);
$pwVerifyInput.addEventListener('change', comparePasswords);
$form.addEventListener('submit', submitEvent);
