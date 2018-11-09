// JavaScript source code
//github

function spawnImg(cardFile, goldCardFile, event) {

    var ranNum = Math.floor(Math.random() * 10);
    var newImage = document.createElement("img");
    if (ranNum <= 7) {
        newImage.setAttribute('src', cardFile);
        var num = 0;
    } else {
        newImage.setAttribute('src', goldCardFile);
        var num = 1;
    }
    var imgOffsetX = (event.clientX - (newImage.width / 2));
    var imgOffsetY = (event.clientY - (newImage.height / 2));
    newImage.style.position = "absolute";
    newImage.style.top = imgOffsetY + "px";
    newImage.style.left = imgOffsetX + "px";
    newImage.style.pointerEvents = "none";
    newImage.style.userSelect = "none";
    document.body.appendChild(newImage);

    playSound(num);

}
function playSound(num) {
    var audio = new Audio();

    if (num == 0) {
        audio.src = "jugglerPlay.ogg";
    } else {
        audio.src = "jugglerAttack.ogg";
    }
    audio.volume = 0.2;
    audio.play();
}
