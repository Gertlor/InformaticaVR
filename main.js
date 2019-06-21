let cameraRig = document.getElementById("js--rig");
let camera = document.getElementById("js--camera");
let scene = document.getElementById("js--scene");

let teleportationPad = document.getElementById("js--teleportationPad");
let initialPad = document.getElementById("js--initialPad");
let middleRoomPad = document.getElementById("js--middleRoomPad");
let middleRoomPad2 = document.getElementById("js--middleRoomPad2");
let leftRoomPad = document.getElementById("js--leftRoomPad");
let leftRoomPad2 = document.getElementById("js--leftRoomPad2");
let leftRoomPad3 = document.getElementById("js--leftRoomPad3");
let rightRoomPad = document.getElementById("js--rightRoomPad");
let rightRoomPad2 = document.getElementById("js--rightRoomPad2");
let rightRoomPad3 = document.getElementById("js--rightRoomPad3");

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

let sittingChairRightRoom = document.getElementById("js--sittingChairRightRoom");
let exclamationMark = document.getElementById("js--exclamation");
let askStudent1 = document.getElementById("js--askedStudent1");
let askStudent2 = document.getElementById("js--askedStudent2");
let askStudent3 = document.getElementById("js--askedStudent3");
let askStudent4 = document.getElementById("js--askedStudent4");
let askStudent5 = document.getElementById("js--askedStudent5");
let askStudent6 = document.getElementById("js--askedStudent6");
let askStudent7 = document.getElementById("js--askedStudent7");
let jaButton = document.getElementById("js--jaButton");
let neeButton = document.getElementById("js--neeButton");

let timeoutTimeforTeleportation = 1500;
let textIndex;
let cameraHeight;
let cameraDepthProgramming;
let cameraDepthUmlExercise;


//Voor beter leesbaarheid van de code, lees van beneden naar boven.

addConversationStudent3 = () => {
  askStudent3.onmouseenter = () => {
    dialogBox.setAttribute("position", "5.579 1.81 0.04");
    dialogBox.setAttribute("rotation", "0 150 0");
    dialogBox.setAttribute("scale", "0.25 0.25 0.25");
    dialogText.setAttribute("position", "5.596 1.8 0");
    dialogText.setAttribute("rotation", "0 150 0");
    dialogText.setAttribute("scale", "0.5 0.5 0.5");
    dialogText.setAttribute("text", "value: Star Wars films zijn mijn lievelings films.");

    dialogBox.setAttribute("visible", "true");
    dialogText.setAttribute("visible", "true");
  };

  askStudent3.onmouseleave = () => {
    dialogBox.setAttribute("visible", "false");
    dialogText.setAttribute("visible", "false");
  };
};

addConversationStudent1 = () => {
  askStudent1.onmouseenter = () => {
    dialogBox.setAttribute("position", "8.4 1.8 1.5");
    dialogBox.setAttribute("rotation", "0 220 0");
    dialogBox.setAttribute("scale", "0.25 0.25 0.25");
    dialogText.setAttribute("position", "8.385 1.8 1.5");
    dialogText.setAttribute("rotation", "0 220 0");
    dialogText.setAttribute("scale", "0.5 0.5 0.5");
    dialogText.setAttribute("text", "value: De opleiding bestaat uit 4 specialisaties,\n SE, BDAM, IAT en FICT");

    dialogBox.setAttribute("visible", "true");
    dialogText.setAttribute("visible", "true");
  };

  askStudent1.onmouseleave = () => {
    dialogBox.setAttribute("visible", "false");
    dialogText.setAttribute("visible", "false");
  };
};

