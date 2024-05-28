document.addEventListener("DOMContentLoaded", () => {

  const btnValidation = document.getElementById('btn');
  const resultText = document.getElementById('result');
  const errorText = document.getElementById('error');

  btnValidation.addEventListener("click", function() {
    const kmMax = parseFloat(document.getElementById('kmMax').value);
    const inputText = parseFloat(document.getElementById('texte').value);

    // Fonction pour calculer le pourcentage d'autonomie restante
    function calculerPourcentageAutonomie(kilometresRestants, autonomieMaximale) {
      if(!kilometresRestants || !autonomieMaximale) {
        errorText.style.visibility = "visible";
        errorText.innerHTML = "Les infos ne peut pas être vide.";
      }else if (kilometresRestants > autonomieMaximale) {
        errorText.style.visibility = "visible";
        errorText.innerHTML = "Les kilomètres actuels ne peuvent pas dépasser les kilomètres maximum.";
      }
      var pourcentage = (kilometresRestants / autonomieMaximale) * 100;
      return pourcentage.toFixed(2) + "%";
    }

    // Calcul et affichage du résultat
    const pourcentage = calculerPourcentageAutonomie(inputText, kmMax);
    resultText.innerHTML = pourcentage;
  });

});