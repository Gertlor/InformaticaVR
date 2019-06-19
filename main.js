let cameraRig = document.getElementById("js--rig");
let camera = document.getElementById("js--camera");
let scene = document.getElementById("js--scene");

let teleportationPad = document.getElementById("js--teleportationPad");
let teleportAudio = new Audio("sound/teleportation.wav");

let initialPanel = document.getElementById("js--initialPanel");
let initialPanelUp = document.getElementById("js--initialPanelUp");
let initialPanelButtonUp = document.getElementById("js--initialPanelButtonUp");
let initialPanelButton = document.getElementById("js--initialPanelButton");

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

let prResultPlane = document.getElementById("js--prResultPlane");
let prResultClass = document.getElementById("js--prResult-Class");
let prResultMainMethod = document.getElementById("js--prResult-MainMethod");
let prResultMethodCall = document.getElementById("js--prResult-MethodCall");
let prResultCloseMain = document.getElementById("js--prResult-CloseMain");

let prResultPublic = document.getElementById("js--prResult-public");
let prResultVoid = document.getElementById("js--prResult-void");
let prResultPrintHelloWorldMethod= document.getElementById("js--prResult-printHelloWorldMethod");
let prResultCurlyBracketOpen = document.getElementById("js--prResult-CurlyBracketOpen");
let prResultCurlyBracketClose = document.getElementById("js--prResult-CurlyBracketClose");
let prResultPrint = document.getElementById("js--prResult-print");
let prResultPrintBracketOpen= document.getElementById("js--prResult-printBracketOpen");
let prResultPrintQuoteOpen = document.getElementById("js--prResult-printQuoteOpen");
let prResultPrintHelloWorld = document.getElementById("js--prResult-printHelloWorld");
let prResultPrintQuoteClose = document.getElementById("js--prResult-printQuoteClose");
let prResultPrintBracketClose = document.getElementById("js--prResult-printBracketClose");

let prResultCloseClass = document.getElementById("js--prResult-CloseClass");
let prChoosePublic = document.getElementById("js--prChoose-Public");
let prChooseVoid = document.getElementById("js--prChoose-Void");
let prChoosePrintHelloWorld = document.getElementById("js--prChoose-printHelloWorld");
let prChooseOpenCurlyBracket = document.getElementById("js--prChoose-openCurlyBracket");
let prChooseCloseCurlyBracket = document.getElementById("js--prChoose-closeCurlyBracket");
let prChoosePrint = document.getElementById("js--prChoose-print");
let prChooseOpenBracket = document.getElementById("js--prChoose-openBracket");
let prChooseQuote = document.getElementById("js--prChoose-quote");
let prChooseHelloWorld = document.getElementById("js--prChoose-HelloWorld");
let prChooseCloseBracket = document.getElementById("js--prChoose-closeBracket");
let prInstructions = document.getElementById("js--prInstructions");
let prNextInstruction = document.getElementById("js--prNextInstruction");

let timeoutTimeforTeleportation = 1500;
let textIndex;
let cameraHeight;
let cameraDepthProgramming;
let cameraDepthUmlExercise;

addTeleportationToRightRoom = () => {

};

finishProgrammingDialogWithTeacher = () => {
  let finishProgrammingDialogArray = [
    "Dat was niet zo moeilijk, was het?",
    "Ik ga nu even les geven, als je wilt mee doen wacht ik op je in het lokaal hiernaast, aan je linkerkant."
  ];
  prNextInstruction.onmouseenter=()=>{};
  cameraRig.setAttribute("position", "0 "+cameraHeight+" -2.5");
  cameraRig.setAttribute("rotation", "0 0 0");

  teacher.setAttribute("visible", "true");
  dialogBox.setAttribute("visible", "true");
  dialogText.setAttribute("text", "value: "+ finishProgrammingDialogArray[0]);
  dialogText.setAttribute("visible", "true");
  nextDialog.setAttribute("visible", "true");
  textIndex = 1;
  nextDialog.onmouseenter = () => {
    if(textIndex >= 0 && textIndex < finishProgrammingDialogArray.length){
      dialogText.setAttribute("text", "value: " + finishProgrammingDialogArray[textIndex]);
      textIndex++;
      if(textIndex === finishProgrammingDialogArray.length){
        nextDialog.setAttribute("visible", "false");
        addTeleportationToRightRoom();
      }
    }
  }
};

finishProgrammingExercise = () => {
  prInstructions.setAttribute("text", "value: Gefeliciteerd! Je hebt je eerste programma gemaakt!\n Druk op de pijl om verder te gaan.");
  prNextInstruction.setAttribute("visible", "true");
  prNextInstruction.onmouseenter = () => {
    finishProgrammingDialogWithTeacher()
  }
};

