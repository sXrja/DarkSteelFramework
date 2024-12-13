// Funktion zum Ändern der Button-Styles basierend auf der class
function changeButtonStyleFromClass(button) {
    const classList = button.classList;

    // Durchlaufe die Klassen und setze die CSS-Variablen auf den Button
    classList.forEach(className => {
        if (className.startsWith('color.')) {
            const color = className.split('.')[1];
            button.style.setProperty('--button-color', color);
        }
        if (className.startsWith('size.')) {
            const size = className.split('.')[1];
            button.style.setProperty('--button-size', size + 'px');
        }
        if (className.startsWith('radius.')) {
            const radius = className.split('.')[1];
            button.style.setProperty('--button-radius', radius + 'px');
        }
        if (className.startsWith('hover.color')) {
            const hoverColor = className.split('.')[2];
            button.style.setProperty('--hover-color', hoverColor);
        }
    });
}

// Initialisieren der Styles beim Laden
document.querySelectorAll('.btn').forEach(button => {
    changeButtonStyleFromClass(button);
});


//input funktionen
// Funktion zum Ändern der Stile basierend auf der Klasse
function changeInputStyleFromClass(input) {
    const classList = input.classList;

    classList.forEach(className => {
        if (className.startsWith('color.')) {
            const color = className.split('.')[1];
            input.style.setProperty('--input-color', color);
        }
        if (className.startsWith('size.')) {
            const size = className.split('.')[1];
            input.style.setProperty('--input-size', size + 'px');
        }
        if (className.startsWith('radius.')) {
            const radius = className.split('.')[1];
            input.style.setProperty('--input-radius', radius + 'px');
        }
        if (className.startsWith('focus.color')) {
            const focusColor = className.split('.')[2];
            input.style.setProperty('--focus-color', focusColor);
        }
        if (className.startsWith('hover.color')) {
            const hoverColor = className.split('.')[2];
            input.style.setProperty('--hover-color', hoverColor);
        }
        if (className.startsWith('focus.border')) {
            const focusBorderColor = className.split('.')[2];
            input.style.setProperty('--focus-border-color', focusBorderColor);
        }
    });
}

// Initialisieren der Styles beim Laden
document.querySelectorAll('.input, .textarea').forEach(input => {
    changeInputStyleFromClass(input);
});


// Funktion, um die Sticky-Navbar zu aktivieren
function setStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };
}

// Funktion, um die Navbar über die Klassen zu stylen
function changeNavbarStyleFromClass(navbar) {
    const classList = navbar.classList;

    classList.forEach(className => {
        if (className.startsWith('color.')) {
            const color = className.split('.')[1];
            navbar.style.setProperty('--navbar-color', color);
        }
        if (className.startsWith('text-color.')) {
            const textColor = className.split('.')[1];
            navbar.style.setProperty('--navbar-text-color', textColor);
        }
        if (className.startsWith('font-size.')) {
            const fontSize = className.split('.')[1];
            navbar.style.setProperty('--navbar-font-size', fontSize + 'px');
        }
        if (className.startsWith('link-color.')) {
            const linkColor = className.split('.')[1];
            navbar.style.setProperty('--navbar-link-color', linkColor);
        }
        if (className.startsWith('link-hover-color.')) {
            const hoverColor = className.split('.')[1];
            navbar.style.setProperty('--navbar-link-hover-color', hoverColor);
        }
    });
}

// Initialisieren der Navbar und der Styles
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    setStickyNavbar();  // Sticky-Funktion aktivieren
    changeNavbarStyleFromClass(navbar);  // Anpassen der Navbar-Stile
});
// Funktion zur Überprüfung der Position des Logos und der Links
function adjustNavbar() {
    const navbar = document.querySelector('.navbar');
    const logo = navbar.querySelector('.logo');
    const links = navbar.querySelectorAll('a');

    // Überprüfen, ob das Logo oben oder unten ist
    if (logo.getBoundingClientRect().top < 0) {
        // Logo ist oben, Links sollen links ausgerichtet werden
        navbar.style.flexDirection = 'row-reverse';  // Links nach rechts verschieben
        logo.style.marginLeft = 'auto';               // Logo nach rechts verschieben
    } else {
        // Logo ist unten, Links sollen links ausgerichtet werden
        navbar.style.flexDirection = 'row';           // Links nach links verschieben
        logo.style.marginRight = 'auto';              // Logo nach links verschieben
    }
}

