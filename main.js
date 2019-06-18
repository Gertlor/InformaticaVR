let cameraRig = document.getElementById("js--rig");

let teleportationPad = document.getElementById("js--teleportationPad");
let teleportAudio = new Audio("sound/teleportation.wav");

let teacher = document.getElementById("js--teacher");
let dialogBox = document.getElementById("js--dialogBox");
let dialogText = document.getElementById("js--dialogText");
let nextDialog = document.getElementById("js--nextButton");

let timeoutTimeforTeleportation = 1500;

showTeleportationPad = () => {
  teleportationPad.setAttribute("visible", "true");
  teleportationPad.setAttribute("position", "0 0.01 -2");
  teleportationPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "0 1.9 -2");
    }, timeoutTimeforTeleportation)
  }
};

startUmlDialog = () => {
  console.log("starting UML Dialog.")


};

startInitialDialog = () => {
  let initialTextArray = [
    "Ik ben Gerrit en vandaag ga ik je rondleiden om een indruk te krijgen van de opleiding Informatica.",
    "Als eerst gaan we wat UML tekeken, ik zal op je wachten in de ruimte achter mij.\n\n" +
    "PS. Je kan het gele stip voor je gebruiken om daar naar toe te gaan."
  ];
  let textIndex = 0;
  nextDialog.onmouseenter = () => {
    if(textIndex >= 0 && textIndex < initialTextArray.length){
      dialogText.setAttribute("text", "value: " + initialTextArray[textIndex]);
      textIndex++
      if(textIndex === initialTextArray.length){
        nextDialog.setAttribute("visible", "false");
        showTeleportationPad()
      }
    }
  }
};


startInitialDialog();