programmingExerciseSetCurlyCloseBracketOnResult = () => {
  prChooseCloseCurlyBracket.onmouseenter=()=>{};
  prChooseCloseCurlyBracket.setAttribute("text", "color: white");
  prResultCurlyBracketClose.setAttribute("visible", "true");

  setTimeout(finishProgrammingExercise, 1000);
};

programmingExerciseSetCloseBracketOnResult = () => {
  prChooseCloseBracket.onmouseenter=()=>{};
  prChooseCloseBracket.setAttribute("text", "color: white");
  prResultPrintBracketClose.setAttribute("visible", "true");

  prChooseCloseCurlyBracket.setAttribute("text", "color: red");
  prChooseCloseCurlyBracket.onmouseenter = () => {
    programmingExerciseSetCurlyCloseBracketOnResult()
  }
};

programmingExerciseSetCloseQuoteOnResult = () => {
  prChooseQuote.onmouseenter=()=>{};
  prChooseQuote.setAttribute("text", "color: white");
  prResultPrintQuoteClose.setAttribute("visible", "true");

  prChooseCloseBracket.setAttribute("text", "color: red");
  prChooseCloseBracket.onmouseenter = () => {
    programmingExerciseSetCloseBracketOnResult()
  }
};

programmingExerciseSetHelloWorldOnResult = () => {
  prChooseHelloWorld.onmouseenter=()=>{};
  prChooseHelloWorld.setAttribute("text", "color: white");
  prResultPrintHelloWorld.setAttribute("visible", "true");

  prChooseQuote.setAttribute("text", "color: red");
  prChooseQuote.onmouseenter = () => {
    programmingExerciseSetCloseQuoteOnResult()
  }
};

programmingExerciseSetOpenQuotetOnResult = () => {
  prChooseQuote.onmouseenter=()=>{};
  prChooseQuote.setAttribute("text", "color: white");
  prResultPrintQuoteOpen.setAttribute("visible", "true");

  prChooseHelloWorld.setAttribute("text", "color: red");
  prChooseHelloWorld.onmouseenter = () => {
    programmingExerciseSetHelloWorldOnResult()
  }
};

programmingExerciseSetOpenBracketOnResult = () => {
  prChooseOpenBracket.onmouseenter=()=>{};
  prChooseOpenBracket.setAttribute("text", "color: white");
  prResultPrintBracketOpen.setAttribute("visible", "true");

  prChooseQuote.setAttribute("text", "color: red");
  prChooseQuote.onmouseenter = () => {
    programmingExerciseSetOpenQuotetOnResult()
  }
};

programmingExerciseSetPrintOnResult = () => {
  prChoosePrint.onmouseenter=()=>{};
  prChoosePrint.setAttribute("text", "color: white");
  prResultPrint.setAttribute("visible", "true");

  prChooseOpenBracket.setAttribute("text", "color: red");
  prChooseOpenBracket.onmouseenter = () => {
    programmingExerciseSetOpenBracketOnResult()
  }
};

programmingExerciseSetCurlyBraceOpenOnResult = () => {
  prChooseOpenCurlyBracket.onmouseenter=()=>{};
  prChooseOpenCurlyBracket.setAttribute("text", "color: white");
  prResultCurlyBracketOpen.setAttribute("visible", "true");

  prChoosePrint.setAttribute("text", "color: red");
  prChoosePrint.onmouseenter = () => {
    programmingExerciseSetPrintOnResult()
  }
};

programmingExerciseSetHelloWorldMethodOnResult = () => {
  prChoosePrintHelloWorld.onmouseenter=()=>{};
  prChoosePrintHelloWorld.setAttribute("text", "color: white");
  prResultPrintHelloWorldMethod.setAttribute("visible", "true");

  prChooseOpenCurlyBracket.setAttribute("text", "color: red");
  prChooseOpenCurlyBracket.onmouseenter = () => {
    programmingExerciseSetCurlyBraceOpenOnResult()
  }
};

programmingExerciseSetVoidOnResult = () => {
  prChooseVoid.onmouseenter=()=>{};
  prChooseVoid.setAttribute("text", "color: white");
  prResultVoid.setAttribute("visible", "true");

  prChoosePrintHelloWorld.setAttribute("text", "color: red");
  prChoosePrintHelloWorld.onmouseenter = () => {
    programmingExerciseSetHelloWorldMethodOnResult()
  }
};

