import { emailPattern } from './regx.js';
export const $eyes = document.querySelector('#password_eyes');
export const $emailInput = document.querySelector('#email');
export const $pwInput = document.querySelector('#password');
export const $pwVerifyInput = document.querySelector('#password_repeat');
export const $emailAlertDiv = document.querySelector('#wrong_email_message');
export const $pwAlertDiv = document.querySelector('#wrong_password_message');
export const $pwVerifyAlertDiv = document.querySelector('#wrong_password_repeat_message');
export const $form = document.querySelector('#form');

export const mockUserInformation = {
  email: 'test@codeit.kr',
  password: 'codeit101',
};

export const message = {
  inputEmail: '이메일을 입력해주세요.',
  inputPassword: '비밀번호를 입력해주세요.',
  wrongEmailForm: '올바른 이메일 주소가 아닙니다.',
  wrongEmail: '이메일을 확인해주세요.',
  wrongPassword: '비밀번호를 확인해주세요.',
  duplicateEmail: '이미 사용 중인 이메일입니다.',
  wrongPasswordForm: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  diffrentPassword: '비밀번호가 일치하지 않아요.',
};

export const drawAlert = (messageBox, border, chosenMessage) => {
  messageBox.textContent = chosenMessage;
  border.className = 'wrong_input_border';
};

export const eraseAlert = (messageBox, border) => {
  messageBox.textContent = '';
  border.classList.remove('wrong_input_border');
};

export const handlePasswordSight = () => {
  const eyeOff = '../images/icon_svg/eye-off.svg';
  const eyeOn = '../images/icon_svg/eye-on.svg';
  if ($pwInput.type === 'password') {
    $pwInput.type = 'text';
    $eyes.src = eyeOn;
    $eyes.classList.add('eyes_offset');
    $pwVerifyInput.type = 'text';
  } else if ($pwInput.type === 'text') {
    $pwInput.type = 'password';
    $eyes.src = eyeOff;
    $eyes.classList.remove('eyes_offset');
    $pwVerifyInput.type = 'password';
  }
  // $passwordInput.type === 'password' ? ($passwordInput.type = 'text') : ($passwordInput.type = 'password');
  // $passwordInput.type === 'password' ? ($eyes.src = eyeOff) : ($eyes.src = eyeOn);
  // $eyes.classList.toggle('eyes_offset');
};

export const validateEmailValue = (event) => {
  const { value } = event.target;
  if (!value) {
    drawAlert($emailAlertDiv, $emailInput, message.inputEmail);
  } else if (value && !emailPattern.test(value)) {
    drawAlert($emailAlertDiv, $emailInput, message.wrongEmailForm);
  } else if (value && emailPattern.test(value)) {
    eraseAlert($emailAlertDiv, $emailInput);
  }
};

export const validatePasswordValue = (event) => {
  const { value } = event.target;
  if (!value) {
    drawAlert($pwAlertDiv, $pwInput, message.inputPassword);
  } else if (value) {
    eraseAlert($pwAlertDiv, $pwInput);
  }
};
