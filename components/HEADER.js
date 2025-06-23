// components/HEADER.js
fetch('./components/HEADER.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('shareBtn');
  if (navigator.share) {
    shareBtn.addEventListener('click', () => {
      navigator.share({
        title: 'Seabound Siblings',
        text: 'Support Jess & Mel in the Atlantic Row 2026!',
        url: window.location.href,
      });
    });
  } else {
    shareBtn.style.display = 'none';
  }
});
