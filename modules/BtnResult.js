export default class {
    constructor(element, div) {
        this.element = element;
        this.divNumber = div
    }

    createElementButtonResult() {  
        this.divNumber.innerHTML += `<input type="button" class="btnResult bg-green-600 rounded mb-3 p-3 mx-5 hover:bg-green-400 text-white  border-2 border-white" value="=">`
        this.divNumber.innerHTML += `<input type="button" class="btnReset bg-red-600 rounded mb-3 p-3 mx-5 hover:bg-red-400 text-white  border-2 border-white" value="C">`
    }
}