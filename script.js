window.addEventListener("DOMContentLoaded", () => {

  // === GET SCREEN ELEMENTS ===
  const startScreen = document.getElementById("start-screen");
  const mainScreen = document.getElementById("main-screen");
  const zoneScreen = document.getElementById("zone-screen");

  // === BUTTONS ===
  const startBtn = document.getElementById("start-btn");
  const backToStart = document.getElementById("back-to-start");
  const backToMain = document.getElementById("back-to-main");
  const zoneButtons = document.querySelectorAll(".zone-btn");

  // === ZONE DETAILS ===
  const zoneTitle = document.getElementById("zone-title");
  const moistureLevel = document.getElementById("moisture-level");
  const irrigateBtn = document.getElementById("irrigate-btn");
  const waterBtn = document.getElementById("water-btn");

  // === ARDUINO CONNECTION (you can change this later) ===
  const ARDUINO_IP = "192.168.4.1";

  // ---- SCREEN NAVIGATION ----
  startBtn.onclick = () => {
    startScreen.classList.remove("active");
    mainScreen.classList.add("active");
  };

  backToStart.onclick = () => {
    mainScreen.classList.remove("active");
    startScreen.classList.add("active");
  };

  backToMain.onclick = () => {
    zoneScreen.classList.remove("active");
    mainScreen.classList.add("active");
  };

  // ---- ZONE BUTTON CLICKS ----
  zoneButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const zoneNumber = btn.getAttribute("data-zone");
      openZone(zoneNumber);
    });
  });

  // ---- OPEN ZONE DETAIL SCREEN ----
  function openZone(zoneNumber) {
    mainScreen.classList.remove("active");
    zoneScreen.classList.add("active");
    zoneTitle.textContent = `Zone ${zoneNumber} Condition`;

    // For now, moisture data can be placeholder
    moistureLevel.textContent = "Optimal (Demo)";

    // Assign the action buttons to that zone
    irrigateBtn.onclick = () => {
      alert(`💧 Irrigating Zone ${zoneNumber}`);
    };

    waterBtn.onclick = () => {
      alert(`🚿 Watering Zone ${zoneNumber}`);
    };
  }
});
