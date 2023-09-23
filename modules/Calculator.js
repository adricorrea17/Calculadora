import BtnResult from "./BtnResult.js";
import ButtonNumber from "./ButtonNumber.js";
import ButtonOperator from "./ButtonOperator.js";
export default class {
    constructor(element) {
        this.element = element;
        this.form = document.createElement('form');
        this.numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.operators = ['+','-','/','*'];

        this.form.innerHTML = `<input type="textfield" class="resultado" value="" placeholder = 0></input>`;
        this.element.append(this.form);

        let btnNumber = new ButtonNumber(this.numero, this.element);
        let btnOperator = new ButtonOperator(this.element, this.operators);
        let btnResult = new BtnResult(this.element);



        btnNumber.createElementButtonNumber();
        btnOperator.createElementButtonOperator();
        btnResult.createElementButtonResult();

        this.ShowNumberInput();

    }

    ShowNumberInput() {
        let operadores = document.querySelectorAll('.operator');
        let resultadoInput = document.querySelector('.resultado');
        let numeros = document.querySelectorAll('.numero');
        let operacion = '';

        numeros.forEach(element => {
            element.addEventListener('click', () => {
                operacion += element.value;
                resultadoInput.value = operacion;
                let btnResult = document.querySelector('.btnResult')
                btnResult.addEventListener('click', () => {
                    operacion = eval(operacion)
                    resultadoInput.value = operacion
                    
                })
                let btnReset = document.querySelector('.btnReset')
                btnReset.addEventListener('click', () => {
                    resultadoInput.value = ''
                    operacion = ''
                })

            });
        });

        operadores.forEach(element => {
            element.addEventListener('click', () => {
                operacion += element.value;
                resultadoInput.value = operacion;

            });
        });


    }




}