document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.login-form').classList.remove('showmenu');
  
    document.querySelector('#menu-icon').addEventListener('click', () => {
      document.querySelector('#nav-pages').classList.toggle('showmenu');
    });
  });



document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.login-form').classList.remove('showlogin');
  
  document.querySelector('#login-icon').addEventListener('click', () => {
    document.querySelector('.login-form').classList.toggle('showlogin');
  });
});