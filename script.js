const body = document.querySelector("body");
body.style.backgroundColor = 'darkblue';


const h1 = document.querySelector('h1');
h1.style.textDecoration = 'underline';


const firstParagraph = document.querySelector('.introduction');
firstParagraph.style.textAlign = 'center';

const images = document.getElementsByClassName('pokemon_images');

for(let i=0; i < images.length; i++) {
images[i].style.border = '5px dotted yellow';
}


const names = document.querySelectorAll('.pokemon_names');

for(let i=0; i < names.length; i++) {
    names[i].style.color = 'yellow';
}


const footer = document.querySelector('footer');
footer.style.textDecoration = 'underline overline';



