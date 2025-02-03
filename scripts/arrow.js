fetch("https://eksempel.no")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Vanlig funksjon, data:", data);
  })
  .catch(function(error) {
    console.error("Vanlig funksjon, feil:", error);
});


fetch("https://eksempel.no")
  .then(response => response.json()) // Kort arrow function
  .then(data => {
    console.log("Arrow function, data:", data);
  })
  .catch(error => {
    console.error("Arrow function, feil:", error);
});

// Vanlig funksjon
function funksjonsNavn(parameter) {
// kodeblokk
}

// Funksjon som en variabel
const funksjonsNavn = function(parameter) {
// kodeblokk
};

// Arrow function
const funksjonsNavn = (parameter) => {
// kodeblokk
};

// Arrow function med kun én parameter
const funksjonsNavn = parameter => parameter * 2;