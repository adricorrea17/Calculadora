export default class {
    constructor(element) {
        this.element = element;
    }

    createElementButtonResult() {  
            this.element.innerHTML += `<input type="button" class="btnResult" value="=">`
            this.element.innerHTML += `<input type="button" class="btnReset" value="C">`
    }
}