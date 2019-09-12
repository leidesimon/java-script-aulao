// let escada = [
//     {degrau: "#", numero: 1},
//     {degrau: "##", numero: 2},
//     {degrau: "###", numero: 3},
//     {degrau: "####", numero: 4},
//     {degrau: "#####", numero: 5},
//     {degrau: "######", numero: 6},
// ];

// let material = "#";
// let qtdDegrau = "6";

let i = 0;
let material = prompt("Digite com que símbolo quer construir a sua escada");
let qtdDegrau = Number(prompt("Digite o números de degraus que a sua escada vai ter"));
let escada = "";

whilen (i < qtdDegrau;i++){
    escada+=material;
    console.log(escada);

}

cont gerarAleatorio = (min, max) => {
    return Math.floor(Math.random()*(max - min +1))+ min;
}



