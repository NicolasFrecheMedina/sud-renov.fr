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