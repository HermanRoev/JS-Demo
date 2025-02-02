// Global array for å lagre person-objektene
var personer = [];

function handleSubmit(event) {
    event.preventDefault(); // Forhindre tradisjonell innsending
  
    // Bruk FormData for å hente alle data fra skjemaet, kan også hente for hver input med element-id
    const formData = new FormData(event.target);
  
    // Hent verdier med navn-attributtene fra skjemaet
    const person = {
      navn: formData.get('navn'),
      alder: formData.get('alder'),
      epost: formData.get('epost'),
      nummer: formData.get('nummer'),
      bgColor: formData.get('bgColor'),
      font: formData.get('font')
    };
  
    // Legg til person-objektet i arrayet
    personer.push(person);
    oppdaterKort();
    
    // Tilbakestill skjemaet
    event.target.reset();
  
    return false;
  }

  function oppdaterKort() {
    const container = document.getElementById('kortContainer');
    
    // Bruker map() til å bygge en HTML-streng for hvert personkort
    container.innerHTML = personer.map(person => {
      // Bestemmer hvilken bakgrunnsklasse som skal brukes, avhengig av valg (red/blue/none)
      let bgClass = "";
      if (person.bgColor === "red") {
        bgClass = "red";
      } else if (person.bgColor === "blue") {
        bgClass = "blue";
      }
      
      return `
        <div class="card ${bgClass}" style="font-family: ${person.font}">
          <h3>${person.navn}</h3>
          <p>
            <strong>Alder:</strong> ${person.alder}<br>
            <strong>E-post:</strong> ${person.epost}<br>
            <strong>Nummer:</strong> ${person.nummer}
          </p>
        </div>
      `;
    }).join('');
  }

  // Alternativ løsning for oppdaterKort-funksjonen
  /*
  function oppdaterKort() {
    const container = document.getElementById('kortContainer');
    container.innerHTML = ""; // Tøm eksisterende innhold
  
    personer.forEach(function(person) {
      const kort = document.createElement('div');
      kort.classList.add('card');
  
      const tittel = document.createElement('h3');
      tittel.textContent = person.navn;
      kort.appendChild(tittel);
  
      const detaljer = document.createElement('p');
      detaljer.innerHTML = `<strong>Alder:</strong> ${person.alder}<br>
                             <strong>E-post:</strong> ${person.epost}<br>
                             <strong>Nummer:</strong> ${person.nummer}`;
      kort.appendChild(detaljer);
  
      container.appendChild(kort);
    });
  }
    */