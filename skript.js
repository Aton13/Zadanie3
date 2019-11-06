//Premenne
id="Premenna x"
id="Premenna y"
id="Premenna w"
id="Premenna b"
id="Premenna a"
var x=1000;
var y=5000;
var w=1+2+3;
var a="auto" , b="strom"; 
document.getElementById("Premenna x").innerHTML = x; 
document.getElementById("Premenna y").innerHTML = y;
document.getElementById("Premenna w").innerHTML = w; 
document.getElementById("Premenna a").innerHTML = a;
document.getElementById("Premenna b").innerHTML = b;

//Operatory
id="Operator 1"
id="Operator 2"
id="Operator 3"
var c=x+y;
 y*=x;
 var z=b+'   '+'a'+'   '+a;
 document.getElementById("Operator 1").innerHTML = c;
 document.getElementById("Operator 2").innerHTML = y;
 document.getElementById("Operator 3").innerHTML = z;

 //Funkcie
 id="Funkcia"
function Funkcia(a,b){
    return a** + b; 
}
var d=Funkcia(w,2);
document.getElementById("Funkcia").innerHTML = d;

//Objekty
id="Objekt 1"
id="Objekt 2"
var Zviera = {typ:"Domace", druh:"macka", farba:"biela"};
var Osoba = {meno: "Peter", priezvisko: "Myslivec", vek:"45",obec:"Malacky"};
document.getElementById("Objekt 1").innerHTML =Zviera.typ + " zviera " + Zviera.druh + " je " + Zviera.farba + ".";
document.getElementById("Objekt 2").innerHTML =Osoba.meno +" "+ Osoba.priezvisko + " ma " + Osoba.vek + " rokov.";

//Arraye
id="Array1"
id="Array2"
var Mesta =["Bratislava","Kosice","Trencin","Trnava","Zilina"];
var cisla=[1,2,3,4,5];
document.getElementById("Array1").innerHTML = Mesta;
document.getElementById("Array2").innerHTML = cisla;

//if, else
id="Ifelse"
var den = new Date().getDay(); 
var cas;
    if ( den > 5) {
      cas = "Vikend";
    } else {
      cas = "Pracovny den";
    }
    document.getElementById("Ifelse").innerHTML = cas;

//cykly
id="cyklus"
Array_dlzka = Mesta.length;

text = "";
for (i = 0; i < Array_dlzka; i++) {
  text += "<br>"+ Mesta[i] +"</br>";
}
text += "";

document.getElementById("cyklus").innerHTML = text;

//array map
id="arraymap"
var k = cisla.map(Math.cos);
document.getElementById("arraymap").innerHTML = k;

//array forEach
id="arrayforEach"
var s=0;

cisla.forEach(Suma);

function Suma(x) {
  s += x;
  document.getElementById("arrayforEach").innerHTML = s;
}

//array find
id="arrayfind"
function f(u) {
    return u >= 4;
 }
  document.getElementById("arrayfind").innerHTML = cisla.find(f);

//array find index
id="arrayfindindex"
function f(u) {
    return u >= 4;
 }
  document.getElementById("arrayfindindex").innerHTML = cisla.findIndex(f);

//array push
id="arraypush"
Mesta.push("Nitra", "Presov", "Banska Bystrica");
document.getElementById("arraypush").innerHTML = Mesta ;

//arrayjoin
id="arrayjoin"
join=Mesta.join("<br>")
document.getElementById("arrayjoin").innerHTML = join ;
