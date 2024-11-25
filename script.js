const apiUrl = "https://friends-episodes-api.vercel.app/seasons/1/episodes";

document.addEventListener("DOMContentLoaded", () => {
const container = document.getElementById("episodes");

fetch(apiUrl)
    .then((response) => {
if (!response.ok) {
        throw new Error("Error al obtener los datos");
    }
    return response.json();
    })
    .then((data) => {
      container.innerHTML = ""; // Limpiar el contenedor
    data.forEach((episode) => {
        const episodeDiv = document.createElement("div");
        episodeDiv.classList.add("episode");

        episodeDiv.innerHTML = `
        <h2>${episode.title}</h2>
    <p><strong>Sinopsis:</strong> ${episode.synopsis}</p>
    <p><strong>Enlace a Netflix:</strong> <a href="${episode.netflix_url}" target="_blank">Ver en Netflix</a></p>
        `;
        container.appendChild(episodeDiv);
    });
    })
    .catch((error) => {
    container.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
