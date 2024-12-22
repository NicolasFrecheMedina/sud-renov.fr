document.querySelectorAll('.read-more').forEach(function(button) {
    button.addEventListener('click', function() {
        const content = this.previousElementSibling; // L'élément à afficher/masquer
        const chevron = this.querySelector('i'); // Le chevron à faire pivoter

        // Toggle de l'affichage du contenu
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'flex' : 'none';

        // Mise à jour du texte et du chevron
        if (this.textContent.trim().includes("Lire Plus")) {
            this.innerHTML = 'Lire Moins <i class="fa-solid fa-chevron-up"></i>';
        } else {
            this.innerHTML = 'Lire Plus <i class="fa-solid fa-chevron-down"></i>';
        }
    });
});

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     const missionBackground = document.querySelector('.mission-background');
  
//     // Distance avant que l'effet ne démarre (par exemple, 200px)
//     const startScroll = 270;
  
//     if (scrollPosition > startScroll) {
//       // Appliquer l'effet parallaxe après avoir scrollé 200px
//       const adjustedScroll = scrollPosition - startScroll;
//       missionBackground.style.transform = `translateY(${-adjustedScroll * 0.5}px)`;
//     } else {
//       // Réinitialiser la position avant que l'effet ne démarre
//       missionBackground.style.transform = 'translateY(0)';
//     }
//   });

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     const introSection = document.querySelector('.intro');
//     const missionSection = document.querySelector('.mission-background');
  
//     // Point de déclenchement pour fixer la section intro
//     const fixedPoint = 300;
  
//     if (scrollPosition >= fixedPoint) {
//       introSection.classList.add('fixed');
//       const missionScrollStart = scrollPosition - fixedPoint;
  
//       // Commencer l'effet parallaxe pour la mission-background
//       missionSection.style.transform = `translateY(${-missionScrollStart * 0.5}px)`;
//     } else {
//       introSection.classList.remove('fixed');
//       missionSection.style.transform = 'translateY(0)';
//     }
//   });
  