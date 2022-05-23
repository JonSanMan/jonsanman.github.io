"use strict";

let banner;

document.addEventListener("DOMContentLoaded", setdomvars);
window.addEventListener("scroll", checkypos);

function checkypos() {
  if (window.pageYOffset > (visualViewport.height * 0.35)) {
    banner.classList.add("sticky");
  } else {
    banner.classList.remove("sticky");
  }
}

function setdomvars() {
  banner = document.getElementById("banner");
}