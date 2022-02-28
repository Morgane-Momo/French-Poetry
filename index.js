let coupleMots1 = ["Espace & Rapace", "Soleil & Groseille", "Nuage & Présage", "Pierre & Lumière","Entrelace & Carapace", "Amour & Bravoure", "Originel & Mortel", "Gloire & Pouvoir", "Pleuvoir & Revoir", "Savoir & Noir"]
let coupleMots2 = ["Illusion & Fusion", "Diapason & Maison", "Néant & Mécréant", "Rire & Périr", "Autant & Chantant", "Printemp & Montant", "Branche & Etanche", "Blanc & Vent", "Fleur & Pleur","Heure & Malheur"]
let button = document.getElementById('start');
let mots1 = document.getElementById('couple-mots1');
let mots2 = document.getElementById('couple-mots2');
let vosMots = document.getElementById('vosMots');

function motsSelector1(){
  let randomMots1 = Math.floor(Math.random() * coupleMots1.length);
  return coupleMots1[randomMots1];
}

function motsSelector2(){
  let randomMots2 = Math.floor(Math.random() * coupleMots2.length);
  return coupleMots2[randomMots2];
}

function motsCouple(){
  vosMots.innerHTML = "Voici vos mots:";
  mots1.innerHTML = motsSelector1();
  mots2.innerHTML = motsSelector2();
  button.innerHTML = "Une autre sélection ?";
  }

  button.addEventListener('click', motsCouple);

 document.getElementById('start').onclick = function() {
            document.getElementById('demo').innerHTML = 'Hey There ! Everything is fine with Morgane';
        }