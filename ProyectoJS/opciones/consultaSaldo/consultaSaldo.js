const usuario = localStorage.getItem('usuario')
const bienvenido = document.getElementById('bienvenido').innerHTML = `Usuario: ${usuario}`

const money = Number(localStorage.getItem('money'));
const saldo = document.getElementById('saldo').innerHTML = `Su saldo disponible es: $${money}`