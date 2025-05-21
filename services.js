document.addEventListener('DOMContentLoaded', () => {
    const rotateButtons = document.querySelectorAll('.rotate-btn');
    const servicesWrapper = document.querySelector('.services__wrapper');
  
    if (rotateButtons && servicesWrapper) {
      rotateButtons.forEach(button => {
        button.addEventListener('click', () => {
          const isRotating = servicesWrapper.classList.toggle('rotating');
          rotateButtons.forEach(btn => {
            btn.textContent = isRotating ? 'Ndalo' : 'Filloni';
            btn.classList.toggle('active', isRotating);
          });
        });
      });
    } else {
      console.error('Required elements not found');
    }
  });