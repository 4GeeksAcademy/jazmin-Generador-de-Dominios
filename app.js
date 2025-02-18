let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let mezclaArrays = [];
let count = 1;

for (let elementP of pronoun) {
    for (let elementA of adj) {
        for (let elementN of noun) {
            let links = `${elementP}${elementA}${elementN}.com`;
            mezclaArrays.push(`${count}. ${links}`);
            count++;
        }
    }
}

console.log(mezclaArrays.join("\n"));