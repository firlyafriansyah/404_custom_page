document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.redirect-counter');
  let countNumber = 4;
  const countFunction = setInterval(() => {
    if (countNumber === 0) {
      clearInterval(countFunction)
      counter.innerHTML = 'Redirecting . . .'
      setTimeout(() => {
        window.location.reload(window.location.host);
      }, 1000);
    } else {
      counter.innerHTML = countNumber
      countNumber--
    }
  }, 1000);
})