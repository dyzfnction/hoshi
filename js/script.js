
/* NAVIGATIONS */

function accueil(){
	location.href = '../site/index.html'; /* Lien vers la page d'accueil. */
}
function scolarite(){
    location.href = '../site/scolarite.html'; /* Lien vers la page de parcours scolaire */
}
function projets(){
	location.href = '../site/projets.html'; /* Lien vers la page de projets. */
}
function projetsco(){
	location.href = '../site/projetsco.html'; /* Lien vers la page de projets scolaires. */
}
function projetspro(){
	location.href = '../site/projetspro.html'; /* Lien vers la page de projets professionnels. */
}
function passion(){
	location.href = '../site/passion.html'; /* Lien vers la page de passions. */
}

/* TELECHARGEMENT DU CV */





// Fonction pour télécharger le fichier
function telechargerFichier() {
    // On simule un clic sur le lien caché pour télécharger le fichier
    document.getElementById('downloadLink').click();
}

// Ajouter un événement au bouton de téléchargement
document.getElementById('btnTelecharger').addEventListener('click', telechargerFichier);




function setupBurgerMenu() {
	const burger = document.querySelector('.burger');
	const navMenu = document.querySelector('.nav-menu');
  
	if (!burger || !navMenu) return;
  
	burger.addEventListener('click', () => {
	  burger.classList.toggle('open');
	  navMenu.classList.toggle('open');
	});
  
	// Fermer le menu si on clique sur un lien
	const navLinks = navMenu.querySelectorAll('a');
	navLinks.forEach(link => {
	  link.addEventListener('click', () => {
		burger.classList.remove('open');
		navMenu.classList.remove('open');
	  });
	});
  }
  
  // Appel de la fonction une fois le DOM chargé
  document.addEventListener('DOMContentLoaded', setupBurgerMenu);
  
  

  document.addEventListener("DOMContentLoaded", function () {
	const toggle = document.getElementById("menu-toggle");
	const menu = document.getElementById("menu-nav");
  
	toggle.addEventListener("click", function () {
	  menu.classList.toggle("active");
	});
  
	// Optionnel : fermer si on clique à l’extérieur
	document.addEventListener("click", function (e) {
	  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
		menu.classList.remove("active");
	  }
	});
  });
  
  
  
  