const Copo = require('./Copo.js');

let btnCalcular = document.getElementById('btnCalcular');
let resposta = document.getElementById('resposta');

btnCalcular.addEventListener('click', () => {
    let altura = Number(document.getElementById('altura').value);
    let raioMenor = Number(document.getElementById('raioMenor').value);
    let raioMaior = Number(document.getElementById('raioMaior').value);

    const copo = new Copo(altura, raioMenor, raioMaior);

    const geratriz = copo.calcularGeratriz();
    const areaBasemenor = copo.calcularABmenor();
    const areaBasemaior = copo.calcularABmaior();
    const areaLateral = copo.calcularAreaLateral();
    const areaTotal = copo.calcularAreaTotal();
    const volume = copo.calcularVolume();
    const classificar = copo.classificar();

    resposta.innerHTML = `
        <p>Valor geratriz: ${geratriz.toFixed(2)} cm</p>
        <p>Valor da área da base menor: ${areaBasemenor.toFixed(2)} cm²</p>
        <p>Valor da área da base maior: ${areaBasemaior.toFixed(2)} cm²</p>
        <p>Valor da área lateral: ${areaLateral.toFixed(2)} cm²</p>
        <p>Valor da área total: ${areaTotal.toFixed(2)} cm²</p>
        <p>Valor do volume: ${volume.toFixed(2)} ml</p>
        <p>Classificação: ${classificar}</p>
    `;
});