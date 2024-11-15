
const funFacts = [
    "Nature enthusiast with a love for mountains, snow, and beaches.",
    "I love to code often",
    "Creative spirit with interests in drawing and cooking.",
    "I love to listen to music",

];

function generateFact() {
    const Display = document.getElementById('display');
    const random = Math.floor(Math.random() * funFacts.length);
    Display.textContent = funFacts[random];
}