programmingExerciseSetPublicOnResult = () => {
  prChoosePublic.onmouseenter=()=>{};
  prChoosePublic.setAttribute("text", "color: white");
  prResultPublic.setAttribute("visible", "true");

  prChooseVoid.setAttribute("text", "color: red");
  prChooseVoid.onmouseenter = () => {
    programmingExerciseSetVoidOnResult()
  }
};

startProgrammingExercise = () => {
  prNextInstruction.onmouseenter=()=>{};

  prInstructions.setAttribute("text", "value: Instructies: \n Selecteer de juiste stuk code en kijk hoe het op het scherm verschijnt");
  prNextInstruction.setAttribute("visible", "false");

  prChoosePublic.setAttribute("visible", "true");
  prChooseVoid.setAttribute("visible", "true");
  prChoosePrintHelloWorld.setAttribute("visible", "true");
  prChooseOpenCurlyBracket.setAttribute("visible", "true");
  prChooseCloseCurlyBracket.setAttribute("visible", "true");
  prChoosePrint.setAttribute("visible", "true");
  prChooseOpenBracket.setAttribute("visible", "true");
  prChooseQuote.setAttribute("visible", "true");
  prChooseHelloWorld.setAttribute("visible", "true");
  prChooseCloseBracket.setAttribute("visible", "true");

  prChoosePublic.setAttribute("text", "color: red");

  prChoosePublic.onmouseenter = () => {
    programmingExerciseSetPublicOnResult();
  };
};

showProgrammingExercise = () => {
  prResultPlane.setAttribute("visible", "true");
  prResultClass.setAttribute("visible", "true");
  prResultMainMethod.setAttribute("visible", "true");
  prResultMethodCall.setAttribute("visible", "true");
  prResultCloseMain.setAttribute("visible", "true");
  prResultCloseClass.setAttribute("visible", "true");

  prInstructions.setAttribute("visible", "true");
  prInstructions.setAttribute("text", "value: Intructies: \n We hebben al wat werk voor je gedaan en een classe Main gemaakt met een main methode die je methode printHelloWorld() roept.");
  prNextInstruction.setAttribute("visible", "true");

  prNextInstruction.onmouseenter = () => {
    startProgrammingExercise();
  };

};

sitOnChairForProgramming = () => {
  programmingChair.onmouseenter=()=>{};
  cameraRig.setAttribute("position", "0  "+(cameraHeight - 0.4)+" "+cameraDepthProgramming);
  cameraRig.setAttribute("rotation", "-5 0 0");
  teacher.setAttribute("visible", "false");
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");

  showProgrammingExercise();
};

startFinalDialogUml = () => {
  textIndex = 1;
  let finalUmlTextArray = [
    "Goed Gedaan!!",
    "En nu gaan we dit even programmeren, zit op de stoel naast mij."
  ];
  classDiagram.onmouseenter = () => {};
  mainText.onmouseenter = () => {};
  helloWorldText.onmouseenter = () => {};
  cameraRig.setAttribute("position", "0  "+cameraHeight+"  -2.5");
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
  beginButton.onmouseenter=()=>{};
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");
  beginButton.setAttribute("visible", "false");

  cameraRig.setAttribute("position", cameraDepthUmlExercise+"  "+(cameraHeight+0.1)+"  -4.12");
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
        cameraRig.setAttribute("position", "0  "+cameraHeight+"  -2.5");
        startUmlDialog();
    }, timeoutTimeforTeleportation)
  }
};

startInitialDialog = () => {
  initialPanel.remove();
  initialPanelButton.remove();
  initialPanelUp.remove();
  initialPanelButtonUp.remove();

  teacher.setAttribute("visible", "true");
  dialogBox.setAttribute("visible", "true");
  dialogText.setAttribute("visible", "true");
  nextDialog.setAttribute("visible", "true");

  cameraRig.setAttribute("position", "0 " +cameraHeight+ " 7.3");

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

window.mobilecheck = function(){
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

checkIfVrModeIsOnAndStartAdventure = () => {
  if(scene.is('vr-mode') && mobilecheck()){
    cameraHeight = 0.5;
    cameraDepthProgramming = -5.5;
    cameraDepthUmlExercise = -0.5;
  } else {
    cameraHeight = 1.9;
    cameraDepthProgramming = -6;
    cameraDepthUmlExercise = -1;
  }
  startInitialDialog();
};

initiateApplication = () => {
  initialPanelButton.onmouseenter = () => {
    checkIfVrModeIsOnAndStartAdventure()
  };

  initialPanelButtonUp.onmouseenter = () => {
    checkIfVrModeIsOnAndStartAdventure()
  }
};

initiateApplication();