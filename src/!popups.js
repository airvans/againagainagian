
const checkedpopup = document.getElementById("item-achievement")?.querySelector("input");

const popups = localStorage.getItem("popups") 

const popupset = new Set(popups ? JSON.parse(popups) : [])

if(checkedpopup){
  checkedpopup.addEventListener("click",()=>{
    if(checkedpopup.checked)checkmark()
  })
}



function dotheshuffle(){

    const name = "inspector"
    const text = "found a probable feature 🎉"

    if (!popupset.has(name)){
        showachievement(name, text , "assets/achievements/inspector.png")
        addachievement(name)
    }

}

function Randomdraw(){
    const name = "patience or Lucky"
    const text = "you waited or where lucky to get this"

    if (!popupset.has(name)){
        showachievement(name, text , "assets/achievements/patience.png")
        addachievement(name)
    }
}

function checkmark(){
    const name = "Rule changer"
    const text = "guess you like to break rules huh"

    if (!popupset.has(name)){
        showachievement(name, text , "assets/achievements/rulechanger.png")
        addachievement(name)
    }
}

function doacheck(){
    const input = document.querySelector("#name-checker input").value.toLowerCase().trim().replaceAll(" ","")
    const name = "Guess your right"
    const text = "You know your stuff huh?"

    if (input == "champagnecoast" && !popupset.has(name)){
        showachievement(name, text , "assets/achievements/namechecker.png")
        addachievement(name)
    }
}



function showachievement(name, text , img) {

}


function addachievement(name){
    popupset.add(name)
    localStorage.setItem("popups", JSON.stringify([...popupset]))
    overachiever()
}


function overachiever(){
    if(popupset.size == 4){
        const finalname = "overachiever"
        const finaltext = "The end doesnt detere you" 
        showachievement(finalname, finaltext, "assets/achievements/master.png")
        addachievement(finalname)
    }
}

