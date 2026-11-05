//estudiantes = ["Luis","Ana","Pedro","Maria"];
//notas =[4.0,2.5,3.0,5.0];

listadoNotas = [
    {nombre: "Luis", nota: 4.0}, //0
    {nombre: "Ana", nota: 2.5}, //1
    {nombre: "Pedro", nota: 1.0}, //2
    {nombre: "Maria", nota: 5.0}, //3
    {nombre: "Carlos", nota: 4.5}, //4
    {nombre: "Karol", nota: 2.9}//5
]

const lista = document.getElementById('lista');

for(let i=0;i<listadoNotas.length;i++){
//console.log("Estudiante: "+listadoNotas[i].nombre+" -Nota de: "+listadoNotas[i].nota);

const registro = document.createElement('div');

registro.textContent = "Estudiante: "+listadoNotas[i].nombre+" -Nota de: "+listadoNotas[i].nota;

registro.classList.add('tarjeta');

lista.appendChild(registro);
if(listadoNotas[i].nota===5.0){
    registro.style.backgroundColor = 'gold';
    registro.style.color = 'darkgreen';
    registro.style.fontWeight = 'bold';
    registro.style.fontSize = '1.3rem';
}
else{
if(listadoNotas[i].nota>=3.0){
    registro.classList.add('aprobado');
} else {
    registro.classList.add('desaprobado');
}
}}