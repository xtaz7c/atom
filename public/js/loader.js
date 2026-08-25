// js/loader.js
const preloader = document.getElementById("preloader");
const content = document.getElementById("content");

const MIN_TIME = 400;
const MAX_TIME = 3000;

let done = false;
const start = Date.now();

function hideLoader() {
   if (done) return;
   done = true;

   preloader.classList.add("hide");
   content.classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
   const elapsed = Date.now() - start;
   const delay = Math.max(MIN_TIME - elapsed, 0);
   setTimeout(hideLoader, delay);
});

setTimeout(hideLoader, MAX_TIME);
