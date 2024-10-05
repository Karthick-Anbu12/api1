async function main() {
  try {
    let anime = await fetch("https://api.jikan.moe/v4/anime")
    let ele = await anime.json();
   
    console.log(ele)
    let nav=document.createElement("div")
    nav.innerHTML=`<nav class="navbar container text-center">
  <div class="container-fluid text-center">
    <div class="navbar-brand text-center" href="#">
      <img class="logo rounded" src="manga.png">
      Anime Gallary
    </div>
  </div>
</nav>`;
    container = document.createElement("div")
    container.className = "cont container";
    for (i = 0; i < ele.data.length; i++) {
      box = document.createElement("div");
      box.className="box"
      box.innerHTML = `<div class="card text-center border border-dark rounded m-1 p-1" >
      <div class="card-title fs-6">${ele.data[i].title}</div>
       <img src="${ele.data[i].images.jpg.image_url}" class="card-img-top p-2" >
      <div class="card-body">
       <p class="card-text m-0">No.of Episodes:${ele.data[i].episodes}</p>
       <p class="card-text m-0">Ranked:${ele.data[i].rank}</p>
        <a href="${ele.data[i].trailer.embed_url}" class="btn btn-primary">Trailer</a>
           </div>
           </div>`;
      container.appendChild(box)
    }
    document.body.appendChild(nav)
    document.body.appendChild(container)
  }
  catch (error) {
    console.log(error)

  }
}
main()