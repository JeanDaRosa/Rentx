const numbers = [
    {
        name: "joão",
        idade: 20,
    },
    {
        name: "joão",
        idade: 20,
    },
    {
        name: "joão",
        idade: 20,
    },
    {
        name: "joão",
        idade: 20,
    },
];

const isNumber = numbers.map((element) => {
    return element;
});

console.log(isNumber);

numbers.push({
    name: "jean",
    idade: 23,
});

const isNumber2 = numbers.map((element) => {
    return element;
});

console.log(isNumber2);
