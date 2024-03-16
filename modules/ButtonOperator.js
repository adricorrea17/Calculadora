export default class {
    constructor(element, operator, div) {
        this.element = element
        this.operators = operator
        this.divNumber = div
    }

    createElementButtonOperator() {  
        this.operators.forEach(operator => {
            this.divNumber.innerHTML += `<input type="button" class="operator mb-3 p-3 mx-5 bg-blue-400 rounded hover:bg-blue-700 text-white border-2 border-white hover:text-white" value="${operator}">`
        });
    }
}