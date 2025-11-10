// Plantilla para cada canción:
"use strict";



let card_song = `<article class="song-card">
    <div class="cover">
        <img src="https://i.ytimg.com/vi/V9PVRfjEBTI/maxresdefault.jpg"
            alt="Portada: Billie Eilish - BIRDS OF A FEATHER (Official Music Video)">
        <span class="badge">3:51:00</span>
    </div>
    <div class="content">
        <h2 class="title">Billie Eilish - BIRDS OF A FEATHER (Official Music Video)</h2>
        <div class="meta">558,329,099 vistas</div>
        <div class="footer">
            <span class="channel">Canal: <a href="https://www.youtube.com/channel/UCDGmojLIoWpXok597xYo8cg"
                    target="_blank" rel="noopener noreferrer">Billie Eilish</a></span>
        </div>
    </div>
</article>`

// Formateador de números
let formatter = new Intl.NumberFormat('en-US');

// Ejemplo de uso:
// let views_witoutformat = 2536628;


// let views_withformat= formatter.format(views_witoutformat); 
// Valor de views_withformat: "2,536,628"

let renderSongs = async () => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Youtube/only_songs.json");

        let container = document.getElementById("songs-grid");

        let canciones = response.slice(0, 11);
        let formatter = new Intl.NumberFormat('en-US'); 
        canciones.forEach(cancion => {
            
            let mostrarCancion = `
           <article class="song-card">
    <div class="cover">
        <img src="${cancion.thumbnail}"
            alt="Portada: ${cancion.title}">
        <span class="badge">${cancion.duration_string}/span>
    </div>
    <div class="content">
        <h2 class="title">${cancion.title}</h2>
        <div class="meta">${formatter.format(cancion.channel_follower_count)}</div>
        <div class="footer">
            <span class="channel">Canal: <a href="${cancion.channel_url}"
                    target="_blank" rel="noopener noreferrer">${cancion.channel}</a></span>
        </div>
    </div>
</article>`
            container.innerHTML += mostrarCancion; 
        })

        

    } catch (error) {
        alert(`No se pudo cargar las categorias ${error.message}`);

    }
}

(() => {
    renderSongs(); 
})();