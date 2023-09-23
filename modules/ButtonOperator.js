export default class {
    constructor(element, operator) {
        this.element = element
        this.operators = operator

    }

    createElementButtonOperator() {  
        this.operators.forEach(operator => {
            this.element.innerHTML += `<input type="button" class="operator" value="${operator}">`
        });
    }
}