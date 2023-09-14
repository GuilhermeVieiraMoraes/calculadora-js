function Calculadora(){
    this.display = document.querySelector('.display');

    this.capturaEnter = () => {
        document.addEventListener('keypress', e =>{
            if(e.keyCode !== 13) return;
            this.realizaConta();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e){
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = (element) => this.display.value += element.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
    
}
const calculadora = new Calculadora();
calculadora.inicia();