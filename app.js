document.addEventListener("DOMContentLoaded", () => {

  const btnValidation = document.getElementById('btn');
  const resultText = document.getElementById('result');

  btnValidation.addEventListener("click", function() {
    const kmMax = parseFloat(document.getElementById('kmMax').value);
    const inputText = parseFloat(document.getElementById('texte').value);

    // Fonction pour calculer le pourcentage d'autonomie restante
    function calculerPourcentageAutonomie(kilometresRestants, autonomieMaximale) {
      if (kilometresRestants > autonomieMaximale) {
        return "Les kilomètres restants ne peuvent pas dépasser l'autonomie maximale.";
      }
      var pourcentage = (kilometresRestants / autonomieMaximale) * 100;
      return pourcentage.toFixed(2) + "%";
    }

    // Calcul et affichage du résultat
    const pourcentage = calculerPourcentageAutonomie(inputText, kmMax);
    resultText.innerHTML = pourcentage;
  });

});