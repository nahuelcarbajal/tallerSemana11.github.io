

function getCharacters(done) {
    const results = fetch("https://apisimpsons.fly.dev/api/personajes?limit=20&page=2");
    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
};



getCharacters(data => {
console.log(data);
data.docs.forEach(personaje => {
    const article = document.createRange().createContextualFragment(/*html*/ `
        <article>
            <div class="img-container">
                <img src="${personaje.Imagen}" alt="Personaje">
            </div>
            <h2>${personaje.Nombre}</h2>
            <p>-${personaje.Genero}</p>
            <p>-${personaje.Estado}</p>
            <p>-${personaje.Ocupacion}</p>
            <p>-${personaje.Historia}</p>
        </article>
    `);
    const main = document.querySelector("main");
    main.append(article);
});
});

function redirigir(ruta){
    window.location.href = ruta;
}