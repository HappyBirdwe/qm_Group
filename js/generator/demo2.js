function* lyrics() {
    yield `My achy breaky heart`;
    yield `I just don't think he'd understand`;
    yield `And if you tell my heart`;
    yield `My achy breaky heart`;
    yield `He might blow up and kill this man`;
}

const achy = lyrics();

//Es6循环新特性 
for (const line of achy) {
    console.log(line);
}