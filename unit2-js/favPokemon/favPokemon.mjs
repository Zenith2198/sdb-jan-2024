import readline from "readline";

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//fetch all pokemon data from pokeapi
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
const allPokemon = await response.json();

//convert allPokemon.results from array of objects to array of names
const pokemonNames = allPokemon.results.map((element) => element.name);

//your code here!
let favPokemon = await ask("What's your favorite pokemon? ");
while (!pokemonNames.includes(favPokemon.toLowerCase())) {
	favPokemon = await ask("That's not a pokemon! What's your favorite pokemon? ");
}
console.log(`${favPokemon.toLowerCase()} is a great Pokemon!`);
//end your code

process.exit();