addConversationStudent4 = () => {
  askStudent4.onmouseenter = () => {
    dialogBox.setAttribute("position", "-5.627 1.770 0.55");
    dialogBox.setAttribute("rotation", "0 -20 0");
    dialogBox.setAttribute("scale", "0.25 0.25 0.25");
    dialogText.setAttribute("position", "-5.621 1.770 0.565");
    dialogText.setAttribute("rotation", "0 -20 0");
    dialogText.setAttribute("scale", "0.5 0.5 0.5");
    dialogText.setAttribute("text", "value: Ik ben een Software Engineering student\n Wij werken veel met software en we ontwerpen en implementeren systemen.");

    dialogBox.setAttribute("visible", "true");
    dialogText.setAttribute("visible", "true");
  };

  askStudent4.onmouseleave = () => {
    dialogBox.setAttribute("visible", "false");
    dialogText.setAttribute("visible", "false");
  };
};

addConversationStudent5 = () => {
  askStudent5.onmouseenter = () => {
    dialogBox.setAttribute("position", "-8.512 1.770 0.813");
    dialogBox.setAttribute("rotation", "0 40 0");
    dialogBox.setAttribute("scale", "0.25 0.25 0.25");
    dialogText.setAttribute("position", "-8.502 1.770 0.836");
    dialogText.setAttribute("rotation", "0 40 0");
    dialogText.setAttribute("scale", "0.5 0.5 0.5");
    dialogText.setAttribute("text", "value: Ik ben een IAT student. \n Wij werken met nieuwe technologieën en innovaties. \n De interactie tussen gebruikers en systemen is heel belangrijk");

    dialogBox.setAttribute("visible", "true");
    dialogText.setAttribute("visible", "true");
  };

  askStudent5.onmouseleave = () => {
    dialogBox.setAttribute("visible", "false");
    dialogText.setAttribute("visible", "false");
  };
};

addConversationStudent6 = () => {
  askStudent6.onmouseenter = () => {
    dialogBox.setAttribute("position", "-8.534 1.77 -3.255");
    dialogBox.setAttribute("rotation", "0 40 0");
    dialogBox.setAttribute("scale", "0.25 0.25 0.25");
    dialogText.setAttribute("position", "-8.540 1.77 -3.224");
    dialogText.setAttribute("rotation", "0 40 0");
    dialogText.setAttribute("scale", "0.5 0.5 0.5");
    dialogText.setAttribute("text", "value: Ik ben een BDAM student.\n Data speelt steeds belangrijke rol in de maatschappij,\n wij werken veel met het behandelen en visualiseren van de data.");

    dialogBox.setAttribute("visible", "true");
    dialogText.setAttribute("visible", "true");
  };

  askStudent6.onmouseleave = () => {
    dialogBox.setAttribute("visible", "false");
    dialogText.setAttribute("visible", "false");
  };
};

addConversationStudent7 = () => {
  askStudent7.onmouseenter = () => {
    dialogBox.setAttribute("position", "-5.627 1.77 -3.634");
    dialogBox.setAttribute("rotation", "0 -20 0");
    dialogBox.setAttribute("scale", "0.25 0.25 0.25");
    dialogText.setAttribute("position", "-5.621 1.77 -3.618");
    dialogText.setAttribute("rotation", "0 -20 0");
    dialogText.setAttribute("scale", "0.5 0.5 0.5");
    dialogText.setAttribute("text", "value: Ik ben een FICT student. \n Wij doen veel onderzoek en verslaglegging. \n Ons doel is de veiligheid binnen de IT");

    dialogBox.setAttribute("visible", "true");
    dialogText.setAttribute("visible", "true");
  };

  askStudent7.onmouseleave = () => {
    dialogBox.setAttribute("visible", "false");
    dialogText.setAttribute("visible", "false");
  };
};

addStudentsConversations = () => {
  addConversationStudent1();
  addConversationStudent7();
  addConversationStudent3();
  addConversationStudent4();
  addConversationStudent5();
  addConversationStudent6();
};

