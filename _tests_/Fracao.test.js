import Fracao from '../src/Fracao'

let f;

beforeEach(() => {
    f = new Fracao;
});


test("teste de multiplicação da fração", () => {

    expect(f.multiplicacao(5, 7)).toBe(25 + "/" + 35);
});



test("teste de divisão da fração", () => {

    expect(f.divisao(7, 3)).toBe(35 + "/" + 15);
})
