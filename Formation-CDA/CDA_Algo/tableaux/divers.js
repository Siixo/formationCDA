// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
function indexMax(tab){
    let max; 
    for(let i = 0; i < tab.length-1; i++){
        if(tab[i] >= tab[i+1]){
            max = i;
        }
        else{
            max = i+1;
        }
    }
    return max;
}
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function sumTab(tab){
    let sum;
    for(let i = 0; i < tab.length; i++){
        sum += tab[i];
    }
    return sum;
}

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
function sumTab(tab){
    let sum;
    for(let i = 0; i < tab.length; i++){
        if(tab[i] >= 0){
            sum += tab[i];
        }
    }
    return sum;
}

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
function sumTab(tab){
    let sum;
    for(let i = 0; i < tab.length; i++){
        if(tab[i] <= 0){
            sum += tab[i];
        }
    }
    return sum;
}