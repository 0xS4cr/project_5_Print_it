// Définition des constantes
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//selection element html
let image = document.querySelector(".banner-img"); //Cette commande sélectionne le premier élément de la page qui correspond au sélecteur CSS ".banner-img". Elle est utilisée pour sélectionner l'élément HTML qui affiche l'image .
let dot = document.querySelectorAll (".dot"); //Cette commande sélectionne tous les éléments de la page qui correspondent au sélecteur CSS ".dot". Elle est utilisée pour sélectionner tous les points du carousel qui indiquent les différentes images.
let tagLine = document.querySelector ("#banner>p") //Cette commande sélectionne le premier élément de la page qui correspond au sélecteur CSS "#banner>p". Elle est utilisée pour sélectionner l'élément HTML qui affiche la ligne de texte associée à chaque images.
let indice = 0;

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(){ //Cette commande ajoute un gestionnaire d'événements de clic à un élément HTML spécifié. Lorsque l'élément est cliqué, la fonction spécifiée est exécutée.
	// Sélection du point actif
	dot[indice].classList.remove("dot_selected"); //Cette commande supprime la classe "dot_selected" d'un élément HTML. Elle est utilisée pour désélectionner le point actif du carousel.
	indice--;
	if (indice < 0) 
		indice = slides.length - 1;
	dot[indice].classList.add("dot_selected"); //Cette commande ajoute la classe "dot_selected" à un élément HTML. Elle est utilisée pour sélectionner et mettre en surbrillance le point actif du carousel.

	image.src = "./assets/images/slideshow/" + slides[indice].image; // Cette commande met à jour l'attribut "src" de l'élément HTML représentant l'image du carousel. Elle utilise la propriété "image" de l'objet correspondant à l'indice actuel pour construire le chemin de l'image.
	tagLine.innerHTML = slides[indice].tagLine; //Cette commande met à jour le contenu HTML de l'élément représentant la ligne de texte du carousel. Elle utilise la propriété "tagLine" de l'objet correspondant à l'indice actuel.
});

let arrowRight = document.querySelector(".arrow_right");
//ajoutEventListener
arrowRight.addEventListener("click", function(){
	//selection point actif
	dot[indice].classList.remove("dot_selected");
	indice++;
	if (indice > slides.length - 1) 
		indice = 0;
	dot[indice].classList.add("dot_selected");


	image.src = "./assets/images/slideshow/" + slides[indice].image;
	tagLine.innerHTML = slides[indice].tagLine;
	

});