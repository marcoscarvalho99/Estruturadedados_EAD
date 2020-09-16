import Pilha from '../src/pilha'


let p;

beforeEach(() => {
    p = new Pilha(20);
});

test("teste de adicão de elemento no push", () => {
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    expect(p.push("D")).toBe("D");
});

test("retirar elemento da pilha", () => {
    p.push("E");
    p.push("f");
    p.push("g");

    p.pop();
    expect(p.top()).toBe("f");
});




//QUESTÃO 2
test("inverter pilha", () => {
    p.push('A');
    p.push('B');
    p.push('A');
    p.push('C');
    p.push('A');
    p.push('X');
    p.push('I');
    expect(p.inversa()).toBe('IXACABA');
})
//questao3


//questão4

test("trocar topo da pilha com a primeira entrada", () => {
    p.push('A');
    p.push('B');
    p.push('C');
    p.push('D');
    p.push('E');
    expect(p.trocarTop()).toBe("E,B,C,D,A");
})

//questao 5

test("conversor decimal", () => {

    expect(p.converter(10)).toBe("1010");

});