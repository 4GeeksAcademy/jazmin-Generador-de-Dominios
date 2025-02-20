let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

let mezclaArrays = [];
let count = 1;

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            let links = `${pronoun}${adj}${noun}.com`;
            mezclaArrays.push(`${count}.${links}`);
            count++;
        }
    }
}

console.log(mezclaArrays.join("\n"));
