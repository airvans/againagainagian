import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import confetti from 'canvas-confetti'

let interval = null;
let cap = null;
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
window.checkmark = checkmark;



muteagent.addEventListener("change", (e) => {
   audio.muted = !e.target.checked
})

function dotheshuffle() {
  const name = "inspector";
  const text = "found a probable feature 🎉";

  if (!popupset.has(name)) {
    addachievement(name);
    showachievement(name, text, "assets/inspector.png");
  }
}

function Randomdraw() {
  const name = "patience or Lucky";
  const text = "you waited or were lucky to get this";

  if (!popupset.has(name)) {
    addachievement(name);
    showachievement(name, text, "assets/lucky.png");
  }
}

function checkmark() {
  const name = "Rule changer";
  const text = "you like to break rules huh";

  if (!popupset.has(name)) {
    addachievement(name);
    showachievement(name, text, "assets/changer.png");
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
    addachievement(name);
    showachievement(name, text, "assets/guessright.png");
  }
}





function showachievement(name, text, img) {

  Toastify({
    text:`${name}\n`,
    duration: 4000,
    stopOnFocus: true,
    className:`text-xs p-40 before:right-3 before:content-[''] before:size-9 before:rounded-md before:absolute after:text-gray-800 after:text-sm after:font-light`,
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
  playsound("./src/assets/1gift-confetti-447240.mp3")
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

    // Add achievement counter
    const counter = document.createElement("div");
    counter.style.position = "fixed";
    counter.style.top = "50%";
    counter.style.left = "50%";
    counter.style.transform = "translate(-50%, -50%)";
    counter.style.zIndex = "10000";
    counter.style.fontSize = "48px";
    counter.style.fontWeight = "bold";
    counter.style.color = "white";
    counter.style.fontFamily = "Arial, sans-serif";
    
    const currentCount = popupset.size;
    const maxCount = currentCount < 4 ? 3 : currentCount;
    counter.textContent = `${currentCount}/${maxCount}`;
    
    document.body.appendChild(counter);

    interval =setTimeout(() => {
      document.body.removeChild(back);
      document.body.removeChild(counter);
    },4000);
}

function addachievement(name) {
  popupset.add(name);
  localStorage.setItem("popups", JSON.stringify([...popupset]));
  overachiever();
}

function overachiever() {

  if (popupset.size !== 4) return;

  const timeout = setTimeout(()=>{
     const finalname = "overachiever";
     const finaltext = "The end doesnt detere you";
     addachievement(finalname);
     showachievement(finalname, finaltext, "assets/overachiever.png");
       
  }, 5000)
  
}

function playsound(src) {

   //if (muteagent.checked == false) return;

   //clearTimeout(cap);

   audio.src = src;
   audio.play();

  //  cap = setTimeout(() => {
  //    audio.pause();
  //    audio.currentTime = 0;
  //  }, 3000);

}