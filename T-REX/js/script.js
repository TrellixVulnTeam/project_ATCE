document.addEventListener('DOMContentLoaded', () => {
  const dino = document.querySelector('.dino');
  function control(e) {
    if (e.keyCode === 32) {
      console.log('passed');
    }
  }
  document.addEventListener('keyup', control);
});