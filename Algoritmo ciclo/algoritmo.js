let voto = prompt('Ingrese su voto A o B')
let votoA= 0;
let votoB= 0;
let votoBalotajeA= 0;
let votoBalotajeB= 0;

while(voto!='Salir'){
    if(voto=='A' || voto=='a'){
    alert('Usted votó por A');
    alert(votoA= votoA+1);
    voto = prompt('Ingrese su voto A o B');
    }
    else if(voto=='B' || voto=='b'){
        alert('Usted votó por B');
       alert( votoB= votoB+1);
       voto = prompt('Ingrese su voto A o B')
    }
    else{
        alert('Voto nulo');
        break;
    }

}

alert('VOTOS DE A: ' + votoA);
alert('VOTOS DE B: ' + votoB);

if(votoA>votoB){
    alert('PARTIDO A ES EL GANADOR')
}

if(votoB>votoA){
    alert('PARTIDO B ES EL GANADOR')
}

else if(votoA==votoB){
    alert('Empate: BALOTAJE')
    do{
    var votoBalotaje = prompt('BALOTAJE: Ingrese su voto A o B');
    }while(votoA==votoB && votoA!='Salir' && votoB!='Salir'){
    if(voto=='A' || voto=='a'){
        alert('Usted votó por A');
        alert(votoBalotajeA= votoBalotajeA+1);
        votoBalotaje = prompt('BALOTAJE: Ingrese su voto A o B');
    }
     else if(voto=='B' || voto=='b'){
            alert('Usted votó por B');
           alert( votoBalotajeB= votoBalotajeB+1);
           voto = prompt('BALOTAJE: Ingrese su voto A o B');
}
    
}

}


alert('VOTOS DE A: ' + votoBalotajeA);
alert('VOTOS DE B: ' + votoBalotajeB);

if(votoBalotajeA>votoBalotajeB){
    alert('PARTIDO A ES EL GANADOR')
}

if(votoBalotajeB>votoBalotajeA){
    alert('PARTIDO B ES EL GANADOR')
}
