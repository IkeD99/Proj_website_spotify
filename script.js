document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        {name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg'},
        {name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg'},
        {name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
        {name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg'},
        {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg'}
    ];
    
    const albumData = [
        {name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg'},
        {name: 'Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
        {name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg'},
        {name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg'},
        {name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg'},
        {name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg'}
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumGrid = document.querySelector('.albums-grid');

    artistData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artist</p>
        `;
        artistGrid.appendChild(artistCard);
    });

    albumData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');
        albumCard.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `;
        albumGrid.appendChild(albumCard);
    });
});