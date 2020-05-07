function myFunction(){
    let price = document.getElementById("price").value;
    let quality = document.getElementById("quality").value;
    let total = Math.ceil(price * quality);
    document.getElementById("results").innerHTML = "$" + total ;
    }
    