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
} from './utils/auth.js';
/* 테스트 계정과 입력값 일치 여부 검증 함수 */

const submitEvent = (event) => {
  event.preventDefault();
  if ($emailInput.value === mockUserInfo.email && $pwInput.value === mockUserInfo.pw)
    return (location.href = '../pages/folder.html');
  if ($pwInput.value !== mockUserInfo.pw) drawAlert($pwAlertDiv, $pwInput, message.wrongPw);
  if ($emailInput.value !== mockUserInfo.email) drawAlert($emailAlertDiv, $emailInput, message.wrongEmail);
};

$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePwValue);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePwSight);
