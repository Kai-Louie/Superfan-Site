function play1() {
  document.getElementById("song1").play();
  document.getElementById("song2").pause();
  video.pause();
  video.currentTime = 0;
}
function play2() {
  document.getElementById("song2").play();
  document.getElementById("song1").pause();
  video.pause();
  video.currentTime = 0;
}
function nplay1() {
  document.getElementById("song1").play();
  document.getElementById("song2").pause();
  nvideo.pause();
  nvideo.currentTime = 0;
}
function nplay2() {
  document.getElementById("song2").play();
  document.getElementById("song1").pause();
  nvideo.pause();
  nvideo.currentTime = 0;
}
function dance() {
  document.getElementById("video");
  video.pause();
  video.currentTime = 0;
  video.play();
  document.getElementById("song1").pause();
  document.getElementById("song2").pause();
}
function spin() {
  document.getElementById("rice").classList.add("rotate");
  document.getElementById("rice").classList.add("nclick");
  document.getElementById("rice").classList.remove("clickable");
  setTimeout(spin2, 4000);
}
function spin2() {
  document.getElementById("rice").classList.remove("rotate");
  document.getElementById("rice").classList.remove("nclick");
  document.getElementById("rice").classList.add("clickable");
}
function nspin() {
  document.getElementById("nrice").classList.add("rotate");
  document.getElementById("nrice").classList.add("nclick");
  document.getElementById("rice").classList.add("clickable");
  setTimeout(nspin2, 4000);
}
function nspin2() {
  document.getElementById("nrice").classList.remove("rotate");
  document.getElementById("nrice").classList.remove("nclick");
  document.getElementById("rice").classList.remove("clickable");
}
function ndance() {
  document.getElementById("nvideo");
  nvideo.pause();
  nvideo.currentTime = 0;
  nvideo.play();
  document.getElementById("song1").pause();
  document.getElementById("song2").pause();
}

function woah() {
  document.getElementById("hs1").src = "images/headshot2.png";
  document.getElementById("audio1").play();
  setTimeout(woah2, 2000);
}
function woah2() {
  document.getElementById("hs1").src = "images/headshot1.png";
}
function nwoah() {
  document.getElementById("nhs1").src = "images/headshot2.png";
  document.getElementById("audio1").play();
  setTimeout(nwoah2, 2000);
}
function nwoah2() {
  document.getElementById("nhs1").src = "images/headshot1.png";
}
