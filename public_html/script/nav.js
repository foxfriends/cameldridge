let prev = 0;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  const current = window.pageYOffset;
  if(current > prev) {
    nav.classList.add('hidden');
  } else if(current < prev){
    nav.classList.remove('hidden');
  }
  prev = current;
});
