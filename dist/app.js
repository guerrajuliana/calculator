"use strict";
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.display = document.getElementById('display');
        this.isNewCalculation = false;
        if (!this.display) {
            console.error("Display element not found.");
        }
        this.setupButtons();
    }
    Calculator.prototype.setupButtons = function () {
        var _this = this;
        var buttons = document.querySelectorAll('button');
        buttons.forEach(function (button) {
            button.addEventListener('click', function () { return _this.handleButtonClick(button.textContent || ''); });
        });
    };
    Calculator.prototype.handleButtonClick = function (value) {
        if (this.isNewCalculation) {
            this.clearDisplay();
            this.isNewCalculation = false;
        }
        if (value === '=') {
            this.calculateResult();
        }
        else if (value === 'C') {
            this.clearDisplay();
        }
        else {
            this.appendToDisplay(value);
        }
    };
    Calculator.prototype.appendToDisplay = function (value) {
        if (this.display) {
            this.display.value += value;
        }
    };
    Calculator.prototype.clearDisplay = function () {
        if (this.display) {
            this.display.value = '';
        }
    };
    Calculator.prototype.calculateResult = function () {
        if (this.display) {
            try {
                var result = eval(this.display.value);
                this.display.value = result.toString();
                this.isNewCalculation = true;
            }
            catch (error) {
                console.error("Error in calculation:", error);
            }
        }
    };
    return Calculator;
}());
var calculator = new Calculator();
