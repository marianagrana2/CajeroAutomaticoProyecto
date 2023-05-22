const usuario = localStorage.getItem('usuario')
const bienvenido = document.getElementById('bienvenido').innerHTML = `Bienvenido/a ${usuario}`

function changePage1(){
    window.location.href = '/opciones/consultaSaldo/consultaSaldo.html';
}
function changePage2(){
    window.location.href = '/opciones/ingresoMonto/ingresoMonto.html';
}
function changePage3(){
    window.location.href = '/opciones/retiroMonto/retiroMonto.html';
}