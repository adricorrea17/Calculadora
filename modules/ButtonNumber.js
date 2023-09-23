export default class {
    constructor(numero, element) {
        this.numero = numero;
        this.element = element;

    }

    createElementButtonNumber() {  
        this.numero.forEach(numero => {
            this.btn = this.element.innerHTML += `<input type="button" class="numero" value="${numero}">`
        });
    }
}