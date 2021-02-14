const urlParams = new URLSearchParams(window.location.search);
//in the URL grab id and store it´s value in id
const id = urlParams.get("id");
console.log( id );



const url = "https://kea-alt-del.dk/t7/api/products/2801"
//fetch the data
fetch(url)
    .then(res=>res.json())
    .then(data=>showProduct(data))
    
//populate the page
function showProduct(product) {
    console.log(product);
    document.querySelector(".smallProduct .brand").textContent=product.brandname;
    document.querySelector(".smallProduct .productname").textContent=product.productdisplayname;
    document.querySelector("img.productimg").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector("img.productimg").alt=product.productdisplayname;

}



