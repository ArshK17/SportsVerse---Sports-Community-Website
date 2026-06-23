function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  if (!e.target.closest('nav') && !e.target.closest('.mobile-menu')) {
    menu.classList.remove('open');
  }
});
