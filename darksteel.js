// Funktion zum Ändern der Button-Styles basierend auf der class
function changeButtonStyleFromClass(button) {
  const classList = button.classList;

  // Durchlaufe die Klassen und setze die CSS-Variablen auf den Button
  classList.forEach((className) => {
    if (className.startsWith("color.")) {
      const color = className.split(".")[1];
      button.style.setProperty("--button-color", color);
    }
    if (className.startsWith("size.")) {
      const size = className.split(".")[1];
      button.style.setProperty("--button-size", size + "px");
    }
    if (className.startsWith("radius.")) {
      const radius = className.split(".")[1];
      button.style.setProperty("--button-radius", radius + "px");
    }
    if (className.startsWith("hover.color")) {
      const hoverColor = className.split(".")[2];
      button.style.setProperty("--hover-color", hoverColor);
    }
  });
}

// Initialisieren der Styles beim Laden
document.querySelectorAll(".btn").forEach((button) => {
  changeButtonStyleFromClass(button);
});

//input funktionen
// Funktion zum Ändern der Stile basierend auf der Klasse
function changeInputStyleFromClass(input) {
  const classList = input.classList;

  classList.forEach((className) => {
    if (className.startsWith("color.")) {
      const color = className.split(".")[1];
      input.style.setProperty("--input-color", color);
    }
    if (className.startsWith("size.")) {
      const size = className.split(".")[1];
      input.style.setProperty("--input-size", size + "px");
    }
    if (className.startsWith("radius.")) {
      const radius = className.split(".")[1];
      input.style.setProperty("--input-radius", radius + "px");
    }
    if (className.startsWith("focus.color")) {
      const focusColor = className.split(".")[2];
      input.style.setProperty("--focus-color", focusColor);
    }
    if (className.startsWith("hover.color")) {
      const hoverColor = className.split(".")[2];
      input.style.setProperty("--hover-color", hoverColor);
    }
    if (className.startsWith("focus.border")) {
      const focusBorderColor = className.split(".")[2];
      input.style.setProperty("--focus-border-color", focusBorderColor);
    }
  });
}

// Initialisieren der Styles beim Laden
document.querySelectorAll(".input, .textarea").forEach((input) => {
  changeInputStyleFromClass(input);
});

// Funktion, um die Sticky-Navbar zu aktivieren
function setStickyNavbar() {
  const navbar = document.querySelector(".navbar");
  const sticky = navbar.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
}

// Funktion, um die Navbar über die Klassen zu stylen
function changeNavbarStyleFromClass(navbar) {
  const classList = navbar.classList;

  classList.forEach((className) => {
    if (className.startsWith("color.")) {
      const color = className.split(".")[1];
      navbar.style.setProperty("--navbar-color", color);
    }
    if (className.startsWith("text-color.")) {
      const textColor = className.split(".")[1];
      navbar.style.setProperty("--navbar-text-color", textColor);
    }
    if (className.startsWith("font-size.")) {
      const fontSize = className.split(".")[1];
      navbar.style.setProperty("--navbar-font-size", fontSize + "px");
    }
    if (className.startsWith("link-color.")) {
      const linkColor = className.split(".")[1];
      navbar.style.setProperty("--navbar-link-color", linkColor);
    }
    if (className.startsWith("link-hover-color.")) {
      const hoverColor = className.split(".")[1];
      navbar.style.setProperty("--navbar-link-hover-color", hoverColor);
    }
  });
}

// Initialisieren der Navbar und der Styles
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  setStickyNavbar(); // Sticky-Funktion aktivieren
  changeNavbarStyleFromClass(navbar); // Anpassen der Navbar-Stile
});
// Funktion zur Überprüfung der Position des Logos und der Links
function adjustNavbar() {
  const navbar = document.querySelector(".navbar");
  const logo = navbar.querySelector(".logo");
  const links = navbar.querySelectorAll("a");

  // Überprüfen, ob das Logo oben oder unten ist
  if (logo.getBoundingClientRect().top < 0) {
    // Logo ist oben, Links sollen links ausgerichtet werden
    navbar.style.flexDirection = "row-reverse"; // Links nach rechts verschieben
    logo.style.marginLeft = "auto"; // Logo nach rechts verschieben
  } else {
    // Logo ist unten, Links sollen links ausgerichtet werden
    navbar.style.flexDirection = "row"; // Links nach links verschieben
    logo.style.marginRight = "auto"; // Logo nach links verschieben
  }
}

// Eventlistener für das Scrollen, um die Position des Logos anzupassen
window.addEventListener("scroll", adjustNavbar);

// Initiale Anpassung beim Laden der Seite
window.addEventListener("load", adjustNavbar);