addTeleportPadsToEverywhere = () => {

  initialPad.setAttribute("visible", "true");
  middleRoomPad.setAttribute("visible", "true");
  middleRoomPad2.setAttribute("visible", "true");
  leftRoomPad.setAttribute("visible", "true");
  leftRoomPad2.setAttribute("visible", "true");
  leftRoomPad3.setAttribute("visible", "true");
  rightRoomPad.setAttribute("visible", "true");
  rightRoomPad2.setAttribute("visible", "true");
  rightRoomPad3.setAttribute("visible", "true");

  initialPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "0  " + cameraHeight + "  7");
    }, timeoutTimeforTeleportation)
  };

  middleRoomPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "0  " + cameraHeight + "  2");
    }, timeoutTimeforTeleportation)
  };

  middleRoomPad2.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "0  " + cameraHeight + "  -4");
    }, timeoutTimeforTeleportation)
  };

  leftRoomPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "-6.5  " + cameraHeight + "  6");
    }, timeoutTimeforTeleportation)
  };

  leftRoomPad2.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "-6.5  " + cameraHeight + "  1.5");
    }, timeoutTimeforTeleportation)
  };

  leftRoomPad3.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "-6.5  " + cameraHeight + "  -2.5");
    }, timeoutTimeforTeleportation)
  };

  rightRoomPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "6.5  " + cameraHeight + "  6");
    }, timeoutTimeforTeleportation)
  };

  rightRoomPad2.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "6.5  " + cameraHeight + "  1.5");
    }, timeoutTimeforTeleportation)
  };

  rightRoomPad3.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
      cameraRig.setAttribute("position", "6.5  " + cameraHeight + "  -1");
    }, timeoutTimeforTeleportation)
  };
};

startFinalPhase = () => {
nextDialog.onmouseenter=()=>{};

addTeleportPadsToEverywhere();
addStudentsConversations();

};

startFinalDialog = () => {
  teleportationPad.onmouseenter=()=>{};
  teleportationPad.setAttribute("visible", "false");

  let finalDialogArray = [
    "Dat was alles voor vandaag! Ik hoop dat je het leuk hebt gehad.",
    "Je kan nu vrij rondlopen, misschien hebben andere studenten nog wat te zeggen,",
    "of als je wilt, mag je naar huis gaan.",
    "Als je meer vragen hebt over de opleiding kan je bij ons website terecht.",
    "Bedankt voor je komst en tot ziens!"
  ];

  dialogBox.setAttribute("position", "7 2.7 -6");
  dialogBox.setAttribute("rotation", "0 0 0");
  dialogBox.setAttribute("visible", "true");
  dialogBox.setAttribute("scale", "0.5 0.5 0.5");
  dialogText.setAttribute("scale", "1 1 1");
  dialogText.setAttribute("position", "7 2.7 -5.98");
  dialogText.setAttribute("text", "value: " + finalDialogArray[0] + "; width: 1.7");
  dialogText.setAttribute("rotation", "0 0 0");
  dialogText.setAttribute("visible", "true");
  nextDialog.setAttribute("position", "7.373 2.433 -5.822");
  nextDialog.setAttribute("rotation", "0 0 0");
  nextDialog.setAttribute("visible", "true");

  textIndex = 1;
  nextDialog.onmouseenter = () => {
    if(textIndex >= 0 && textIndex < finalDialogArray.length){
      dialogText.setAttribute("text", "value: " + finalDialogArray[textIndex]);
      textIndex++;
      if(textIndex === finalDialogArray.length){
        nextDialog.setAttribute("visible", "false");
        startFinalPhase();
      }
    }
  }

};

teleportToTeacherForFinalDialog = () => {
  teleportationPad.setAttribute("visible", "true");
  teleportationPad.setAttribute("position", "6.5 0.01 -3");
  teleportationPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout((teleport = () => {
      cameraRig.setAttribute("position", "6.5 " + cameraHeight + " -3");
      startFinalDialog()
    }), timeoutTimeforTeleportation);
  };
};

endAskingExercise = () => {
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");
  jaButton.onmouseenter=()=>{};
  neeButton.onmouseenter=()=>{};

  setTimeout(teleportToTeacherForFinalDialog, 1500);
};

