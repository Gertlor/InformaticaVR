let cameraRig = document.getElementById("js--rig");

let teleportationPad = document.getElementById("js--teleportationPad");
let teleportAudio = new Audio("sound/teleportation.wav");

let teacher = document.getElementById("js--teacher");
let dialogBox = document.getElementById("js--dialogBox");
let dialogText = document.getElementById("js--dialogText");
let nextDialog = document.getElementById("js--nextButton");
let beginButton = document.getElementById("js--beginButton");

let timeoutTimeforTeleportation = 1500;
let textIndex;

startUmlDrawing = () => {
console.log("drawing")

};

startUmlDialog = () => {
  let umlTextArray = [
    "We gaan een klassendiagram tekenen van de classe Main.java met een methode Hello World.",
    "Om deze opdracht te realiseren moet je de componenten pakken die je nodig hebt en deze op de goede plek zetten op het bord."
  ];
  textIndex = 1;

  cameraRig.setAttribute("rotation", "0 30 0");
  teacher.setAttribute("position", "-0.5 0 -6");
  teacher.setAttribute("rotation", "0 -100 0");

  dialogBox.setAttribute("position", " -1.5 2.7 -5.");
  dialogBox.setAttribute("rotation", "0 30 0");
  dialogBox.setAttribute("visible", "true");

  dialogText.setAttribute("position", " -1.46 2.7 -4.95");
  dialogText.setAttribute("rotation", "0 30 0");
  dialogText.setAttribute("text", "value: " + umlTextArray[0]);
  dialogText.setAttribute("text", "width: 1.9");
  dialogText.setAttribute("visible", "true");

  nextDialog.setAttribute("position", "-1 2.35 -4.8");
  nextDialog.setAttribute("rotation", "0 30 0");
  nextDialog.setAttribute("visible", "true");

  nextDialog.onmouseenter = () => {
    if(textIndex >= 0 && textIndex < umlTextArray.length){
      dialogText.setAttribute("text", "value: " + umlTextArray[textIndex]);
      textIndex++;
      if(textIndex === umlTextArray.length){
        nextDialog.setAttribute("visible", "false");
        beginButton.setAttribute("visible", "true");
        beginButton.setAttribute("rotation","0 30 0");
        beginButton.setAttribute("position", "-1.4 2.35 -4.8");
        beginButton.onmouseenter = () => {
          setTimeout(draw = () => {
            startUmlDrawing();
          }, 1000)
        };
      }
    }
  }
};

showTeleportationPad = () => {
  teleportationPad.setAttribute("visible", "true");
  teleportationPad.setAttribute("position", "0 0.01 -2.5");
  teleportationPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        dialogBox.setAttribute("visible", "false");
        dialogText.setAttribute("visible", "false");
        cameraRig.setAttribute("position", "0 1.9 -2.5");
        startUmlDialog();
    }, timeoutTimeforTeleportation)
  }
};

startInitialDialog = () => {
  let initialTextArray = [
    "Ik ben Gerrit en vandaag ga ik je rondleiden om een indruk te krijgen van de opleiding Informatica.",
    "Als eerst gaan we wat UML tekeken, ik zal op je wachten in de ruimte achter mij.\n\n" +
    "PS. Je kan het gele stip voor je gebruiken om daar naar toe te gaan."
  ];
  textIndex = 0;
  nextDialog.onmouseenter = () => {
    if(textIndex >= 0 && textIndex < initialTextArray.length){
      dialogText.setAttribute("text", "value: " + initialTextArray[textIndex]);
      textIndex++;
      if(textIndex === initialTextArray.length){
        nextDialog.setAttribute("visible", "false");
        showTeleportationPad()
      }
    }
  }
};

startInitialDialog();


