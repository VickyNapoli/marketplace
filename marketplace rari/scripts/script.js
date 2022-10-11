function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('cajadeproducto');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

let products = [];
let total = 0;

function add(product, price){
    console.log(product, price); 
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`

    
}
function pay(){
    window.alert(products.join(", \n"));
    total = 0;
    products = [];
    document.getElementById("checkout").innerHTML = `Pagar $${total}`

}

function darkMode() {
      
    const fecha = new Date(); 
    const hora = fecha.getHours();
   
    if(hora >= 0 && hora < 18){
        document.body.style.background = `white`;
    }
        else if(hora >= 18 && hora < 24){
            document.body.style.background = `white`;
    }
        else{
            alert("algo anda mal")
    }}

window.addEventListener("load",function() { darkMode() });
  

