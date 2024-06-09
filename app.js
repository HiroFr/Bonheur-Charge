document.addEventListener("DOMContentLoaded", () => {

  const btnValidation = document.getElementById('btn');

  const resultPourcentage = document.getElementById('resultPourcentage');
  const resultTempsDeCharge = document.getElementById('resultTempsDeCharge');

  const errorText = document.getElementById('error');

  function afficherErreur(message) {
    errorText.style.visibility = "visible";
    errorText.innerHTML = message;
    setTimeout(() => {
      errorText.style.visibility = "hidden";
    }, 5000);
  }

  // Fonction pour calculer le pourcentage d'autonomie restante
  function calculerPourcentageAutonomie(kilometresRestants, autonomieMaximale) {
    // Vérifie si les champs sont vide
    if(!kilometresRestants || !autonomieMaximale) {
      afficherErreur("Les infos ne peut pas être vide.")
      // Et si les km restant sont plus grand que les km max
    } else if (kilometresRestants > autonomieMaximale) {
      afficherErreur("Les kilomètres actuels ne peuvent pas dépasser les kilomètres maximum.")
    }
    // Calcul le pourcentage de batterie restant
    var pourcentage = (kilometresRestants / autonomieMaximale) * 100;
    return pourcentage.toFixed(2) + "%";
  }
  
  function calculerTempsDeCharge(kilometresRestants, autonomieMaximale, batterie, capacitéDeCharge, efficacité) {
    // Calcul l'énergie nécessaire en kilowattheures
    var energieStocke = batterie * ((autonomieMaximale - kilometresRestants) / autonomieMaximale);
    // Ajustement pour l'efficacité de charge
    var ernergieFournie = energieStocke / efficacité;
    // Calcul le temps de charge en heures
    var tempsDeChargeHeures = ernergieFournie / capacitéDeCharge;
    // Converti le temps de charge en minutes
    var tempsDeChargeMinutes = tempsDeChargeHeures * 60;
    // Calcul les heures et les minutes
    var heures = Math.floor(tempsDeChargeMinutes / 60);
    var minutes = Math.round(tempsDeChargeMinutes % 60);
    // Retourne le temps de charge formaté en heures et minutes
    return heures + "h " + minutes + "min";
  }

  btnValidation.addEventListener("click", function() {

    const kmMax = parseFloat(document.getElementById('kmMax').value);
    const kmActuel = parseFloat(document.getElementById('kmActuel').value);
  
    const kWh = parseFloat(document.getElementById('kWh').value);
    const kW = parseFloat(document.getElementById('kW').value);

    const efficacité = 0.8;
  
    // Calcul et affiche les résultats
    resultPourcentage.innerHTML = calculerPourcentageAutonomie(kmActuel, kmMax);
    resultTempsDeCharge.innerHTML = calculerTempsDeCharge(kmActuel, kmMax, kWh, kW, efficacité);

  });

});