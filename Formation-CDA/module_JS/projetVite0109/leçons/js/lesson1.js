//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
let allParagraphes = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');

// document.body.insertBefore(allParagraphes[9],premierH1);

// let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[9],premierH1);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
laDiv.append(allParagraphes[4]);
// Mais on a aussi la fonction appendChild;
laDiv.appendChild(allParagraphes[0]);
// document.body.removeChild(premierH1);