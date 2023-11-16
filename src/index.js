const audio = new Audio(
  "https://soundboardguy.com/wp-content/uploads/2021/04/DJ-Airhorn-Sound-Effect.mp3"
);
const fire = document.querySelector("#fire");

function goHome() {
  window.location.href = "index.html";
}

function playFire() {
  audio.play();
  setTimeout(goHome, 3200);
}

fire.addEventListener("click", playFire);
