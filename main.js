let cameraRig = document.getElementById("js--rig");

let initialPad = document.getElementById("js--initialPad");
let middleRoomPad = document.getElementById("js--middleRoomPad");
let programmingBordPad = document.getElementById("js--programmingBordPad");
let leftRoomPad = document.getElementById("js--leftRoomPad");
let leftRoomPad2 = document.getElementById("js--leftRoomPad2");
let studentPad = document.getElementById("js--studentPad");
let rightRoomPad = document.getElementById("js--rightRoomPad");
let rightRoomPad2 = document.getElementById("js--rightRoomPad2");
let teacherPad = document.getElementById("js--teacherPad");
let teleportAudio = new Audio("sound/teleportation.wav");

let timeoutTime = 1500;

//      TELEPORTATION

initialPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "0 1.7 7");
    }, timeoutTime)
};

middleRoomPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "0 1.7 2");
    }, timeoutTime)
};

programmingBordPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "0 1.7 -4");
    }, timeoutTime)
};

leftRoomPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "-6.5 1.7 6");
    }, timeoutTime)
};

leftRoomPad2.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "-6.5 1.7 -4");
    }, timeoutTime)
};

studentPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "-6.5 1.7 1");
    }, timeoutTime)
};

rightRoomPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "6.5 1.7 6");
    }, timeoutTime)
};

rightRoomPad2.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "6.5 1.7 -3");
    }, timeoutTime)
};

teacherPad.onmouseenter = () => {
    teleportAudio.play();
    setTimeout(teleport = () => {
        cameraRig.setAttribute("position", "6.5 1.7 1");
    }, timeoutTime)
};

