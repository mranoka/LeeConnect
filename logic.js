let fotos = ['images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg', 'images/foto4.jpg'];

let container = document.getElementById('foto-display');
let foto = document.createElement('img');

// display fotos in a slide show
let slider = () => {
    let rand = Math.floor(Math.random() * 3 + 1);
    foto.classList.add('gal-foto');
    foto.style.marginLeft = '18px';
    foto.style.height = '450';
    foto.style.borderRadius = '20px';
    foto.width = '450';
    foto.src = fotos[rand];
    container.appendChild(foto);
}
slider()
setInterval(slider, 3000);