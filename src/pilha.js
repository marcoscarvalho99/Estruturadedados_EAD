export default class Pilha {



    constructor(tam = 10) {
        this.topo = - 1;
        this.maxsize = tam;
        this.dados = [];
        //pilha invertida
        this.pilha2 = [];
    }

    //insere um elemento na pilha
    push(dado) {
        if (this.isFull()) {
            throw new Error("overflow ou pilha cheia");
        } else {
            this.dados[++this.topo] = dado;
        }
        return this.dados[this.topo];
    }

    //retira um elemento na pilha
    pop() {

        if (this.isEmpty()) {
            throw new Error("underflow ou pilha vazia");
        } else {

            this.dados[this.topo--];

        }

        return this.dados[this.topo + 1];

    }

    //retorna qunatos elementos existe na pilha
    size() {
        //aqui o tamanho começa em 0
        return this.topo + 1;
    }
    //retorna se a pilha esta vazia ou não
    isEmpty() {
        return this.size() === 0;
    }
    //retorna se a pilha esta cheia
    isFull() {

        return this.size() === this.maxsize;

    }
    //retorna o topo da pilha.
    top() {
        if (this.isEmpty()) {
            throw new Error("underflow ou pilha vazia");
        } else {
            return this.dados[this.topo];

        }
    }

    toString() {
        if (this.isEmpty()) {
            throw new Error("underflow ou pilha vazia");
        }

        else {

            let tam = this.size();
            let to = "";
            for (let i = 0; i < tam; i++) {

                to += this.pop();

            }
            return to;

        }




    }



    inversa() {
        let tam = this.size();
        let va = "";
        for (let i = 0; i < tam; i++) {

            this.pilha2[i] = this.pop();

        }

        for (let i = 0; i < tam; i++) {

            this.push(this.pilha2[i]);

            va += this.pilha2[i];
        }


        return va;


    }


    trocarTop() {
        let tam = this.size();
        let va = "";
        let auxA, auxB;

        for (let i = 0; i < tam; i++) {
            if (i == 0) {
                auxA = this.pop();
            }
        }

        for (let i = 0; i < tam; i++) {
            if (i < tam - 2) {
                this.pilha2[i] = this.pop();
            }
        }
        auxB = this.pop();

        this.push(auxA)
        let c = this.pilha2.length - 1;
        for (let i = 0; i < this.pilha2.length; i++) {
            this.push(this.pilha2[c--]);
        }
        this.push(auxB);

        return "" + this.dados;

    }

    converter(dado) {
        let convertido = "";
        while (dado > 1) {

            if (parseInt(dado % 2) === 0) {
                this.push(0);
            } else {
                this.push(1);
            }

            dado = dado / 2;


        }

        while (!this.isEmpty()) {
            convertido += this.pop();

        }


        return convertido;
    }

}