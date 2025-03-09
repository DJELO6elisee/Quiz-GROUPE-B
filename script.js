function afficherResultats() {
    const total = questions.length;
    const tauxReussite = (reponsesCorrectes / total) * 100;
    document.getElementById("conteneur-quiz").style.display = "none";
    
    const resultatDiv = document.getElementById("resultat");
    resultatDiv.textContent = tauxReussite >= 50 ? 
        `Gagné ! ✅ (${tauxReussite.toFixed(1)}% correct)` : 
        `Perdu ! ❌ (${tauxReussite.toFixed(1)}% correct)`;

    console.log("Taux de réussite:", tauxReussite); // Vérifie si le calcul est bon
    
    // Changement du background en fonction du taux de réussite
    if (tauxReussite < 50) {
        document.body.style.backgroundColor = "red";
        console.log("Fond vert appliqué");
    } else if (tauxReussite < 75) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "green";
    }
}
