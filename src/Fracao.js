class Fracao {

    constructor() {
        this.numerador = 5;
        this.denominador = 5;
    }

    multiplicacao(num, den) {

        let nume = num * this.numerador;
        let deno = den * this.denominador;

        return nume + "/" + deno;
    }

    divisao(num, den) {

        let nume = num * this.denominador;
        let deno = den * this.numerador;

        return nume + "/" + deno;

    }

}
export default Fracao;