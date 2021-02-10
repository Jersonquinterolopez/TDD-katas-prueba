const fizzbuzz = require('../src/fizzbuzz');

describe('Kata FIZZ BUZZ', () => {
  it('Should return a given number as a String', () => {
    expect(fizzbuzz(1)).toEqual('1');
  });

  it('Should return FIZZ if number is divisible by 3', () => {
    expect(fizzbuzz(6)).toEqual('FIZZ');
    expect(fizzbuzz(9)).toEqual('FIZZ');
    expect(fizzbuzz(12)).toEqual('FIZZ');
  });

  it('Should return BUZZ if number is divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('BUZZ');
    expect(fizzbuzz(10)).toEqual('BUZZ');
  });

  it('Should return FIZZBUZZ if number is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual('FIZZBUZZ');
    expect(fizzbuzz(30)).toEqual('FIZZBUZZ');
    expect(fizzbuzz(45)).toEqual('FIZZBUZZ');
  });
});
