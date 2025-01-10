// Can I have some burger

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var menuItems = document.querySelectorAll('#close-menu li');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

menuItems.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        if (burgerMenu.classList.contains("close")) {
            burgerMenu.classList.remove("close");
            overlay.classList.remove("overlay");
            console.log('Classe overlay:', overlay.classList.contains('overlay'));
        }
    });
});

// End burger


document.querySelectorAll('.read-more').forEach(function (button) {
    button.addEventListener('click', function () {
        const content = this.previousElementSibling;
        const chevron = this.querySelector('i');
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'flex' : 'none';
        if (this.textContent.trim().includes("Lire Plus")) {
            this.innerHTML = 'Lire Moins <i class="fa-solid fa-chevron-up"></i>';
        } else {
            this.innerHTML = 'Lire Plus <i class="fa-solid fa-chevron-down"></i>';
        }
    });
});


// start Form

document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.getElementById('start');

    // Vérifier si l'élément principal existe
    if (dateInput) {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        dateInput.value = formattedDate;
        dateInput.min = formattedDate;
    }

    const checkbox = document.getElementById('different-address-checkbox');
    const additionalFields = document.getElementById('additional-address-fields');

    // Vérifier si les éléments nécessaires pour le checkbox existent
    if (checkbox && additionalFields) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                additionalFields.style.display = 'block'; // Affiche les champs
            } else {
                additionalFields.style.display = 'none'; // Masque les champs
            }
        });
    }
});


// End Form



// Start modal

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Vérifier si le formulaire existe
    if (form) {
        const handleSubmit = (event) => {
            event.preventDefault();
            const myForm = event.target;
            const formData = new FormData(myForm);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => {
                    alert("Votre message a bien été envoyé, merci!");
                    myForm.reset();
                })
                .catch((error) => alert(error));
        };

        // Ajouter l'événement uniquement si le formulaire existe
        form.addEventListener('submit', handleSubmit);
    }
});


// End modal