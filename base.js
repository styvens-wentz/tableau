const tab_lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris', 'Batcave', 'Maubeuge', 'Martinique', 'Balamb garden', "L'enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île', 'Une cave', 'Le Caire', 'New York', 'Le tampon', 'Berlaimont',];
const tab_temperatures = ['30', '24', '-273.15', '21', '42', '-38', '35', '584', '-8000', '28', '20', '37.2', '-30', '35', "hot", '27', '-100', '55'];
const tab_objet = ['Réacteur nucléaire', 'valise', 'poivier', 'connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre', 'truelle', 'madelaine', 'trident', 'pull rose', 'pc', 'tisonnier', 'guimbarde', 'chandelier', 'verre', 'table bancale', 'arbre', 'souris', 'dague'];
const tab_nom = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];
const tab_verbe = ['Danser', 'Frapper', 'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager', 'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];

const nom = document.getElementById('nom');
const temperature = document.getElementById('temperature');
const objet = document.getElementById('objet');
const lieux = document.getElementById('lieux');
const verbe = document.getElementById('verbe');

const generer = document.getElementById('generer');
const valider = document.getElementById('valider');

generer.addEventListener("click", function () {
    const al_lieux = tab_lieux [Math.floor(Math.random() * tab_lieux.length)];
    const al_temperatures = tab_temperatures [Math.floor(Math.random() * tab_temperatures.length)];
    const al_objet = tab_objet [Math.floor(Math.random() * tab_objet.length)];
    const al_nom = tab_nom [Math.floor(Math.random() * tab_nom.length)];
    const al_verbe = tab_verbe [Math.floor(Math.random() * tab_verbe.length)];

    nom.innerHTML = al_nom;
    temperature.innerHTML = al_temperatures;
    objet.innerHTML = al_objet;
    lieux.innerHTML = al_lieux;
    verbe.innerHTML = al_verbe;
});

valider.addEventListener("click", function () {
    const ajout_nom = document.getElementById('champ_ajouter');
    tab_nom.push(ajout_nom.value);
    nom.innerHTML = ajout_nom.value;
    ajout_nom.value = ''
});