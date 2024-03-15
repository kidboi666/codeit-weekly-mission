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
} from './utils/auth.js';
import { numberPattern as numPattern, englishPattern as engPattern } from './utils/regx.js';
let { duplicateAccountState, pwFormState, comparePwState } = signupPageStatus;

// 계정 중복 검사
const checkDuplicateAccount = ({ value: emailValue }) => {
  const validateResult = emailValue !== mockUserInfo.email;
  validateResult === false /* 이메일이 mockUser와 같다면 */
    ? (drawAlert($emailAlertDiv, $emailInput, message.duplicateEmail), (duplicateAccountState = false))
    : (duplicateAccountState = true);
};

// 비밀번호 양식 검사
const checkPwForm = () => {
  const { value: pwValue } = $pwInput;
  const validateResult = engPattern.test(pwValue) && numPattern.test(pwValue) && pwValue.length >= 8;
  validateResult === false /* 비밀번호 양식이 불일치하다면 */
    ? (drawAlert($pwAlertDiv, $pwInput, message.wrongPwForm), (pwFormState = false))
    : (eraseAlert($pwAlertDiv, $pwInput), (pwFormState = true));
};

// 비밀번호 재입력 일치 확인
const comparePw = () => {
  const { value: pwValue } = $pwInput;
  const { value: pwVerifyValue } = $pwVerifyInput;
  if (!pwVerifyValue) {
    drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.wrongPw);
  } else {
    const validateResult = pwValue === pwVerifyValue;
    validateResult === false /* 비밀번호와 비밀번호재입력 인풋값이 불일치하다면 */
      ? (drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.diffrentPw), (comparePwState = false))
      : (eraseAlert($pwVerifyAlertDiv, $pwVerifyInput), (comparePwState = true));
  }
};

//
const submitEvent = (e) => {
  const { value: emailValue } = $emailInput;
  const { value: pwValue } = $pwInput;
  const { value: pwVerifyValue } = $pwVerifyInput;
  e.preventDefault();
  comparePw();
  checkPwForm();
  checkDuplicateAccount($emailInput);

  if (duplicateAccountState && pwFormState && comparePwState) {
    return (location.href = '../pages/folder.html');
  }
  if (emailValue === mockUserInfo.email) drawAlert($emailAlertDiv, $emailInput, message.duplicateEmail);
  if (!emailValue) drawAlert($emailAlertDiv, $emailInput, message.wrongEmail);
  if (!pwValue) drawAlert($pwAlertDiv, $pwInput, message.wrongPw);
  if (!pwVerifyValue) drawAlert($pwVerifyAlertDiv, $pwVerifyInput, message.wrongPw);
};

$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePwValue);
$emailInput.addEventListener('focusout', checkDuplicateAccount);
$pwInput.addEventListener('focusout', checkPwForm);
$pwVerifyInput.addEventListener('focusout', comparePw);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePwSight);
