function incrementarLikes() {
    const contenedor = document.querySelector("#linn");
    const textoLikes = contenedor.querySelector("#bot");
    let likesActuales = parseInt(textoLikes.innerText.split(" ")[0]);
    likesActuales++;

    textoLikes.innerText = ` ${likesActuales} like(s)`;
}

function incrementarLikes2() {
    const contenedor = document.querySelector("#lina");
    const textoLikes = contenedor.querySelector("#comic");
    let likesActuales = parseInt(textoLikes.innerText.split(" ")[0]);
    likesActuales++;

    textoLikes.innerText = ` ${likesActuales} like(s)`;
}

function incrementarLikes3() {
    const contenedor = document.querySelector("#mateo");
    const textoLikes = contenedor.querySelector("#album");
    let likesActuales = parseInt(textoLikes.innerText.split(" ")[0]);
    likesActuales++;

    textoLikes.innerText = ` ${likesActuales} like(s)`;
}