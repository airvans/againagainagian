import { funfact, intervene, KeyActions , TVController , Hands} from "./!extorters.js";

let temp = null;
let intervention = null;
const helper_object = document.getElementById("helper-object")
const muteagent = document.getElementById("slidecheck")
const home = document.getElementById("section-home")
const animationtracker = home.getAnimations()
const tvimage = document.getElementById("tvimage")
const tvsection = document.getElementById("section-tv")
const channellist = ["http://127.0.0.1:5500/thirdtry.html", "assets/history.gif", "assets/chred.gif"]
const beautifulhands = document.getElementById("myhand")
const audio = document.getElementById("audio")
const makesomenoice = document.querySelectorAll(".makesomenoice");


// class invocations

const tvcontroller = new TVController(channellist, tvimage, tvsection , temp_intervention);
const hands = new Hands(beautifulhands);

// event listeners

muteagent.addEventListener("change", (e) => {
   audio.muted = !e.target.checked
})

document.addEventListener("keydown", (e) => {

   if (animationvalue() < 100) return;

   const action = KeyActions[e.key] || null;

   if (action) {
      switch (action) {
         case "up":
            hands.click("assets/ezgifup.gif");
            tvcontroller.zoomUP();
            break;
         case "down":
            hands.click("assets/ezgifdown.gif");
            tvcontroller.zoomDOWN();
            break;
         case "left":
            hands.click("assets/ezgifleft.gif");
            tvcontroller.channelchanger(-1);
            break;
         case "right":
            hands.click("assets/ezgifright.gif");
            tvcontroller.channelchanger(1);
            break;
         case "active":
            hands.click("assets/ezgifactive.gif");
            playsound("assets/tvon.mp3");
            if (tvcontroller.isON) {
               tvcontroller.turnOff();
            } else {
               tvcontroller.turnON();
            }
            break;   
         default:
            console.log("no action matched")
            break;
      }
   }
   else {
      temp_intervention("failure")
   }

})


document.getElementById("main").addEventListener("scroll", () => {

   document.getElementById("tracker").innerText = `${animationvalue()}%`

   if (animationvalue() < 100) {
      reset();
   }
   else {
      showFact();
   }

})

makesomenoice.forEach((element) => {
   element.addEventListener("click",()=>{
      temp_intervention("makesomenoice")
   })
  }
)

// function definitions

function temp_intervention(input) {

   clearTimeout(intervention);
   clearInterval(temp)

   if (!input) return;

   const help = intervene[input];

   if (!help) return;

   helper_object.animate(
      [
         { transform: "translateX(0)" },
         { transform: "translateX(5px)" },
         { transform: "translateX(-5px)" },
         { transform: "translateX(5px)" },
         { transform: "translateX(0)" }
      ],
      {
         duration: 300,
         easing: "linear"
      }
   );

   helper_object.innerHTML = help.text;

   console.log("intervention called with ", help)

   intervention = setTimeout(() => {
      showFact();
   }, 2000)

}


function showFact() {

   clearInterval(temp);

   helper_object.innerHTML = ("🎹use A W S D and Enter to interact with the TV")

   temp = setInterval(() => {
      const factIndex = Math.floor(Math.random() * funfact.length);
      const fact = funfact[factIndex];
      helper_object.innerHTML = fact;
   }, 5000);

}

function animationvalue() {
   let timeline = animationtracker[0].timeline.currentTime
   return timeline.value.toFixed(0)
}

function playsound(src) {
   audio.src = src;
   audio.play();
}

function reset() {

   clearInterval(temp);
   clearTimeout(intervention);
   clearTimeout(hands.clear);

   tvcontroller.turnOff();
   helper_object.innerHTML = `<span class="mr-2"> ↓ </span> Scroll down`
}