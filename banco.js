document.addEventListener("DOMContentLoaded", function() {
    const accordion = document.querySelector('.dropbox');
    const panels = accordion.querySelectorAll('.panel');
    const titles = accordion.querySelectorAll('p');
  
    titles.forEach((title, index) => {
      title.addEventListener('click', () => {
        panels[index].classList.toggle('active');
        title.classList.toggle('active');
      });
    });
  });