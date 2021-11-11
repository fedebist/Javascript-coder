function precioSinDcto(precio, dia){
    if (dia!='martes' || dia != 'Martes' || dia!= 'MARTES'){
        let precioSinDcto = precio * 1
        return precioSinDcto;
    }
}

function cdni(precio, dia){

    if (dia=='martes' || dia=='Martes' || dia=='MARTES'){
        let descuentoCdni = precio * 0.8;
        alert('El precio final con el descuento es: $ ' + descuentoCdni);
    }

    else{
        alert('Hoy no hay ningún descuento. Nota: Martes 20% con Cuenta DNI');
        alert('El precio del producto es: ' + precio + '$');
    }


}

function ivaProducto(precio){
    let iva= precio* 0.21;
    return iva;
}



let precio = parseInt(prompt('Ingrese el precio del producto'));
let dia = prompt('Ingrese el día');

let resultado = cdni(precio,dia);

let resultadoSinDcto= precioSinDcto(precio, dia);

let iva= ivaProducto(precio);
alert('IVA del producto: $' + iva)

 let dctoCdni = cdni(precio,dia);

 let precioFinal = precio + ivaProducto(precio);
alert('El total es de: $ ' + precioFinal);