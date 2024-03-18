class Calculator {
    private display: HTMLInputElement | null;
    private isNewCalculation: boolean;

    constructor() {
        this.display = document.getElementById('display') as HTMLInputElement;
        this.isNewCalculation = false;
        if (!this.display) {
            console.error("Display element not found.");
        }
        this.setupButtons();
    }

    setupButtons(): void {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => this.handleButtonClick(button.textContent || ''));
        });
    }

    handleButtonClick(value: string): void {
        if (this.isNewCalculation) {
            this.clearDisplay();
            this.isNewCalculation = false;
        }
        if (value === '=') {
            this.calculateResult();
        } else if (value === 'C') {
            this.clearDisplay();
        } else {
            this.appendToDisplay(value);
        }
    }

    appendToDisplay(value: string): void {
        if (this.display) {
            this.display.value += value;
        }
    }

    clearDisplay(): void {
        if (this.display) {
            this.display.value = '';
        }
    }

    calculateResult(): void {
        if (this.display) {
            try {
                const result = eval(this.display.value);
                this.display.value = result.toString();
                this.isNewCalculation = true;
            } catch (error) {
                console.error("Error in calculation:", error);
            }
        }
    }
}

const calculator = new Calculator();
