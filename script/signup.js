import { $password, $passwordRe, $eyes } from './signin.js'; // 패스워드 인풋창이랑 패스워드 재입력 인풋창
import { handlePasswordSight } from './signin.js';

const validatePassword = (e) => {
  const $wrongMessage = document.getElementById('wrong_message'); // 비밀번호가 틀렸습니다 메세지 div
  e.preventDefault();
  if ($passwordRe.value) {
    if ($passwordRe.value !== $password.value) {
      $wrongMessage.classList.remove('hidden');
      $passwordRe.className = 'wrong_password';
    } else {
      $wrongMessage.className = 'hidden';
      $passwordRe.classList.remove('wrong_password');
    }
  }
};

$passwordRe.addEventListener('change', validatePassword);
$eyes.addEventListener('click', handlePasswordSight);
