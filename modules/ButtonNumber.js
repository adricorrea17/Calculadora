export default class {
    constructor(numero, element, div) {
        this.numero = numero;
        this.element = element;
        this.divNumber = div

    }

    createElementButtonNumber() {  
        this.numero.forEach(numero => {
            this.btn = this.divNumber.innerHTML += `<input type="button" class="numero hover:bg-gray-300 rounded mb-3 p-3 mx-5 bg-gray-600 hover:text-black text-white border-2 border-gray-300" value="${numero}">`
        });
    }
}