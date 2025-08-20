// Point de vue interne
// Création d'une fonction
function nomDeLaFonction() {
    console.log(1);
    console.log(2);
    console.log(3);
}

// Point de vue externe
// Je veux appeler la fonction (démarrer, lancer, exécuter, ...).
nomDeLaFonction();

// Point de vue interne
// On peut donner une ou plusieurs informations à la fonction.
function sayHi(name) {
    // name est une variable créée automatiquement (pas de let), et qui contienDRA la valeur donnée lors de l'appel de la fonction.
    // Cette variable est appelée le paramètre/l'argument de la fonction.
    // Moi, du point de vue interne, je ne connais pas à l'avance cette valeur.
    console.log("Hi", name);
}

// Point de vue externe
// Je veux utiliser la fonction sayHi (j'oublie que c'est moi qui viens de la créer, je me dis juste qu'il y a une fonction sayHi à laquelle on donne un nom, et qui dit bonjour à ce nom).
sayHi("Pierre");
sayHi("Julia");

// Point de vue interne
// Je veux créer une fonction qui triple des nombres.
function triple(n) {
    let d = 3*n;
    return d;
}

// Point de vue externe
// J'appelle la fonction, en lui donnant la valeur 27.
80+1; // Tout seul, ne sert à rien. J'ai fait un calcul dans le vent.
triple(27); // Même chose.

console.log(80+1); // J'affiche dans la console le résultat de l'addition.
console.log(triple(27)); // J'affiche dans la console le résultat de l'appel de fonction.

let retourDeLaFonction = triple(2);
console.log("La variable retourDeLaFonction contient :", retourDeLaFonction);




//------------------Exercices:------------------------//
//----------------Nicolas Knittel---------------------//
//-------------------23/06/25-------------------------//




// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log("17");
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2(){
    return 17; 
}
// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//A pas polluer la console et a pouvoir l'utiliser comme par exemple stocker resultat dans une autre variable 
// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(nombre){
    let res = nombre * 2
    console.log(res);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(nombre){
    return nombre*2;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(nombre1, nombre2){
    let res = nombre1 + nombre2;
    console.log(res);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(nombre1, nombre2){
    let res;
    res = nombre1 + nombre2;
    return res;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a += f6(42,77);
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(nombre1, nombre2){
    if(nombre1 >= nombre2){
        return nombre1; 
    }
    else{
        return nombre2;
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(nombre1, nombre2, nombre3){
    let temp = 0;
    if(nombre1 >= nombre2 && nombre1 >= nombre3){
            return nombre1;
    }
    else if(nombre2 >= nombre1 && nombre2 >= nombre3){
        return nombre2;
    }
    else{
        return nombre3;
    }

}
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function toto(mot, nombre){
    for(let i = 0; i < nombre; i++){
        console.log(mot);
    }
}