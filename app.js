import Calculator from "./modules/Calculator.js";
document.addEventListener('DOMContentLoaded', function() {

    let containerCalculator = document.querySelectorAll('.calculator')
    containerCalculator.forEach(element => {
        let ObjectCalculator = new Calculator(element)
    });

});