askThirdQuestion = () => {
  askStudent3.onmouseenter=()=>{};
  cameraRig.setAttribute("position", "6 "+cameraHeight+" -1");

  exclamationMark.setAttribute("visible", "false");
  dialogBox.setAttribute("position", "5.579 1.81 0.04");
  dialogBox.setAttribute("rotation", "0 150 0");
  dialogBox.setAttribute("scale", "0.25 0.25 0.25");
  dialogText.setAttribute("position", "5.596 1.8 0");
  dialogText.setAttribute("rotation", "0 150 0");
  dialogText.setAttribute("scale", "0.5 0.5 0.5");
  dialogText.setAttribute("text", "value: Welke furry soort leeft op de \nforest moon van Endor?");

  jaButton.setAttribute("position", "5.618 1.735 -0.046");
  jaButton.setAttribute("rotation", "0 150 0");
  jaButton.setAttribute("visible", "true");
  neeButton.setAttribute("position", "5.590 1.675 -0.017");
  neeButton.setAttribute("rotation", "0 150 0");
  neeButton.setAttribute("visible", "true");

  dialogBox.setAttribute("visible", "true");
  dialogText.setAttribute("visible", "true");
  jaButton.setAttribute("geometry", "width: 0.6; height: 0.05");
  neeButton.setAttribute("geometry", "width: 0.6; height: 0.05");

  jaButton.setAttribute("text", "value: Ewoks; width: 1;");
  neeButton.setAttribute("text", "value: Wookies; width: 1;");

  jaButton.onmouseenter = () => {
    dialogText.setAttribute("text", "value: The force is strong with this one.");
    dialogText.setAttribute("geometry", "width: 0.6; height: 0.05");
    neeButton.setAttribute("visible", "false");
    jaButton.setAttribute("visible", "false");

    setTimeout(endAskingExercise, 3000);

  };
  neeButton.onmouseenter = () => {
    dialogText.setAttribute("text", "value:  Be mindful of your thoughts. \nThey will betray you.");
    jaButton.setAttribute("visible", "false");
    neeButton.setAttribute("visible", "false");
    setTimeout(endAskingExercise, 3000);

  };
};

showThirdExclamationMark = () => {
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");
  jaButton.onmouseenter=()=>{};
  neeButton.onmouseenter=()=>{};

  exclamationMark.setAttribute("visible", "true");
  exclamationMark.setAttribute("position", "5 1.8 0");
  askStudent3.onmouseenter = () => {
    askThirdQuestion()
  }
};

askSecondQuestion = () => {
  askStudent2.onmouseenter=()=>{};
  cameraRig.setAttribute("position", "6 "+cameraHeight+" 2.3");

  exclamationMark.setAttribute("visible", "false");
  dialogBox.setAttribute("position", "4.519 1.81 4.08");
  dialogBox.setAttribute("rotation", "0 140 0");
  dialogBox.setAttribute("scale", "0.25 0.25 0.25");
  dialogText.setAttribute("position", "4.519 1.8 4.069");
  dialogText.setAttribute("rotation", "0 140 0");
  dialogText.setAttribute("scale", "0.5 0.5 0.5");
  dialogText.setAttribute("text", "value: Als a=1 en b=2, is a+b(b*4) = 16; width: 2.4 ");

  jaButton.setAttribute("position", "4.450 1.666 3.969");
  jaButton.setAttribute("rotation", "0 140 0");
  jaButton.setAttribute("visible", "true");
  neeButton.setAttribute("position", "4.562 1.665 4.099");
  neeButton.setAttribute("rotation", "0 140 0");
  neeButton.setAttribute("visible", "true");

  dialogBox.setAttribute("visible", "true");
  dialogText.setAttribute("visible", "true");

  jaButton.onmouseenter = () => {
    dialogText.setAttribute("text", "value: Hmm, ik kom op 17 uit... raar.");
    jaButton.setAttribute("visible", "false");
    neeButton.setAttribute("visible", "false");
    setTimeout(showThirdExclamationMark, 3000);

  };
  neeButton.onmouseenter = () => {
    dialogText.setAttribute("text", "value: Oh ja, het is 17! Bedankt!");
    jaButton.setAttribute("visible", "false");
    neeButton.setAttribute("visible", "false");
    setTimeout(showThirdExclamationMark, 3000);
  };
};

