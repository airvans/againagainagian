

export class TVController {

   constructor(channels,tvimageElement,tvsectionElement, temp_intervention) {
      this.isON = false;
      this.channels = channels
      this.zoom = 1;
      this.currentChannel = 0;
      this.zoommin = 0.3;
      this.zoommax = 1.4;
      this.tvimageElement = tvimageElement;
      this.tvsectionElement = tvsectionElement;
      this.temp_intervention = temp_intervention;
   }

   turnON() {
      this.isON = true;
      this.tvimageElement.innerHTML = this.channels[this.currentChannel];
   }
   turnOff() {
      this.isON = false;
      this.tvimageElement.innerHTML = ""
   }

   zoomUP() {

      if (this.zoom == this.zoommax) {
         this.temp_intervention("up")
      }

      this.zoom = Math.min(this.zoom + 0.1, 1.4);
      this.tvsectionElement.style.transform = `scale(${this.zoom})`
      

   }

   zoomDOWN() {

      if (this.zoom == this.zoommin) {
         this.temp_intervention("down")
      }

      this.zoom = Math.max(this.zoom - 0.2, 0.3);
      this.tvsectionElement.style.transform = `scale(${this.zoom})`
      

   }

   channelchanger(value,hands) {

      if(this.isON == false){
         this.temp_intervention("left")
         return;
      }

      if (!Array.isArray(this.channels) || this.channels.length === 0) return;

      this.currentChannel += value;
      const len = this.channels.length;
      this.currentChannel = ((this.currentChannel % len) + len) % len;

      if (tvimage) this.tvimageElement.innerHTML = this.channels[this.currentChannel];

   }


}

export class Hands{
   constructor(handsElement) {
      this.base = `./ezgifbase.png`;
      this.handsElement = handsElement;
      this.clear = null;
   }

   click(tempview){

      clearTimeout(this.clear);

      this.handsElement.src = tempview;

      this.clear = setTimeout(() => {
         this.handsElement.src = this.base; 
      }, 500);
      
   }
}


export const funfact = ["Um, um um (frustrated tongue click), um - how the f**k do you spell ****bleep bleep****", `I love building interactive web experiences <span class="text-red-500 opacity-0 hover:opacity-100">(bullsh*t)</span>`,
      "I code in JavaScript and C# but I am a bit rust(y) . \n ps I do not know rust", "There are a couple more secrets hiding around this website! To find them, be patient or lucky","I could have done a simpsons with the cloud's you know",
      `Man, shut up, man | You're trying to trick me, man | Put smoke into my friggin' head and sh*t, man | Man, I don't know what to think no more, man | #gun click# | I don't know what to think |
      no more man | Get out of my head! (x3)`, "Perfection is the enemy of progress (will remove this one later)", "I am not a TV, I am a metaphor for life","I will definitely make progress, so pls be patient","I guess you will never know why we are enemies - the stars have to align just right for you to find out - me personally I find it funny - but untill I make progress, I guess we will never know ",
      "France is Becon and knowledge is power","You might not get to see this because you like foxes", "Do you know you are a perfect?", "In the life I believe I am too competitive",`<span class='cursor-pointer' onclick='Randomdraw()'>click here for an achievement</span>`
]


export const intervene = {

     "left" : { text : "woah woah woah turn me on first before you start pressing buttons", color : "" , animation_class : "" },
     "right" : { text : "woah woah woah turn me on first before you start pressing buttons", color : "" , animation_class : "" },
     "active" : { text : "", color : "" , animation_class : "" },
     "down" : { text : "you ran out of zoom zoom", color : "" , animation_class : "" },
     "up" : { text : "i ran out of zoom zoom", color : "" , animation_class : "" },
     "failure" : { text : "you did click something - but not the right something keep clicking", color : "red" , animation_class : "" },
     "makesomenoice" :{text:"its an image mate what did you expect....clickable buttons 🫵🤣🤣", color : "" , animation_class : "" }
}

 export const KeyActions = {
      "a": "left",
      "A": "left",
      "ArrowLeft": "left",
      "w": "up",
      "s": "down",
      "d": "right",
      "Enter": "active",
      "ArrowRight": "right",
      "W": "up",
      "S": "down",
      "D": "right",
      "special": "dothething"
}
