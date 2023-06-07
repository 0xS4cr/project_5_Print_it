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
let image = document.querySelector(".banner-img");
let dot = document.querySelectorAll (".dot");
let tagLine = document.querySelector ("#banner>p")
let indice = 0;

let arrowLeft = document.querySelector(".arrow_left");
//ajout event listener
arrowLeft.addEventListener("click", function(){
	
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