showSecondExclamationMark = () => {
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");
  jaButton.onmouseenter=()=>{};
  neeButton.onmouseenter=()=>{};

  exclamationMark.setAttribute("visible", "true");
  exclamationMark.setAttribute("position", "4 1.8 4");
  askStudent2.onmouseenter = () => {
    askSecondQuestion();
  }
};

askFirstQuestion = () => {
  askStudent1.onmouseenter=()=>{};
  cameraRig.setAttribute("position", "6.8 "+cameraHeight+" 0.5");

  exclamationMark.setAttribute("visible", "false");
  dialogBox.setAttribute("position", "8.4 1.8 1.5");
  dialogBox.setAttribute("rotation", "0 220 0");
  dialogBox.setAttribute("scale", "0.25 0.25 0.25");
  dialogText.setAttribute("position", "8.385 1.8 1.5");
  dialogText.setAttribute("rotation", "0 220 0");
  dialogText.setAttribute("scale", "0.5 0.5 0.5");
  dialogText.setAttribute("text", "value: In java, moet ik na elk statement een puntkomma toevoegen?");

  jaButton.setAttribute("position", "8.3 1.641 1.560");
  jaButton.setAttribute("rotation", "0 210 0");
  jaButton.setAttribute("visible", "true");
  neeButton.setAttribute("position", "8.456 1.649 1.40");
  neeButton.setAttribute("rotation", "0 210 0");
  neeButton.setAttribute("visible", "true");

  dialogBox.setAttribute("visible", "true");
  dialogText.setAttribute("visible", "true");

  jaButton.onmouseenter = () => {
    dialogText.setAttribute("text", "value: Ja, dat dacht ik ook, bedankt!");
    jaButton.setAttribute("visible", "false");
    neeButton.setAttribute("visible", "false");
    setTimeout(showSecondExclamationMark, 3000);

  };
  neeButton.onmouseenter = () => {
    dialogText.setAttribute("text", "value: Hmmm, volgens Gerrit is het wel zo...");
    jaButton.setAttribute("visible", "false");
    neeButton.setAttribute("visible", "false");
    setTimeout(showSecondExclamationMark, 3000);

  };

};

showExclamationMark = () => {
  teleportationPad.onmouseenter=()=>{};
  teleportationPad.setAttribute("visible","false");
  teacher.setAttribute("position", "8.3 0 -6");
  teacher.setAttribute("rotation", "0 220 0");
  dialogBox.setAttribute("visible", "false");
  dialogText.setAttribute("visible", "false");

  exclamationMark.setAttribute("visible", "true");
  askStudent1.onmouseenter = () => {
    askFirstQuestion();
  }
};

teleportToCenterOfRightRoom = () => {

  teleportationPad.setAttribute("position", "6.5 0.01 0");
  teleportationPad.setAttribute("visible", "true");
  teleportationPad.onmouseenter = () => {
    setTimeout((teleport = () => {
      cameraRig.setAttribute("position", "6.5 "+cameraHeight+" 0");
      showExclamationMark();
    }), timeoutTimeforTeleportation);
  }
};

startAskingExercise = () => {
  nextDialog.onmouseenter=()=>{};
  nextDialog.setAttribute("visible", "false");
  teacher.setAttribute("position", "8.3 0 -5");
  teacher.setAttribute("rotation", "0 240 0");
  dialogBox.setAttribute("position", "7 2.7 -5");
  dialogBox.setAttribute("rotation", "0 0 0");
  dialogText.setAttribute("position", "7 2.7 -4.98");
  dialogText.setAttribute("rotation", "0 0 0");
  dialogText.setAttribute("text", "value: Ik zie dat jij geen laptop hebt. Als je wilt kan je opstaan en je medestudenten helpen met de opdrachten.");

  teleportToCenterOfRightRoom()
};

