$(function () {

    let menuSentinel = 0;
    $('#main-header2').hide(); // hide menu when page loads
    $('#ham-menu').on('click', () => {
        $('#main-header2').show();
        if (menuSentinel === 0) {
            menuSentinel = 1;
            $('#main-header2').show();
        } else if (menuSentinel === 1) {
            menuSentinel = 0;
            $('#main-header2').hide();
        }

    })

    let fotos = ['images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg', 'images/foto4.jpg'];

    let container = document.getElementById('foto-display');
    let foto = document.createElement('img');

    // display fotos in a slide show
    let slider = () => {
        let rand = Math.floor(Math.random() * 3 + 1);
        foto.classList.add('gal-foto');
        foto.style.height = '450';
        foto.style.width = '350px';
        foto.style.borderRadius = '20px';
        foto.width = '450';
        foto.src = fotos[rand];
        container.appendChild(foto);
    }
    slider()
    setInterval(slider, 3000);
})




