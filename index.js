const refreshButton = document.querySelector(".refresh");
const endpoint = 'https://ghibliapi.herokuapp.com/films';

refreshButton.addEventListener("click", () => {
  getData(endpoint);
});

const getApi = function (length) {
  return Math.floor(Math.random() * length);
}
const getData = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    const film = data[getApi(data.length)];
    const output = `<h1>${film.title}</h1>
    <h2>${film.original_title}</h2>
    <img src="${film.image}" alt="Images of ${film.title}">
    <p>${film.description}</p>
    <p><b>Producer:&nbsp</b>${film.producer}</p>
    <p><b>Director:&nbsp</b>${film.director}</p>
    <p><a href="${film.url}">Locations</a></p>`
    document.querySelector('.api').innerHTML = output;
  } 

  catch (error) {
    console.error(error);
  }
}