function changeDivStyleFromClass(div) {
  const classList = div.classList;

  // Durchlaufe die Klassen und setze die CSS-Variablen für das Div
  classList.forEach((className) => {
    if (className.startsWith("color.")) {
      const color = className.split(".")[1];
      div.style.setProperty("--div-color", color);
    }
    if (className.startsWith("size.")) {
      const size = className.split(".")[1];
      div.style.setProperty("--div-size", size + "px");
    }
    if (className.startsWith("radius.")) {
      const radius = className.split(".")[1];
      div.style.setProperty("--div-radius", radius + "px");
    }
    if (className.startsWith("border.")) {
      const borderColor = className.split(".")[1];
      div.style.setProperty("--div-border", borderColor);
    }
    if (className.startsWith("shadow.")) {
      const shadow = className.split(".")[1];
      div.style.setProperty("--div-shadow", shadow);
    }
    if (className.startsWith("hover.color")) {
      const hoverColor = className.split(".")[2];
      div.style.setProperty("--hover-color", hoverColor);
    }
  });
}

// Initialisieren der Styles beim Laden
document.querySelectorAll(".div-container").forEach((div) => {
  changeDivStyleFromClass(div);
});

//MARGIN PADDING HIGHT WITH LOGIC
document.addEventListener("DOMContentLoaded", function () {
  // Alle Elemente auf der Seite durchlaufen
  document.querySelectorAll("*").forEach((element) => {
    const classes = element.classList;

    // Margin und Padding Anpassungen
    classes.forEach((className) => {
      // Überprüfen ob die Klasse mit margin oder padding beginnt
      if (className.startsWith("margin.") || className.startsWith("padding.")) {
        const [type, direction, valueWithUnit] = className.split(".");
        if (direction && valueWithUnit) {
          // CSS-Eigenschaft mit Wert anwenden
          element.style[`${type}-${direction}`] = valueWithUnit;
        }
      }

      // Breite (width) anpassen, z.B. width.100px
      if (className.startsWith("width.")) {
        const widthValue = className.split(".")[1];
        if (widthValue) {
          element.style.width = widthValue;
        }
      }

      // Höhe (height) anpassen, z.B. height.200px
      if (className.startsWith("height.")) {
        const heightValue = className.split(".")[1];
        if (heightValue) {
          element.style.height = heightValue;
        }
      }
    });
  });
});

//card

// Funktion zum Ändern der Card-Styles basierend auf der class
function changeCardStyleFromClass(card) {
  const classList = card.classList;

  // Durchlaufe die Klassen und setze die CSS-Eigenschaften auf die Card
  classList.forEach((className) => {
    if (className.startsWith("color.")) {
      const color = className.split(".")[1];
      card.style.backgroundColor = color; // Hintergrundfarbe anpassen
    }
    if (className.startsWith("radius.")) {
      const radius = className.split(".")[1];
      card.style.borderRadius = radius + "px"; // Border-Radius anpassen
    }
    if (className.startsWith("shadow.")) {
      const shadow = className.split(".")[1];
      if (shadow === "light") {
        card.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.1)";
      } else if (shadow === "heavy") {
        card.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.3)";
      }
    }
    if (className.startsWith("margin.")) {
      const marginDirection = className.split(".")[1];
      const marginValue = className.split(".")[2];
      card.style[`margin${capitalize(marginDirection)}`] = marginValue + "px"; // Margin anpassen
    }
  });
}

// Hilfsfunktion, um den ersten Buchstaben eines Strings zu kapitalisieren
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialisieren der Styles beim Laden
document.querySelectorAll(".card").forEach((card) => {
  changeCardStyleFromClass(card);
});

// Typewriter
class SteelTypewriter extends HTMLElement {
  constructor() {
    super();
    this.text = this.textContent.trim(); // Den Text aus dem Element holen
    this.speed = this.getAttribute("speed") || 100; // Geschwindigkeit vom Attribut
    this.cursorChar = this.getAttribute("cursor") || "▌"; // Cursorzeichen vom Attribut
    this.index = 0;
    this.cursor = null;
  }

  connectedCallback() {
    this.cursor = document.createElement("span");
    this.cursor.classList.add("steel-cursor");
    this.cursor.textContent = this.cursorChar;
    this.appendChild(this.cursor); // Füge den Cursor zum Element hinzu
    this.innerHTML = ""; // Lösche den Textinhalt vor der Ausgabe
    this.typeWriter(); // Starte den Typewriter-Effekt
  }

  typeWriter() {
    if (this.index < this.text.length) {
      this.innerHTML += this.text.charAt(this.index); // Füge das nächste Zeichen hinzu
      this.index++;
      setTimeout(() => this.typeWriter(), this.speed); // Wiederhole nach der angegebenen Geschwindigkeit
    } else {
      this.cursor.style.visibility = "visible"; // Mache den Cursor sichtbar, wenn der Text fertig ist
    }
  }
}

