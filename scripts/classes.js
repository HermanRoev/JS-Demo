// Funksjon for å toggle synligheten til elementet med id "element1"
function toggleVisibility() {
    const element = document.getElementById("element1");
    element.classList.toggle("hidden");
  }
  
  // Funksjon for å toggle den røde fargen på elementet med id "element2"  
  // Fjerner samtidig blå hvis den er aktiv
  function toggleRed() {
    const element = document.getElementById("element2");
    element.classList.toggle("red");
    if (element.classList.contains("blue")) {
      element.classList.remove("blue");
    }
  }
  
  // Funksjon for å toggle den blå fargen på elementet med id "element2"  
  // Fjerner samtidig rød hvis den er aktiv
  function toggleBlue() {
    const element = document.getElementById("element2");
    element.classList.toggle("blue");
    if (element.classList.contains("red")) {
      element.classList.remove("red");
    }
  }
  
  // Funksjon for å legge til klassen "extra" på elementet med id "element3"
  function addExtraClass() {
    const element = document.getElementById("element3");
    element.classList.add("extra");
  }
  
  // Funksjon for å fjerne klassen "extra" fra elementet med id "element3"
  function removeExtraClass() {
    const element = document.getElementById("element3");
    element.classList.remove("extra");
  }