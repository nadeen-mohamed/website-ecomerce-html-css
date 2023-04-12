let http = new XMLHttpRequest();
http.open('get','https://dummyjson.com/products/1',true);
http.send();
http.onload =function(){
    if (this.readyState==4&&this.status==200) {
        
       let single-product=JSON.parse(this.responseText );
    
       for(let item of single-product ){
        document.getElementById("pro").innerHTML+=item["description"]
       }
       
    }
}