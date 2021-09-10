const $gifArea = $("#gif-Area");

console.log("Let's get this party started!");

async function getRandomGiphy() {
  const res = await axios.get(
    "https://api.giphy.com/v1/gifs/search?q=random&api_key=sBssBbRxJoXjVFF2E3cKX7pLctv9SB19"
  );
  const img = document.querySelector("#term");
  img.src = res.data.data[10].images.original.url;
  console.log(img.src);
}

async function getGiphyByTerm(term) {
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=sBssBbRxJoXjVFF2E3cKX7pLctv9SB19`
  );
  console.log(res.data.data);
  let index = res.data.data.length;
  console.log(index);
  let randomIdx = Math.floor(Math.random() * index);
  let url = res.data.data[randomIdx].images.original.url;
  console.log(res.data.data[randomIdx]);
  console.log(url);
  console.log(randomIdx);
  // let $newGif = $("<img>", {
  //   src: url,
  // });
  let $newGif = $('<img src =' + url + '>', {
    class: "img-fluid image-wrapper w-100 h-50" 

  });
  let $newColumn = $('<div>', {
    class: "col-md-4"
  });
  console.log($newGif);
  $newColumn.append($newGif);
  console.log($newColumn);
  $gifArea.append($newColumn);

}

const form = document.querySelector("#searchform");
form.addEventListener("submit", function (e) {
  const input = document.querySelector("#search");
  e.preventDefault();
  getGiphyByTerm(input.value);
  input.value = "";
});
$("#remove").on("click", function () {
  $gifArea.empty();
});
