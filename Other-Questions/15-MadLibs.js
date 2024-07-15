const name = prompt('Enter your name:');
const word1 = prompt('Enter a noun:');
const word2 = prompt('Enter an adjective:');
const word3 = prompt('Enter a verb (present tense):');
const word4 = prompt('Enter another noun:');
const word5 = prompt('Enter another adjective:');
const color = prompt('Enter a color name or hex value (e.g., red or #00FF00):');

const story = `
    Once upon a time, ${name} found a magical ${word1} in a ${word2} forest.
    Excitedly, ${name} ${word3} the ${word1} and discovered it led to a hidden ${word4}.
    The ${word4} was filled with ${word5} flowers that sparkled in the ${color} sunlight.
`;

document.write(`<div>${story.replace(name, `<span style="color: ${color};">${name}</span>`)}</div>`);
document.write(`<div>${story.replace(word1, `<span style="color: ${color};">${word1}</span>`)}</div>`);
document.write(`<div>${story.replace(word2, `<span style="color: ${color};">${word2}</span>`)}</div>`);
document.write(`<div>${story.replace(word3, `<span style="color: ${color};">${word3}</span>`)}</div>`);
document.write(`<div>${story.replace(word4, `<span style="color: ${color};">${word4}</span>`)}</div>`);
document.write(`<div>${story.replace(word5, `<span style="color: ${color};">${word5}</span>`)}</div>`);
