import {
  $emailInput,
  $pwInput,
  $form,
  $eyes,
  $pwAlertDiv,
  $emailAlertDiv,
  validateEmailValue,
  validatePasswordValue,
  handlePasswordSight,
  mockUserInformation,
  drawAlert,
  message,
} from './utils/auth.js';
/* 테스트 계정과 입력값 일치 여부 검증 함수 */
const submitEvent = (event) => {
  const { value: emailValue } = $emailInput;
  const { value: passwordValue } = $pwInput;
  if (emailValue === mockUserInformation.email && passwordValue === mockUserInformation.password) {
    location.href = '../pages/folder.html';
  } else if (emailValue === mockUserInformation.email && passwordValue !== mockUserInformation.password) {
    drawAlert($pwAlertDiv, $pwInput, message.wrongPassword);
  } else if (emailValue !== mockUserInformation.email && passwordValue === mockUserInformation.password) {
    drawAlert($emailAlertDiv, $emailInput, message.wrongEmail);
  } else {
    drawAlert($pwAlertDiv, $pwInput, message.wrongPassword);
    drawAlert($emailAlertDiv, $emailInput, message.wrongEmail);
  }
  event.preventDefault();
};

$emailInput.addEventListener('focusout', validateEmailValue);
$pwInput.addEventListener('focusout', validatePasswordValue);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePasswordSight);
