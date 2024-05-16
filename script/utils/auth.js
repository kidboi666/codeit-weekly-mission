import { emailPattern } from './regx.js';
export const $eyes = document.querySelector('#password_eyes');
export const $emailInput = document.querySelector('#email');
export const $pwInput = document.querySelector('#password');
export const $pwVerifyInput = document.querySelector('#password_repeat');
export const $emailAlertDiv = document.querySelector('#wrong_email_message');
export const $pwAlertDiv = document.querySelector('#wrong_password_message');
export const $pwVerifyAlertDiv = document.querySelector('#wrong_password_repeat_message');
export const $form = document.querySelector('#form');

export const mockUserInfo = {
  email: 'test@codeit.kr',
  pw: 'codeit101',
};

export const signupPageStatus = {
  duplicateAccountState: false,
  pwFormState: false,
  comparePwState: false,
};

export const message = {
  inputEmail: '이메일을 입력해주세요.',
  inputPw: '비밀번호를 입력해주세요.',
  wrongEmail: '이메일을 확인해주세요.',
  wrongPw: '비밀번호를 확인해주세요.',
  wrongPwForm: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  wrongEmailForm: '올바른 이메일 주소가 아닙니다.',
  duplicateEmail: '이미 사용 중인 이메일입니다.',
  diffrentPw: '비밀번호가 일치하지 않아요.',
};

// 경고메시지 그리기
export const drawAlert = (messageBox, inputBorder, chosenMessage) => {
  messageBox.textContent = chosenMessage;
  inputBorder.className = 'wrong_input_border';
};

// 경고메시지 지우기
export const eraseAlert = (messageBox, border) => {
  messageBox.textContent = '';
  border.classList.remove('wrong_input_border');
};

// 비밀번호 표시 여부
export const handlePwSight = () => {
  const eyeOff = '../images/icon_svg/eye-off.svg';
  const eyeOn = '../images/icon_svg/eye-on.svg';
  $eyes.classList.toggle('eyes_offset');
  $pwInput.type === 'password' ? ($eyes.src = eyeOn) : ($eyes.src = eyeOff);
  $pwInput.type === 'password'
    ? (($pwInput.type = 'text'), ($pwVerifyInput.type = 'text'))
    : (($pwInput.type = 'password'), ($pwVerifyInput.type = 'password'));
};

// 이메일 값 여부 && 이메일 양식 검사
export const validateEmailValue = () => {
  const { value: emailValue } = $emailInput;
  if (!emailValue) {
    drawAlert($emailAlertDiv, $emailInput, message.inputEmail);
  } else if (emailValue) {
    eraseAlert($emailAlertDiv, $emailInput);
    emailPattern.test(emailValue) === false
      ? drawAlert($emailAlertDiv, $emailInput, message.wrongEmailForm)
      : eraseAlert($emailAlertDiv, $emailInput);
  }
};

// 비밀번호 값 여부
export const validatePwValue = () => {
  const { value: pwValue } = $pwInput;
  if (!pwValue) {
    drawAlert($pwAlertDiv, $pwInput, message.inputPw);
  } else {
    eraseAlert($pwAlertDiv, $pwInput);
  }
};
