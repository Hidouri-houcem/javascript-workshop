
/*data type*/

var name = "houssem";
var lastname="hidouri";
var age=24;
var student=true;

var personne = {
    nom: 'houssem',
    age: 24,

}

function great (){
    return "bonjour";
} 

console.log(name);
console.log(typeof(great));

/*concatenation*/
var fullname = name + " " + lastname; 
console.log(fullname);

console.log(name.length); /*length*/

var msg = "HELLO World";

console.log(msg.toLowerCase());/*toLowerCase */


console.log(msg.toUpperCase());/*toUpperCase*/


console.log(msg.indexOf("World"));/*index  de premier occurance */

console.log(msg.charAt(6));/*index  de  premier caractere  */


console.log(msg.lastIndexOf("World"));/*index  de dernier occurance */

console.log(msg[2]);

console.log(msg.replace("World","everyone"));


var text = "skander,ayhem,saber,houssem";
var students = text.split(",");
console.log(text);
console.log(students);



console.log(msg.substring(0,6)); 


console.log(msg.slice(0,6));

var str1 = "welcome";
var str2 = "home";
var str3 = str1.concat(" ", str2, "!"); /*concatenation*/

console.log(str3);



var array = ["skander","ayhem","saber","houssem"];


console.log(array.length);

array.push("ghada")/*ajout a la fin du tableau*/
console.log(array);


array.unshift("ghada")/*ajout au debut du tableau*/
console.log(array);




array.pop()/*retire last element*/
console.log(array);


array.shift()/*retire first element*/
console.log(array);


console.log(array.indexOf("houssem"));// Cherche l'index de "houssem"



console.log(array.includes("rahma"));/*verifier si un element existe ou non*/


/*console.log(array.slice(1,3));/*portion du tableau */
console.log(array.splice(1,1,"foulan"));



var array1 = [1,2,3,4,5];


// Utilisation de splice pour supprimer 1 élément à partir de l'index 3 et ajouter 8
array1.splice(3,1,8);
console.log(array1);




// Boucle pour afficher les nombres de 0 à 5
for(var i = 0 ; i < 6 ; i++){
    console.log(i);
}



var k = 0; // Initialisation de la variable k à 0
while (k < 5) { // Tant que k est inférieur à 5
    console.log(k); // Affiche la valeur actuelle de k
    k++; // Incrémente k de 1
}




var m = 0; // Initialisation de la variable m à 0
do {
    console.log(m); // Affiche la valeur actuelle de m
    m++; // Incrémente m de 1
} while (m < 5); // Continue tant que m est inférieur à 5



var age = 9; // Initialisation de la variable age à 9

if (age >= 18) { // Vérifie si age est supérieur ou égal à 18
    console.log("adulte"); // Affiche "adulte" si la condition est vraie
} else {
    console.log("mineur"); // Affiche "mineur" si la condition est fausse
}




var fruits = "kiwi"; // Initialisation de la variable fruits avec la valeur "kiwi"

switch (fruits) {
    case "banane":
        console.log("you select the banana"); // Affiche ce message si fruits est "banane"
        break;
    case "kiwi":
        console.log("you select the kiwi"); // Affiche ce message si fruits est "kiwi"
        break;
    case "manga":
        console.log("you select the manga"); // Affiche ce message si fruits est "manga"
        break;
    default:
        console.log("fruit inconnu"); // Affiche ce message si aucune des conditions ci-dessus n'est vraie
}






var age = false; // Initialisation de la variable age à false
var permis = true; // Initialisation de la variable permis à true

// Première condition
if (age && permis) {
    console.log("you can drive"); // S'exécute si age est true ET permis est true
} else {
    console.log("you can't"); // S'exécute si l'une des conditions est false
}

// Deuxième condition
if (age || !permis) {
    console.log("you can drive"); // S'exécute si age est true OU permis est false
} else {
    console.log("you can't"); // S'exécute si age est false ET permis est true
}
