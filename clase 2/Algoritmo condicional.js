/* let userRegistrado = 'Pepe'
let userRegistrado2= 'Jose'
let passRegistrado = '1234'

let user = prompt('Ingrese su usuario')
let pass = prompt('Ingrese su pass')

if ((user== 'Pepe' && pass==1234) || (user=='Jose' && pass== 1234));{
 console.log('Bienvenido al sistema:' + user);
}

else if ((user!='Pepe') || (user!='Jose')){
    console.log('Ud no está registrado:' + user)
} */

/* let userRegistrado = 'Pepe'
let userRegistrado2= 'Jose'
let passRegistrado = '1234'
let user = prompt('Ingrese su usuario')
let pass = prompt('Ingrese su pass')
if ((user== 'Pepe' && pass==1234) || (user=='Jose' && pass== 1234)){
 alert('Bienvenido al sistema:' + user);
}
else if((user!='Pepe') || (user!='Jose')){
    alert('Ud no está registrado:' + user)
} */

let proveedorRegistrado = 'Colors'
let proveedorRegistrado2= 'Coderhouse'
let passRegistrado = '1234'
let proveedor= prompt('Ingrese su razón social')
let pass= prompt ('Ingrese su password')

if ((proveedor== 'Colors' && pass!='1234') || (proveedor== 'Coderhouse' && pass!='1234')){
    alert('Contraseña incorrecta:' + proveedor)
}

else if ((proveedor=='Colors' && pass=='1234') || (proveedor=='Coderhouse' && pass=='1234')){
    alert('Bienvenido al sistema:' + proveedor)
}

else if ((proveedor!='Colors') || (proveedor!='Coderhouse')){
    alert('Su razón social no está registrada en el sistema')
}

/* let numeroUno = parseInt(prompt ('Ingrese un número'));
let numeroDos = parseInt(prompt ('Ingrese otro número')); 

let suma = numeroUno + numeroDos
console.log(suma);

if (suma<=50 && suma>=10){
    console.log('La suma da entre 10 y 50')
}

if (suma>50){
    console.log('La suma es mayor a 50')
}

else if (suma<10){
    console.log('La suma es menor a 10')
} */
