const lista = document.getElementById("listaPers")
const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=20";
fetch(url)
.then(res => res.json())
.then(data => render(data));

function render(data){
    for (quotes of data) {
        const frase = document.createElement("li");
        frase.textContent = `${quotes.character}: "${quotes.quote}"`;
        lista.appendChild(frase)
    }
}

