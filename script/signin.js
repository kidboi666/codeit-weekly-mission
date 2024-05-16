import {
  $emailInput,
  $pwInput,
  $form,
  $eyes,
  $pwAlertDiv,
  $emailAlertDiv,
  validateEmailValue,
  validatePwValue,
  handlePwSight,
  mockUserInfo,
  drawAlert,
  message,
  eraseAlert,
} from './utils/auth.js';

// 임시 계정 일치 검사 || 경고 메시지 출력
const submitEvent = (event) => {
  const { value: emailValue } = $emailInput;
  const { value: pwValue } = $pwInput;
  event.preventDefault();

  if (emailValue === mockUserInfo.email && pwValue === mockUserInfo.pw) return (location.href = '../pages/folder.html');
  pwValue !== mockUserInfo.pw //
    ? drawAlert($pwAlertDiv, $pwInput, message.wrongPw)
    : eraseAlert($pwAlertDiv, $pwInput);
  emailValue !== mockUserInfo.email
    ? drawAlert($emailAlertDiv, $emailInput, message.wrongEmail)
    : eraseAlert($emailAlertDiv, $emailInput);
};

$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePwValue);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePwSight);
