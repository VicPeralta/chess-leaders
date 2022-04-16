function changeThemeColor(color) {
  const root = document.querySelector(':root');
  if (color.toLowerCase() === 'blue') {
    root.style.setProperty('--bg-color', 'rgb(67, 105, 178)');
    root.style.setProperty('--primary-color', 'rgb(59, 90, 154)');
    root.style.setProperty('--highlighted-card', 'rgb(69, 99, 159)');
    root.style.setProperty('--alternate-color', 'rgb(68, 103, 172)');
  } else {
    root.style.setProperty('--bg-color', 'rgb(223, 71, 130)');
    root.style.setProperty('--primary-color', 'rgb(251, 81, 146)');
    root.style.setProperty('--highlighted-card', 'rgb(244, 80, 143)');
    root.style.setProperty('--alternate-color', 'rgb(214, 69, 124)');
  }
}

function getThemeFromLocalStorage() {
  const color = window.localStorage.getItem('chessLeaders/theme');
  return !color ? 'Pink' : color;
}

function saveThemeToLocalStorage(color) {
  window.localStorage.setItem('chessLeaders/theme', color);
}

function makeBodyScrollable(flag) {
  const body = document.querySelector('body');
  if (flag) body.style = 'overflow-y:show';
  else body.style = 'overflow-y:hidden';
}

export {
  changeThemeColor as default,
  getThemeFromLocalStorage,
  saveThemeToLocalStorage,
  makeBodyScrollable,
};
