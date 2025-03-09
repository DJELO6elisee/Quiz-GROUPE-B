const questions = [
    { question: "Quelle est la capitale de la France?", reponses: ["Paris", "Londres"], correcte: 0 },
    { question: "Combien font 2 + 2?", reponses: ["3", "4"], correcte: 1 },
    { question: "Quelle est la couleur du ciel par temps clair?", reponses: ["Bleu", "Vert"], correcte: 0 },
    { question: "Elle est jolie?", reponses: ["Oui", "Pas du tout"], correcte: 0 }
];

let questionActuelle = 0;
let reponsesCorrectes = 0;

function chargerQuestion() {
    if (questionActuelle < questions.length) {
        document.getElementById("question").textContent = questions[questionActuelle].question;
        const divReponses = document.getElementById("reponses");
        divReponses.innerHTML = "";
        
        questions[questionActuelle].reponses.forEach((reponse, index) => {
            const bouton = document.createElement("button");
            bouton.textContent = reponse;
            bouton.onclick = () => {
                verifierReponse(index, bouton);
            };
            divReponses.appendChild(bouton);
        });
    } else {
        afficherResultats();
    }
}

function verifierReponse(index, bouton) {
    const indexCorrect = questions[questionActuelle].correcte;
    document.querySelectorAll("#reponses button").forEach(btn => btn.disabled = true);
    
    if (index === indexCorrect) {
        bouton.classList.add("correct");
        reponsesCorrectes++;
    } else {
        bouton.classList.add("wrong");
    }
    
    setTimeout(() => {
        questionActuelle++;
        chargerQuestion();
    }, 1000);
}

function afficherResultats() {
    const total = questions.length;
    const tauxReussite = (reponsesCorrectes / total) * 100;
    document.getElementById("conteneur-quiz").style.display = "none";
    
    const resultatDiv = document.getElementById("resultat");
    resultatDiv.textContent = tauxReussite >= 50 ? 
        `Gagné ! ✅ (${tauxReussite.toFixed(1)}% correct)` : 
        `Perdu ! ❌ (${tauxReussite.toFixed(1)}% correct)`;
    
    // Changement du background en fonction du taux de réussite
    if (tauxReussite < 50) {
        document.body.style.backgroundColor = "red";
    } else if (tauxReussite < 75) {
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "green";
    }
}

chargerQuestion();
