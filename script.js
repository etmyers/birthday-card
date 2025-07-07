let current = 1;

function nextScreen() {
  const currentScreen = document.getElementById(`screen${current}`);
  current++;
  const nextScreen = document.getElementById(`screen${current}`);

  currentScreen.classList.add("hidden");
  nextScreen.classList.remove("hidden");
}

function goNo() {
  document.getElementById('screen1').classList.add("hidden");
  document.getElementById('screen-no').classList.remove("hidden");
}

function goNo2() {
  document.getElementById('screen2').classList.add("hidden");
  document.getElementById('screen-no2').classList.remove("hidden");
}

function restart() {
  document.getElementById('screen-no').classList.add("hidden");
  document.getElementById('screen-no2').classList.add("hidden");
  document.getElementById('screen1').classList.remove("hidden");
  current = 1;
}

function openCard() {
  document.getElementById('modal').classList.remove('hidden');
}

function closeCard() {
  document.getElementById('modal').classList.add('hidden');
}