class Copo {
    constructor(altura, raioMenor, raioMaior) {
        this.altura = altura;
        this.raioMenor = raioMenor;
        this.raioMaior = raioMaior;
    }

    calcularGeratriz() {
        return Math.sqrt(Math.pow(this.altura, 2) + Math.pow(this.raioMaior - this.raioMenor, 2));
    }

    calcularABmenor() {
        return Math.PI * Math.pow(this.raioMenor, 2);
    }

    calcularABmaior() {
        return Math.PI * Math.pow(this.raioMaior, 2);
    }

    calcularAreaLateral() {
        const g = this.calcularGeratriz();
        return Math.PI * g * (this.raioMaior + this.raioMenor);
    }

    calcularAreaTotal() {
        return this.calcularABmenor() + this.calcularABmaior() + this.calcularAreaLateral();
    }

    calcularVolume() {
        return (Math.PI * this.altura / 3.0) * (Math.pow(this.raioMaior, 2) + (this.raioMaior * this.raioMenor) + Math.pow(this.raioMenor, 2));
    }

    classificar() {
        const volume = this.calcularVolume();
        if (volume >= 0.0 && volume < 180.0) {
            return 'Copo Dose ( Cafezinho )';
        } else if (volume >= 180.0 && volume <= 350.0) {
            return 'Copo Padrão (Água / Chá)';
        } else if (volume > 350.0) {
            return 'Copo Grande (Suco / Refrigerante)';
        } else {
            return 'Valor inválido';
        }
    }
}

module.exports = Copo;