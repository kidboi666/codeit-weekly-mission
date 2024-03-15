import {
  $emailInput,
  $pwInput,
  $pwVerifyInput,
  $emailAlertDiv,
  $pwAlertDiv,
  $pwVerifyAlertDiv,
  $form,
  $eyes,
  mockUserInfo,
  message,
  drawAlert,
  eraseAlert,
  handlePwSight,
  validateEmailValue,
  validatePwValue,
  signupPageStatus,
} from './utils/auth.js'; // 패스워드 인풋창이랑 패스워드 재입력 인풋창
import { numberPattern as numPattern, englishPattern as engPattern } from './utils/regx.js';
let { duplicateAccountState, pwFormState, comparePwState } = signupPageStatus;

const checkDuplicateAccount = () => {
  $emailInput.value === mockUserInfo.email
    ? (drawAlert($emailAlertDiv, $emailInput, message.duplicateEmail), (duplicateAccountState = false))
    : (duplicateAccountState = true);
};

const checkPwForm = () => {
  const validateResult =
    engPattern.test($pwInput.value) && numPattern.test($pwInput.value) && $pwInput.value.length >= 8;
  validateResult === false
    ? (drawAlert($pwAlertDiv, $pwInput, message.wrongPwForm), (pwFormState = false))
    : (eraseAlert($pwAlertDiv, $pwInput), (pwFormState = true));
};

const comparePw = () => {
  const compareResult = $pwInput.value === $pwVerifyInput.value;
  compareResult === false
    ? (drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.diffrentPw), (comparePwState = false))
    : (eraseAlert($pwVerifyAlertDiv, $pwVerifyInput), (comparePwState = true));
};

const submitEvent = (e) => {
  e.preventDefault();
  comparePw();
  checkPwForm();
  checkDuplicateAccount();
  if (duplicateAccountState && pwFormState && comparePwState) {
    return (location.href = '../pages/folder.html');
  }
  if ($emailInput.value === mockUserInfo.email) drawAlert($emailAlertDiv, $emailInput, message.duplicateEmail);
  if (!$emailInput.value) drawAlert($emailAlertDiv, $emailInput, message.wrongEmail);
  if (!$pwInput.value) drawAlert($pwAlertDiv, $pwInput, message.wrongPw);
  if (!$pwVerifyInput.value) drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.wrongPw);
};

$eyes.addEventListener('click', handlePwSight);
$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePwValue);
$emailInput.addEventListener('focusout', checkDuplicateAccount);
$pwInput.addEventListener('focusout', checkPwForm);
$pwVerifyInput.addEventListener('focusout', comparePw);
$form.addEventListener('submit', submitEvent);
