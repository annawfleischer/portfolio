window.addEventListener("load", loadScreen);

function loadScreen() {
  console.log("loadScreen");
  document.querySelector("#ba").addEventListener("click", openDesign);
  document.querySelector("#sic").addEventListener("click", openContent);
  document.querySelector("#ba2").addEventListener("click", openFilm);
  document.querySelector("#sic2").addEventListener("click", openWebsites);
}

function openDesign() {
  console.log("openDesign");
  document.querySelector("#One").classList.add("hidden");
  document.querySelector("#design").classList.remove("hidden");
  document.querySelector("#goback").addEventListener("click", goBack);
}

function openContent() {
  console.log("openContent");
  document.querySelector("#One").classList.add("hidden");
  document.querySelector("#content").classList.remove("hidden");
  document.querySelector("#goback2").addEventListener("click", goBack2);
}

function openFilm() {
  console.log("openFilm");
  document.querySelector("#One").classList.add("hidden");

  document.querySelector("#film").classList.remove("hidden");
  document.querySelector("#goback3").addEventListener("click", goBack3);
}

function openWebsites() {
  console.log("openWebsites");
  document.querySelector("#One").classList.add("hidden");

  document.querySelector("#websites").classList.remove("hidden");
  document.querySelector("#goback4").addEventListener("click", goBack4);
}

function goBack() {
  console.log("goBack");
  document.querySelector("#design").classList.add("hidden");
  document.querySelector("#One").classList.remove("hidden");
}

function goBack2() {
  console.log("goBack");
  document.querySelector("#content").classList.add("hidden");
  document.querySelector("#One").classList.remove("hidden");
}

function goBack3() {
  console.log("goBack");
  document.querySelector("#film").classList.add("hidden");
  document.querySelector("#One").classList.remove("hidden");
}
function goBack4() {
  console.log("goBack");
  document.querySelector("#websites").classList.add("hidden");
  document.querySelector("#One").classList.remove("hidden");
}
