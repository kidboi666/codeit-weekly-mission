export const $eyes = document.querySelector('.password_eyes');
const $form = document.querySelector('.signin_form');
const $passwordInput = document.querySelector('#password');
const $emailInput = document.querySelector('#email');
const test = {
  email: 'test@codeit.kr',
  password: 'codeit101',
};

export const handlePasswordSight = () => {
  if ($passwordInput.type === 'password') {
    $passwordInput.type = 'text';
    $eyes.src = '../images/icon_svg/eye-off.svg';
    $eyes.classList.add('eyes_offset');
  } else if ($passwordInput.type === 'text') {
    $passwordInput.type = 'password';
    $eyes.src = '../images/icon_svg/eye-on.svg';
    $eyes.classList.remove('eyes_offset');
  }
};

/* 경고메시지, 인풋효과 추가 함수 */
const drawWrongMessage = (target, chosenMessage) => {
  const $div = document.createElement('div');
  const message = chosenMessage;
  $div.textContent = message;
  $div.className = 'wrong_input_message';
  target.classList.add('wrong_input_border');
  target.after($div);
};

/* 경고메시지, 인풋효과 제거 함수 */
const eraseWrongMessage = (target) => {
  const $parentTarget = target.parentElement;
  $parentTarget.querySelector('.wrong_input_message')?.remove();
  target.classList.remove('wrong_input_border');
};

/* 이메일 양식 검증 함수 */
const validateEmailForm = (email) => {
  const emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-za-z]{2,4}$/i;
  return emailPattern.test(email) ? true : false;
};

/* (이벤트콜백)인풋 비어있는지 여부 검사 함수 */
const validateInputValue = (event) => {
  const { target } = event;
  const { value, type } = target;
  const message = {
    inputEmail: '이메일을 입력해주세요.',
    inputPassword: '비밀번호를 입력해주세요.',
    wrongEmailForm: '올바른 이메일 주소가 아닙니다.',
  };
  /* 이메일 입력 검증 */
  if (type === 'email') {
    eraseWrongMessage(target); // 경고창 초기화
    if (!value) {
      drawWrongMessage(target, message.inputEmail);
    } else if (value && !validateEmailForm(value)) {
      drawWrongMessage(target, message.wrongEmailForm);
    } else if (value && validateEmailForm(value)) {
      eraseWrongMessage(target);
    }
    /* 패스워드 입력 검증 */
  } else if (type === 'password' || type === 'text') {
    eraseWrongMessage(target);
    if (!value) {
      drawWrongMessage(target, message.inputPassword);
    } else if (value) {
      eraseWrongMessage(target);
    }
  }
};

/* 테스트 계정과 입력값 일치 여부 검증 함수 */
const submitEvent = (event) => {
  const { value: emailValue } = $emailInput;
  const { value: passwordValue } = $passwordInput;
  const message = {
    wrongEmail: '이메일을 확인해주세요.',
    wrongPassword: '비밀번호를 확인해주세요.',
  };
  if (emailValue === test.email && passwordValue === test.password) {
    location.href = '../pages/folder.html';
  } else if (emailValue === test.email && passwordValue !== test.password) {
    eraseWrongMessage($passwordInput);
    drawWrongMessage($passwordInput, message.wrongPassword);
  } else if (emailValue !== test.email && passwordValue === test.password) {
    eraseWrongMessage($emailInput);
    drawWrongMessage($emailInput, message.wrongEmail);
  } else {
    eraseWrongMessage($passwordInput);
    drawWrongMessage($passwordInput, message.wrongPassword);
    eraseWrongMessage($emailInput);
    drawWrongMessage($emailInput, message.wrongEmail);
  }
  event.preventDefault();
};

$form.addEventListener('focusout', validateInputValue);
$form.addEventListener('submit', submitEvent);
$eyes.addEventListener('click', handlePasswordSight);