// Eventlistener für das Scrollen, um die Position des Logos anzupassen
window.addEventListener('scroll', adjustNavbar);

// Initiale Anpassung beim Laden der Seite
window.addEventListener('load', adjustNavbar);

function changeDivStyleFromClass(div) {
    const classList = div.classList;

    // Durchlaufe die Klassen und setze die CSS-Variablen für das Div
    classList.forEach(className => {
        if (className.startsWith('color.')) {
            const color = className.split('.')[1];
            div.style.setProperty('--div-color', color);
        }
        if (className.startsWith('size.')) {
            const size = className.split('.')[1];
            div.style.setProperty('--div-size', size + 'px');
        }
        if (className.startsWith('radius.')) {
            const radius = className.split('.')[1];
            div.style.setProperty('--div-radius', radius + 'px');
        }
        if (className.startsWith('border.')) {
            const borderColor = className.split('.')[1];
            div.style.setProperty('--div-border', borderColor);
        }
        if (className.startsWith('shadow.')) {
            const shadow = className.split('.')[1];
            div.style.setProperty('--div-shadow', shadow);
        }
        if (className.startsWith('hover.color')) {
            const hoverColor = className.split('.')[2];
            div.style.setProperty('--hover-color', hoverColor);
        }
    });
}

// Initialisieren der Styles beim Laden
document.querySelectorAll('.div-container').forEach(div => {
    changeDivStyleFromClass(div);
});

//MARGIN PADDING HIGHT WITH LOGIC
document.addEventListener('DOMContentLoaded', function() {
    // Alle Elemente auf der Seite durchlaufen
    document.querySelectorAll('*').forEach(element => {
        const classes = element.classList;

        // Margin und Padding Anpassungen
        classes.forEach(className => {
            // Überprüfen ob die Klasse mit margin oder padding beginnt
            if (className.startsWith('margin.') || className.startsWith('padding.')) {
                const [type, direction, valueWithUnit] = className.split('.');
                if (direction && valueWithUnit) {
                    // CSS-Eigenschaft mit Wert anwenden
                    element.style[`${type}-${direction}`] = valueWithUnit;
                }
            }

            // Breite (width) anpassen, z.B. width.100px
            if (className.startsWith('width.')) {
                const widthValue = className.split('.')[1];
                if (widthValue) {
                    element.style.width = widthValue;
                }
            }

            // Höhe (height) anpassen, z.B. height.200px
            if (className.startsWith('height.')) {
                const heightValue = className.split('.')[1];
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
    classList.forEach(className => {
        if (className.startsWith('color.')) {
            const color = className.split('.')[1];
            card.style.backgroundColor = color;  // Hintergrundfarbe anpassen
        }
        if (className.startsWith('radius.')) {
            const radius = className.split('.')[1];
            card.style.borderRadius = radius + 'px';  // Border-Radius anpassen
        }
        if (className.startsWith('shadow.')) {
            const shadow = className.split('.')[1];
            if (shadow === 'light') {
                card.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.1)';
            } else if (shadow === 'heavy') {
                card.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.3)';
            }
        }
        if (className.startsWith('margin.')) {
            const marginDirection = className.split('.')[1];
            const marginValue = className.split('.')[2];
            card.style[`margin${capitalize(marginDirection)}`] = marginValue + 'px';  // Margin anpassen
        }
    });
}

// Hilfsfunktion, um den ersten Buchstaben eines Strings zu kapitalisieren
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialisieren der Styles beim Laden
document.querySelectorAll('.card').forEach(card => {
    changeCardStyleFromClass(card);
});
