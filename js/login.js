const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginSpan = document.querySelector('.login-form__title');

const USERNAME_KEY = 'username';
const ACTIVE_CLASSNAME = 'active';

function onLoginSubmit(info) {
  info.preventDefault();
  const username = loginInput.value;
  loginSpan.innerText = `반갑습니다! ${username}님!\n오늘 하루도 화이팅!`;
  loginForm.classList.toggle(ACTIVE_CLASSNAME);
  loginSpan.classList.toggle(ACTIVE_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(ACTIVE_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  loginSpan.classList.remove(ACTIVE_CLASSNAME);
  loginForm.classList.add(ACTIVE_CLASSNAME);
  loginSpan.innerText = `반갑습니다! ${savedUsername}님!\n오늘 하루도 화이팅!`;
}
