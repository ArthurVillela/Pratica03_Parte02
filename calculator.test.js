//import { expect, test } from '@jest/globals';
//import * as calculator from './calculator.js';
const calculator = require('./calculator');

test("testando soma de 1+1", () => {
    expect(calculator.soma(1,1)).toBe(2)
});
test("testando divisao de 42/6", () => {
    expect(calculator.divisao(42,6)).toBe(7)
});
test("testando multiplicacao de 5*2", () => {
    expect(calculator.multiplicacao(5,2)).toBe(10)
});
test("testando soma de 10+7", () => {
    expect(calculator.soma(10,7)).toBe(17)
});