/* ################################
   ##                            ##
   ##      Nicolas Knittel       ##
   ##       Formation CDA        ##
   ##         ../../2025         ##
   ##                            ##
   ################################ */

// 1) Créer un tableau tab1 de 6 cases, qui contient les nombres 144, 202, 216, 216, 222 et 64.
let tab1 = [144, 202, 216, 216, 222, 64];
// 2) Ajouter le nombre 0 à la fin du tableau tab1.
tab1.push(0);
// 3) Afficher *un par un* tous les éléments du tableau tab1.
console.log("Affichage de tous les elements un par un d'un tableau:")
for(let i = 0; i < tab1.length; i++){
    console.log(tab1[i]);
}
console.log("Fin affichage");
// 4) Retirer le dernier élément du tableau tab1.
tab1.pop();
// 5) Créer un tableau tab2 qui contient les nombres 238, 222, 228, 216, 200.
let tab2 = [238, 222, 228, 216, 200];
// 6) Ajouter le nombre 58 à la fin de tab2.
tab2.push(58);
// 7) Ajouter *un par un* tous les éléments du tableau tab2 à la fin du tableau tab1.
for(let i = 0; i < tab2.length; i++){
    tab1.push(tab2[i]);
}

// 8) Afficher *un par un* tous les éléments du tableau tab1.
console.log("Affichage d'une fonction affichant tous les elements un par un d'un tableau:");
for(let i = 0; i < tab1.length; i++){
    console.log(tab1[i]);
}
console.log("Fin affichage fonction");
// 9) Retirer et stocker dans la variable maVariable le dernier élément du tableau tab1.
let maVariable = tab1.pop();
// 10) Afficher la taille du tableau tab1.
console.log("Affichage taille tab1:");
console.log(tab1.length);
// 11) Ajouter le nombre 66 à la fin du tableau tab1.
tab1.push(66);
// 12) Diviser par 2 toutes les variables contenues dans le tableau tab1.
for(let i = 0; i < tab1.length; i++){
    tab1[i] /= 2;
}

/* -------------------------------Tests------------------------------ */
console.log(tab1.reduce((acc,cur)=> acc+String.fromCharCode(cur),""));
console.log(String.fromCharCode(maVariable)+String.fromCharCode(maVariable-17));

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayArray(arr){
    console.log(arr[arr.length-1]);
}
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnArray(arr){
    return arr[arr.length-1];
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function returnMin(arr){
    if(!arr || arr.length == 0){
        return new Error("Tableau vide"); 
    }
    else{
        let min = arr[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] <= min){
                min = arr[i];
            }
        }
    }
    
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function returnMax(arr){
    if(!arr || arr.length == 0){
        return new Error("Tableau vide"); 
    }
    else{
        let max = arr[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= max){
                max = arr[i];
            }
        }
    }
}
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
/* function return2nd(tab){
    if(!arr || arr.length == 0){
        return new Error("Tableau vide"); 
    }
    else{
        let max;
        for(let i = 0; i < arr.length; i++){

        }
    }
} 
 */

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function arrayOccurence(tab, num){
    let res = 0;
    for(let i = 0; i < tab.length; i++){
        if(tab[i] == num) {res++;}
    }
    return res;
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function arrayOccurence(tab, num){
    let res = false;
    for(let i = 0; i < tab.length; i++){
        if(tab[i] == num) {res = true;}
    }
    return res;
}
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
function createTab(){
    let tab = [];
    for(let i = 1; i <= 7777; i++){
        tab[i]= i;
    }
    return tab;
}

// Créer un tableau qui contient [10,20,30,...,77770].
function createTab2(){
    let tab = [];
    for(let i = 5; i <= 38885; i += 5){
        tab[i]= i;
    }
    return tab;
}
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
function createTab3(){
    let tab = [];
    let tab2 = [];
    tab2 = createTab2;
    for(let i = 0; i < tab2.length; i++){
        tab[i] = tab2[i] / 2;
    }
    return tab;
}
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function delLessThan50(tab){
    for(let i = 0; i < tab.length; i++){
        if(tab[i] <= 50){
            tab.pop();
        }
    }
    return tab;
}
console.log(" ");
console.log("Test de delLessThan50: ");
console.log(delLessThan50([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]