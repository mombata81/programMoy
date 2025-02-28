import promptSync from "prompt-sync";  
const prompt = promptSync();  

// Pedir datos al usuario
let peso: number = Number(prompt("Introduce tu peso en kg: "));
let altura: number = Number(prompt("Introduce tu altura en metros: "));

// Calcular IMC
let imc: number = peso / (altura * altura);

// Determinar categoría
let categoria: string;

if (imc < 18.5) {
    categoria = "Bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}

// Mostrar resultado
console.log(`Tu IMC es: ${imc.toFixed(2)} (${categoria})`);
