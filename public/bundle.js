/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Copo.js"
/*!*****************!*\
  !*** ./Copo.js ***!
  \*****************/
(module) {

eval("{class Copo {\r\n    constructor(altura, raioMenor, raioMaior) {\r\n        this.altura = altura;\r\n        this.raioMenor = raioMenor;\r\n        this.raioMaior = raioMaior;\r\n    }\r\n\r\n    calcularGeratriz() {\r\n        return Math.sqrt(Math.pow(this.altura, 2) + Math.pow(this.raioMaior - this.raioMenor, 2));\r\n    }\r\n\r\n    calcularABmenor() {\r\n        return Math.PI * Math.pow(this.raioMenor, 2);\r\n    }\r\n\r\n    calcularABmaior() {\r\n        return Math.PI * Math.pow(this.raioMaior, 2);\r\n    }\r\n\r\n    calcularAreaLateral() {\r\n        const g = this.calcularGeratriz();\r\n        return Math.PI * g * (this.raioMaior + this.raioMenor);\r\n    }\r\n\r\n    calcularAreaTotal() {\r\n        return this.calcularABmenor() + this.calcularABmaior() + this.calcularAreaLateral();\r\n    }\r\n\r\n    calcularVolume() {\r\n        return (Math.PI * this.altura / 3.0) * (Math.pow(this.raioMaior, 2) + (this.raioMaior * this.raioMenor) + Math.pow(this.raioMenor, 2));\r\n    }\r\n\r\n    classificar() {\r\n        const volume = this.calcularVolume();\r\n        if (volume >= 0.0 && volume < 180.0) {\r\n            return 'Copo Dose ( Cafezinho )';\r\n        } else if (volume >= 180.0 && volume <= 350.0) {\r\n            return 'Copo Padrão (Água / Chá)';\r\n        } else if (volume > 350.0) {\r\n            return 'Copo Grande (Suco / Refrigerante)';\r\n        } else {\r\n            return 'Valor inválido';\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Copo;\n\n//# sourceURL=webpack://treinando_prog_01_09/./Copo.js?\n}");

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const Copo = __webpack_require__(/*! ./Copo.js */ \"./Copo.js\");\r\n\r\nlet btnCalcular = document.getElementById('btnCalcular');\r\nlet resposta = document.getElementById('resposta');\r\n\r\nbtnCalcular.addEventListener('click', () => {\r\n    let altura = Number(document.getElementById('altura').value);\r\n    let raioMenor = Number(document.getElementById('raioMenor').value);\r\n    let raioMaior = Number(document.getElementById('raioMaior').value);\r\n\r\n    const copo = new Copo(altura, raioMenor, raioMaior);\r\n\r\n    const geratriz = copo.calcularGeratriz();\r\n    const areaBasemenor = copo.calcularABmenor();\r\n    const areaBasemaior = copo.calcularABmaior();\r\n    const areaLateral = copo.calcularAreaLateral();\r\n    const areaTotal = copo.calcularAreaTotal();\r\n    const volume = copo.calcularVolume();\r\n    const classificar = copo.classificar();\r\n\r\n    resposta.innerHTML = `\r\n        <p>Valor geratriz: ${geratriz.toFixed(2)} cm</p>\r\n        <p>Valor da área da base menor: ${areaBasemenor.toFixed(2)} cm²</p>\r\n        <p>Valor da área da base maior: ${areaBasemaior.toFixed(2)} cm²</p>\r\n        <p>Valor da área lateral: ${areaLateral.toFixed(2)} cm²</p>\r\n        <p>Valor da área total: ${areaTotal.toFixed(2)} cm²</p>\r\n        <p>Valor do volume: ${volume.toFixed(2)} ml</p>\r\n        <p>Classificação: ${classificar}</p>\r\n    `;\r\n});\n\n//# sourceURL=webpack://treinando_prog_01_09/./index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;