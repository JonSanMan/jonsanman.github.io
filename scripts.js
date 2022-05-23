"use strict";

let banner;

document.addEventListener("DOMContentLoaded", main);
window.addEventListener("scroll", checkypos);

function stickbanner() {
  banner.style.fontSize = "1.618em";
  banner.classList.add("sticky");
}

function unstickbanner() {
  banner.style.fontSize = "6.472em";
  banner.classList.remove("sticky");
}

function checkypos() {
  if (window.pageYOffset > banner.offsetTop) {
    stickbanner();
  } else {
    unstickbanner();
  }
}

function main() {
  banner = document.getElementById("banner");
}