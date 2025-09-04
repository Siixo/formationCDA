let table = [
  {
    nom: "Idi Amin Dada",
    email: "bonDictateur@example.com",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTnQKnc8gcafHi18tUxamAbdJ_ao3kGlfhw&s",
  },
  {
    nom: "Joseph Staline",
    email: "petitPereDesPeuples@example",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4q0hVVIvW8LzzAPli9MwIz-AdSkTfn42mg&s",
  },
  {
    nom: "Fidel Castro",
    email: "tresFidel@cuba.cb",
    img: "https://cpd-platform-production-assets.s3.eu-west-1.amazonaws.com/blog/cows.jpg",
  },
];

let card = document.getElementById("card");

table.forEach((dictateur, index) => {
  const card = document.createElement("div");
  card.classList.add(
    "bg-gray-800",
    "text-white",
    "p-5",
    "m-5",
    "rounded-lg",
    "shadow-lg",
    "w-1/3",
    "text-center"
  );

  const img = document.createElement("img");
  img.src = dictateur.img;
  img.alt = `Image de ${dictateur.nom}`;
  img.classList.add("w-32", "h-32", "mx-auto", "rounded-full", "mb-4");

  const name = document.createElement("h2");
  name.innerText = dictateur.nom;
  name.classList.add("text-xl", "font-bold", "mb-2");

  const email = document.createElement("p");
  email.innerText = `Email: ${dictateur.email}`;
  email.classList.add("text-sm", "text-gray-300");

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(email);

  document.getElementById("card").appendChild(card);
});

//Exemple try catch
/*Décommentez le code pour l'exécuter */
// prenom;
// alert('Ce message ne s\'affichera pas');

try {
  prenom;
  alert("Bonjour");
} catch (err) {
  console.log(err);
  alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}
        -----------
        Le Message de l'erreur  :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
}
alert(`Ce message s'affiche correctement`);

/*Décommentez le code pour l'exécuter */
function division() {
  let x = prompt("Entrez un premier nombre (numérateur)");
  let y = prompt("Entrez un deuxième nombre (dénominateur)");

  if (isNaN(x) || isNaN(y) || x == "" || y == "") {
    throw new Error("Merci de rentrer deux nombres");
  } else if (y == 0) {
    // throw new Error('Division par 0 impossible')
    throw console.warn("Division par 0 impossible");
  } else {
    alert(x / y);
  }
}
// On fera en try catch l'exec
// division();

try {
  division();
} catch (err) {
  alert(err.message);
} finally {
  alert(`Ce message s'affichera quoiqu'il arrive`);
}
