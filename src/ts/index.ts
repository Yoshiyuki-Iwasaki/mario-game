/**
 * イベント名の列挙型
 */
const enum EventName {
  LOAD = "load",
  CLICK = "click",
  MOUSE_MOVE = "mousemove",
}

const character: any = document.getElementById("character");
const block: any = document.getElementById("block");
const score: any = document.getElementById("score");

window.addEventListener(EventName.CLICK, () => jump());

const jump = () => {
  if (!character?.classList.contains("animate")) {
    character?.classList.add("animate");
  }
  setTimeout(() => {
    character?.classList.remove('animate');
  },500)
}

const checkDead = setInterval(() => {
  score.innerText++;
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("Your score is " + score.innerText);
    location.reload();
  }
},10)