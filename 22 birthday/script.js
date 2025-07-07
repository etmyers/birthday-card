let current = 1;

function nextScreen() {
  const currentScreen = document.getElementById(`screen${current}`);
  current++;
  const nextScreen = document.getElementById(`screen${current}`);

  currentScreen.classList.add("hidden");
  nextScreen.classList.remove("hidden");
}

function showSurprise() {
  document.getElementById('screen4').classList.add("hidden");
  document.getElementById('screen5').classList.remove("hidden");

  // Optional: Add confetti or play music
}