customElements.define("steel-typewriter", SteelTypewriter);


// Funktion zum Erstellen eines Fortschrittsbalkens
function createProgressBar(container, options = {}) {
  // Standardoptionen
  const defaults = {
    width: '0%', // Startfortschritt
    color: 'blue', // Startfarbe
    height: '30px', // Höhe des Balkens
    backgroundColor: '#e0e0e0', // Hintergrundfarbe des Containers
    transition: 'width 0.5s ease' // Animation der Breitenänderung
  };

  // Mische benutzerdefinierte Optionen mit den Standardwerten
  const settings = { ...defaults, ...options };

  // Erstelle die Container- und Balken-Elemente
  const progressBarContainer = document.createElement('div');
  const progressBar = document.createElement('div');

  // Setze die Stile für den Container
  progressBarContainer.style.width = '100%';
  progressBarContainer.style.height = settings.height;
  progressBarContainer.style.backgroundColor = settings.backgroundColor;
  progressBarContainer.style.borderRadius = '10px';
  progressBarContainer.style.overflow = 'hidden';

  // Setze die Stile für den Fortschrittsbalken
  progressBar.style.height = '100%';
  progressBar.style.width = settings.width;
  progressBar.style.backgroundColor = settings.color;
  progressBar.style.transition = settings.transition;
  progressBar.style.borderRadius = '10px';

  // Füge den Fortschrittsbalken zum Container hinzu
  progressBarContainer.appendChild(progressBar);

  // Füge den Container zum angegebenen Container (z. B. einem div in der HTML-Seite) hinzu
  container.appendChild(progressBarContainer);

  // Rückgabewert: Fortschrittsbalken, der von außen bearbeitet werden kann
  return progressBar;
}

// Beispiel für das Ändern des Fortschritts und der Farbe
function setProgress(progressBar, progress, color) {
  progressBar.style.width = `${progress}%`;
  progressBar.style.backgroundColor = color;
}

// Funktion zum Erstellen des Fortschrittsbalkens
function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress');

  progressBars.forEach(progressBar => {
    // Hole die Fortschritts- und Farbwerte aus den Attributen
    const progress = parseInt(progressBar.getAttribute('data-progress')) || 0;
    const color = progressBar.getAttribute('data-color') || 'blue';

    // Erstelle die Fortschrittsanzeige
    const progressElement = document.createElement('div');
    progressElement.classList.add('progress-bar');

    // Setze die Werte für Breite und Farbe
    progressElement.style.width = `${progress}%`;
    progressElement.style.backgroundColor = color;

    // Text im Fortschrittsbalken hinzufügen
    const textElement = document.createElement('span');
    textElement.classList.add('progress-bar-text');
    textElement.textContent = `${progress}%`;

    // Füge den Fortschrittsbalken und den Text zum Container hinzu
    progressBar.appendChild(progressElement);
    progressBar.appendChild(textElement);
  });
}

// Starte die Initialisierung, sobald das DOM geladen ist
document.addEventListener('DOMContentLoaded', initProgressBars);

// Funktion zum Aktualisieren des Fortschritts
function updateProgress(progressBar, progress) {
  const progressElement = progressBar.querySelector('.progress-bar');
  const textElement = progressBar.querySelector('.progress-bar-text');
  
  // Setze den neuen Fortschritt
  progressElement.style.width = progress + '%';
  
  // Text im Fortschrittsbalken aktualisieren
  textElement.textContent = progress + '%';
}
// Schließen von Alerts
document.addEventListener('DOMContentLoaded', function () {
  const closeButtons = document.querySelectorAll('.btn-close');
  
  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const alert = button.closest('.alert');
      alert.classList.remove('show');
      alert.classList.add('fade');
      
      // Entfernt den Alert nach der Animation
      setTimeout(function () {
        alert.remove();
      }, 150); // Zeit muss mit der CSS-Transition übereinstimmen
    });
  });
});

// Dynamisches Hinzufügen von Alerts mit JS (optional)
function addAlert(type, message) {
  const alertContainer = document.getElementById('alert-container'); // Ein Container, in dem Alerts hinzugefügt werden
  
  const alert = document.createElement('div');
  alert.classList.add('alert', 'fade', 'show', `alert-${type}`);
  alert.setAttribute('role', 'alert');
  
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" aria-label="Close"></button>
  `;
  
  alertContainer.appendChild(alert);
  
  // Automatisches Entfernen nach 5 Sekunden
  setTimeout(function () {
    alert.classList.remove('show');
    alert.classList.add('fade');
    setTimeout(function () {
      alert.remove();
    }, 150); // Zeit muss mit der CSS-Transition übereinstimmen
  }, 5000);
}
