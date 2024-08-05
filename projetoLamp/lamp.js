// Utilizamos document.getElementById para selecionar os elementos do DOM (Document Object Model) pelos seus IDs.
// turnOn refere-se ao botão "Ligar".
// turnOff refere-se ao botão "Desligar".
// lamp refere-se à imagem da lâmpada.


const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

// lampOn(): Muda a src da imagem da lâmpada para ligada.jpg, ou seja, a lâmpada ligada.
// lampOff(): Muda a src da imagem da lâmpada para desligada.jpg, ou seja, a lâmpada desligada.
// lampBroken(): Muda a src da imagem da lâmpada para quebrada.jpg, ou seja, a lâmpada quebrada.
// lampNormal(): Retorna a imagem da lâmpada ao estado desligado se a imagem atual for a da lâmpada quebrada, ou mantém a imagem atual se não estiver quebrada.

function lampOn() {
    lamp.src = "./img/ligada.jpg";
}

function lampOff() {
    lamp.src = "./img/desligada.jpg";
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg";
}

function lampNormal() {
    lamp.src = lamp.src.includes('quebrada') ? "./img/desligada.jpg" : lamp.src;
}

// turnOn.addEventListener('click', lampOn): Adiciona um ouvinte de evento para o botão "Ligar". Quando clicado, chama a função lampOn que liga a lâmpada.
// turnOff.addEventListener('click', lampOff): Adiciona um ouvinte de evento para o botão "Desligar". Quando clicado, chama a função lampOff que desliga a lâmpada.
// lamp.addEventListener('mouseenter', lampBroken): Adiciona um ouvinte de evento para a imagem da lâmpada. Quando o mouse passa sobre a imagem (evento mouseenter), a função 
// lampBroken é chamada, mostrando a lâmpada quebrada.
// lamp.addEventListener('mouseleave', lampNormal): Adiciona um ouvinte de evento para a imagem da lâmpada. Quando o mouse sai da imagem (evento mouseleave), a função lampNormal é chamada, 
// retornando a imagem da lâmpada ao estado desligado (se estava quebrada) ou mantendo o estado atual (se não estava quebrada).

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseenter', lampBroken);
lamp.addEventListener('mouseleave', lampNormal);