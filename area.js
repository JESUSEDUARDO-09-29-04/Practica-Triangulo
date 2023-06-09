var L1, L2, L3, p, s, a;
function Lad1(){
    L1=document.getElementById("L1").value 
    L1=Number.parseFloat(L1)
}
function Lad2(){
    L2=document.getElementById("L2").value 
    L2=Number.parseFloat(L2)
}
function Lad3(){
    L3=document.getElementById("L3").value 
    L3=Number.parseFloat(L3)
}
function ladoMy(){
if(L1 + L2 > L3 && L1 + L3 > L2 && L2+L3>L1)
{
    p = (L1+L2+L3);
    document.getElementById("perimetro").innerHTML="El perimetro del triangulo es: " + p;

    s = (L1 + L2 + L3)/ 2;
    document.getElementById("semiper").innerHTML="El semiperimeto  del triangulo es: " +s;

    a= Math.sqrt(s*(s-L1)*(s-L2)*(s-L3));
    document.getElementById("resultado").innerHTML= "El area del triangulo es: " + a;
    
}
    else
    {
        alert("Los lados no forman un triangulo valido");
    }
}