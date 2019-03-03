const sum = (valueA, valueB) => valueA + valueB;

const sub = (valueA, valueB) => valueA - valueB;

const mult = (valueA, valueB) => valueA * valueB;

const div = (valueA, valueB) => (valueB === 0 ? "não é possivel divisão por 0" : valueA / valueB);

export { sum, sub, mult, div };
