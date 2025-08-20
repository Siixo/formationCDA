//--------------Exercices 2 fonctions----------------//
//-----------------Nicolas Knittel-------------------//
//---------------------23/06/25----------------------//

/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(nombre){
    let res;
    if(nombre % 2  == 1){
        res = nombre*3 + 1;
    }
    else{
        res = nombre / 2;
    }
    return res;
}
/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
function finalCountdown(nombre){
    while(nombre != 0){
        console.log(nombre);
        nombre--;
    }
}
/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
function fastCountdown(nombre){
    while(nombre > 0.1){
       console.log(nombre);
       nombre /= 2; 
    }
}

/* Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(nombre1, nombre2){
    for(let i = nombre1; i <= nombre2; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/
function euclide(a,b){
    if(b = 0){
        return a;
    }
    else{
        return euclide(b, a%b);
    }
}
/*
À la main, calculer `euclide(6,10)`.
*/

//----euclide(6, 10) = 2------//