var color = prompt('Scegli il tuo colore preferito');
//window.alert('Sto studiando JS');
if(color == "rosso"){
   document.getElementById("contenitore").style.backgroundColor = "red";
}else if(color == "verde"){
    document.getElementById("contenitore").style.backgroundColor = "green";
}else if(color == "blu"){
    document.getElementById("contenitore").style.backgroundColor = "blue";
}else {
    document.write("Scegli tra rosso, verde o blu, siamo poveri :(")
}