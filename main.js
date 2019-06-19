let cameraRig = document.getElementById("js--rig");
let camera = document.getElementById("js--camera");

let teleportationPad = document.getElementById("js--teleportationPad");
let teleportAudio = new Audio("sound/teleportation.wav");

let teacher = document.getElementById("js--teacher");
let dialogBox = document.getElementById("js--dialogBox");
let dialogText = document.getElementById("js--dialogText");
let nextDialog = document.getElementById("js--nextButton");
let beginButton = document.getElementById("js--beginButton");

let classDiagram = document.getElementById("js--classDiagram");
let mainText = document.getElementById("js--mainText");
let helloWorldText = document.getElementById("js--helloWorldText");
let resultDiagram = document.getElementById("js--resultDiagram");

let programmingChair = document.getElementById("js--programmingChair");

let timeoutTimeforTeleportation = 1500;
let textIndex;

startProgrammingExercise = () => {

};

sitOnChairForProgramming = () => {
  cameraRig.setAttribute("position", "0 1.5 -6");
  cameraRig.setAttribute("rotation", "-5 0 0");
  teacher.setAttribute("visible", "false");
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");

  startProgrammingExercise();

};

startFinalDialogUml = () => {
  textIndex = 0;
  let finalUmlTextArray = [
    "Goed Gedaan!!",
    "En nu gaan we dit even programmeren, zit op de stoel naast mij."
  ];
  classDiagram.onmouseenter = () => {};
  mainText.onmouseenter = () => {};
  helloWorldText.onmouseenter = () => {};
  cameraRig.setAttribute("position", "0 1.9 -2.5");
  cameraRig.setAttribute("rotation", "0 0 0");

  dialogBox.setAttribute("position", " -1.5 2.7 -5");
  dialogBox.setAttribute("rotation", "0 30 0");
  dialogBox.setAttribute("visible", "true");

  dialogText.setAttribute("position", " -1.46 2.7 -4.95");
  dialogText.setAttribute("rotation", "0 30 0");
  dialogText.setAttribute("text", "value: " + finalUmlTextArray[0]);
  dialogText.setAttribute("text", "width: 1.9");
  dialogText.setAttribute("visible", "true");

  nextDialog.setAttribute("position", "-1 2.35 -4.8");
  nextDialog.setAttribute("rotation", "0 30 0");
  nextDialog.setAttribute("visible", "true");

  nextDialog.onmouseenter = () => {
    if(textIndex >= 0 && textIndex < finalUmlTextArray.length){
      dialogText.setAttribute("text", "value: " + finalUmlTextArray[textIndex]);
      textIndex++;
      if(textIndex === finalUmlTextArray.length){
        nextDialog.setAttribute("visible", "false");
        programmingChair.onmouseenter = () => {
          setTimeout(sitOnChairForProgramming, 500)
        };
      }
    }
  }
};

makeCameraClassDiagram = () => {
  if(document.getElementById('js--camera-classDiagram')){
    document.getElementById('js--camera-classDiagram').remove();
  }

  let cameraClassDiagram = document.createElement("a-entity");

  cameraClassDiagram.setAttribute("id", "js--camera-classDiagram");
  cameraClassDiagram.setAttribute("geometry", "primitive: plane; height: 0.2; width: 0.15");
  cameraClassDiagram.setAttribute("material", "src: images/classDiagram.png; opacity: 0.9");
  cameraClassDiagram.setAttribute("position", "-0.15 0 -1");

  return cameraClassDiagram;
};

makeMainTextForDiagram = () => {
  if(document.getElementById('js--camera-mainText')){
    document.getElementById('js--camera-mainText').remove();
  }

  let cameraMainText = document.createElement("a-entity");
  cameraMainText.setAttribute("id", "js--camera-mainText");
  cameraMainText.setAttribute("geometry", "primitive: plane; height: 0.1; width: 0.15");
  cameraMainText.setAttribute("material", "opacity: 0; side: double");
  cameraMainText.setAttribute("position", "-0.15 0 -1");
  cameraMainText.setAttribute("text", "value: Main; color: black; width: 1; align: center");

  return cameraMainText;
};
makeHelloWorldTextForDiagram = () => {
  if(document.getElementById('js--camera-helloWorldText')){
    document.getElementById('js--camera-helloWorldText').remove();
  }

  let cameraHelloWorldText = document.createElement("a-entity");
  cameraHelloWorldText.setAttribute("id", "js--camera-helloWorldText");
  cameraHelloWorldText.setAttribute("geometry", "primitive: plane; height: 0.1; width: 0.3");
  cameraHelloWorldText.setAttribute("material", "opacity: 0; side: double");
  cameraHelloWorldText.setAttribute("position", "-0.23 0 -1");
  cameraHelloWorldText.setAttribute("text", "value: +printHelloWorld(); color: black; width: 1; align: center");

  return cameraHelloWorldText;
};

removeCameraChildren = () => {
  if(document.getElementById('js--camera-classDiagram')){
    document.getElementById('js--camera-classDiagram').remove();
  } else if(document.getElementById('js--camera-mainText')){
    document.getElementById('js--camera-mainText').remove();
  } else if(document.getElementById('js--camera-helloWorldText')){
    document.getElementById('js--camera-helloWorldText').remove();
  }
};

changeUmlResultDiagram = (source, itemToDeleteId, isUmlDone) => {
  resultDiagram.onmouseenter = () => {
    resultDiagram.setAttribute("material", "src: "+source+"; opacity: 0.9");
    document.getElementById(itemToDeleteId).remove();
  };

  if(isUmlDone){
    setTimeout(startFinalDialogUml, 1000);
  }
};

drawLastStageUml = () => {
  helloWorldText.onmouseenter = () => {
    removeCameraChildren();
    camera.appendChild(makeHelloWorldTextForDiagram());
    changeUmlResultDiagram("images/classDiagramStage2.png", "js--camera-helloWorldText", true );
  };
};

drawSecondStageUml = () => {
  mainText.onmouseenter = () => {
    removeCameraChildren();
    camera.appendChild(makeMainTextForDiagram());
    changeUmlResultDiagram("images/classDiagramStage1.png", "js--camera-mainText", false);
  };
  drawLastStageUml();
};

drawFirstStageUml = () => {
  classDiagram.onmouseenter = () => {
    removeCameraChildren();
    camera.appendChild(makeCameraClassDiagram());
    resultDiagram.setAttribute("material", "opacity: 0.4");
    changeUmlResultDiagram("images/classDiagram.png", "js--camera-classDiagram", false);
  };
  drawSecondStageUml();
};

startUmlDrawing = () => {
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");
  beginButton.setAttribute("visible", "false");

  cameraRig.setAttribute("position", "-1 2 -4.12");
  cameraRig.setAttribute("rotation", "0 90 0");

  drawFirstStageUml()

};

startUmlDialog = () => {
  let umlTextArray = [
    "We gaan een klassendiagram tekenen van de classe Main.java met een methode printHelloWorld().",
    "Om deze opdracht te realiseren moet je de componenten pakken die je nodig hebt en deze op de goede plek zetten op het bord."
  ];
  textIndex = 1;

  cameraRig.setAttribute("rotation", "0 30 0");
  teacher.setAttribute("position", "-0.5 0 -6");
  teacher.setAttribute("rotation", "0 -100 0");

  dialogBox.setAttribute("position", " -1.5 2.7 -5");
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
          }, 500)
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