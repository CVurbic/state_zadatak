document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab' && event.shiftKey) {
    event.preventDefault(); // Spriječava uobičajeno ponašanje pritiska na Tab (prebacivanje fokusa unatrag)
    var activeElement = document.activeElement;
    var sviInputi = document.querySelectorAll("input.itemRowInput");
    var currentIndex = Array.from(sviInputi).indexOf(activeElement);

    // Provjerite da li smo na prvom inputu, ako jesmo, prebacite fokus na posljednji input
    var nextIndex = currentIndex === 0 ? sviInputi.length - 1 : currentIndex - 1;

    // Postavite fokus na prethodni input
    sviInputi[nextIndex].focus();
    sviInputi[nextIndex].select();
  }
  else if (event.key === 'Tab') {
    event.preventDefault(); // Spriječava uobičajeno ponašanje pritiska na Tab (prebacivanje fokusa unaprijed)
    var activeElement = document.activeElement;
    var sviInputi = document.querySelectorAll("input.itemRowInput");
    var currentIndex = Array.from(sviInputi).indexOf(activeElement);

    // Provjerite da li smo na zadnjem inputu, ako jesmo, prebacite fokus na prvi input
    var nextIndex = (currentIndex + 1) % sviInputi.length;

    // Postavite fokus na sljedeći input
    sviInputi[nextIndex].focus();
    sviInputi[nextIndex].select();
  }
});

window.onload = function () {
  console.log("DOM fully loaded and parsed");
  var contentDiv = document.querySelector("div.content");
  var actionsDiv = document.querySelector("div.actions");

  if (contentDiv) {
    contentDiv.style.setProperty("height", "100%", "important");
    contentDiv.style.setProperty("overflow", "visible", "important");
  } else {
    console.log("Element s klasom 'content' nije pronađen.");
  }
  if (actionsDiv) {
    actionsDiv.style.setProperty("position", "fixed", "important");
    actionsDiv.style.setProperty("bottom", "2rem", "important");
    actionsDiv.style.setProperty("right", "2rem", "important");
  } else {
    console.log("Element s klasom 'actions' nije pronađen.");
  }
};

