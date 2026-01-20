import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import confetti from 'canvas-confetti'

let interval = null;
const audio = document.getElementById("audio")
const muteagent = document.getElementById("slidecheck")


const checkedpopup = document
  .getElementById("item-achievement")
  ?.querySelector("input");

const popups = localStorage.getItem("popups");

const popupset = new Set(popups ? JSON.parse(popups) : []);

if (checkedpopup) {
  checkedpopup.addEventListener("click", () => {
    if (checkedpopup.checked) checkmark();
  });
}

window.dotheshuffle = dotheshuffle;
window.doacheck = doacheck;
window.Randomdraw = Randomdraw;


muteagent.addEventListener("change", (e) => {
   audio.muted = !e.target.checked
})

function dotheshuffle() {
  const name = "inspector";
  const text = "found a probable feature 🎉";

  if (!popupset.has(name)) {
    showachievement(name, text, "assets/achievements/inspector.png");
    addachievement(name);
  }
}

function Randomdraw() {
  const name = "patience or Lucky";
  const text = "you waited or where lucky to get this";

  if (!popupset.has(name)) {
    showachievement(name, text, "assets/achievements/patience.png");
    addachievement(name);
  }
}

function checkmark() {
  const name = "Rule changer";
  const text = "guess you like to break rules huh";

  if (!popupset.has(name)) {
    showachievement(name, text, "assets/achievements/rulechanger.png");
    addachievement(name);
  }
}

function doacheck() {
  const input = document
    .querySelector("#name-checker input")
    .value.toLowerCase()
    .trim()
    .replaceAll(" ", "");
  const name = "Guess your right";
  const text = "You know your stuff";

  if (input == "champagnecoast" && !popupset.has(name)) {
    showachievement(name, text, "assets/achievements/namechecker.png");
    addachievement(name);
  }
}



showachievement("Testing", "Congratulation you did right", "assets/skyman-sit.svg")

function showachievement(name, text, img) {

  Toastify({
    text:`${name}\n`,
    duration: 3000,
    stopOnFocus: true,
    className:`text-xs p-40 before:right-3 before:content-[''] before:size-9 before:rounded-md before:border before:absolute after:text-gray-800 after:text-sm after:font-light`,
    style:{
      background: "white",
      width: "350px",
      height: "60px",
      color: "gray",
    }
  }).showToast();

  const toast = document.querySelector('.toastify');
  if (toast) {
    toast.style.setProperty('--toast-text', `'${text}'`);
     if (img) {
      toast.style.setProperty('--toast-image', `url('${img}')`);
    }
  }

  blackbackground();
  triggerConfetti();
}

function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 }
  });
}

function blackbackground() {

    clearInterval(interval);

    const back = document.createElement("div")
    back.style.position = "fixed";
    back.style.top = "0";
    back.style.left = "0";
    back.style.width = "100%";
    back.style.height = "100%";
    back.style.backgroundColor = "black";
    back.style.zIndex = "9999";
    back.style.opacity = "0.3";
    document.body.appendChild(back);

    interval =setTimeout(() => {
      document.body.removeChild(back);
    },3000);
}

function addachievement(name) {
  popupset.add(name);
  localStorage.setItem("popups", JSON.stringify([...popupset]));
  overachiever();
}

function overachiever() {
  if (popupset.size == 4) {
    const finalname = "overachiever";
    const finaltext = "The end doesnt detere you";
    showachievement(finalname, finaltext, "assets/achievements/master.png");
    addachievement(finalname);
  }
}

function playsound(src) {
   audio.src = src;
   audio.play();
}