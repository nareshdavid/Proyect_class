let smlv=parseFloat(prompt("INgrese salario minimo legal vigente año actual"));
let subtte=parseFloat(prompt("Ingrese subsidio transporte año actual"));
function liquidar(){

    //SUELDO BASICO//
    let n1=document.getElementById("salario").value;
    let n2=document.getElementById("dias").value;
    sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=sueldo.toFixed(0);

    //SUBSIDIO DE TRANSPORTE
    if (n1>=2*smlv){
        subsidiot=0;
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=parseInt(subtte)/30*parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }

    //RECARGO NOCTURNO//
    let nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0);

    //TOTAL DEVENGADO//
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    
    //LAOJAR  TOT DEVENGADO EN UNA VARIABLE
    let totaldevo=document.getElementById("totaldev").value;

    //SECCION DE DEDUCCIONES
    let eps00=(totaldevo-subsidiot)*0.04;
    let pen00=(totaldevo-subsidiot)*0.04;
    document.getElementById("eps").value=eps00.toFixed(0);

    //Fondo de solidaridad
    let fondo=0;
    if (n1>=4*smlv){
        let fondo=totaldevo*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
}
//prestamo
let presta=document.getElementById("totaldedu").value;
//total deducciones
document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)
+parseFloat(document.getElementById('prestam').value)
+parseFloat(document.getElementById('eps').value)
+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
//
let totalddc=document.getElementById("totaldedu").value
let vneto=totaldevo-totalddc;   

//Total Neto pagado
document.getElementById("neto").value=vneto.toFixed(0);
}