startTeacherLesson = () => {
  sittingChairRightRoom.onmouseenter=()=>{};
  sittingChairRightRoom.setAttribute("rotation", " 0 220 0");
  sittingChairRightRoom.setAttribute("position", "8 0.3 -1.8");
  dialogText.setAttribute("text", "value: Nu gaan we beginnen met de opdrachten van vorige week, als jullie vragen hebben kunnen ze jullie gerust stellen.");
  nextDialog.setAttribute("position", "7.3 2.35 -5.97");
  nextDialog.setAttribute("rotation", "0 0 0");
  nextDialog.setAttribute("visible", "true");

  nextDialog.onmouseenter = () => {
    setTimeout(startAskingExercise, 500);
  }

};

startAskingExerciseDialog = () => {
  teleportationPad.onmouseenter=()=>{};
  teleportationPad.setAttribute("visible", "false");
  dialogBox.setAttribute("position", "7 2.7 -6");
  dialogBox.setAttribute("rotation", "0 0 0");
  dialogBox.setAttribute("visible", "true");
  dialogText.setAttribute("position", "7 2.7 -5.98");
  dialogText.setAttribute("text", "value: He, leuk dat je bent gekomen, je kan op de stoel aan je rechterkant zitten.");
  dialogText.setAttribute("rotation", "0 0 0");
  dialogText.setAttribute("visible", "true");

  sittingChairRightRoom.setAttribute("rotation", " 0 220 0");
  sittingChairRightRoom.setAttribute("position", "8 0.3 -1.8");

  sittingChairRightRoom.onmouseenter = () => {
    setTimeout((teleport = () => {
      cameraRig.setAttribute("position", "8 "+(cameraHeight-0.4)+" -2.3");
      startTeacherLesson();
      sittingChairRightRoom.setAttribute("rotation", "0 180 0");
      sittingChairRightRoom.setAttribute("position", "8 0.3 -2.1");
    }), 500);
  };
};

teleportToRightRoom3 = () => {
  teleportationPad.setAttribute("position", "6.5 0.01 -3");
  teleportationPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout((teleport = () => {
      cameraRig.setAttribute("position", "6.5 "+cameraHeight+" -3");
      startAskingExerciseDialog();
    }), timeoutTimeforTeleportation);
  };
};

teleportToRightRoom2 = () => {
  teacher.setAttribute("position", "8.3 0 -6");
  teacher.setAttribute("rotation", "0 220 0");
  dialogText.setAttribute("visible", "false");
  dialogBox.setAttribute("visible", "false");
  teleportationPad.setAttribute("position", "6.5 0.01 6");
  teleportationPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout((teleport = () => {
      cameraRig.setAttribute("position", "6.5 "+cameraHeight+" 6");
      teleportToRightRoom3();
    }), timeoutTimeforTeleportation);
  };
};

teleportToRightRoom1 = () => {
    teleportationPad.setAttribute("position", "0 0.01 6");
    teleportationPad.setAttribute("visible", "true");
    teleportationPad.onmouseenter = () => {
      teleportAudio.play();
      setTimeout((teleport = () => {
        cameraRig.setAttribute("position", "0 "+cameraHeight+" 6");
        teleportToRightRoom2();
      }), timeoutTimeforTeleportation);
    };
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
        teleportToRightRoom1();
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
  prInstructions.setAttribute("text", "value: Intructies: \n We hebben al wat werk voor je gedaan en een klasse Main gemaakt met een main methode die je methode printHelloWorld() roept.");
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
  teleportationPad.onmouseenter=()=>{};
  teleportationPad.setAttribute("visible", "false");

  let umlTextArray = [
    "We gaan een klassendiagram tekenen van de klasse Main.java met een methode printHelloWorld().",
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