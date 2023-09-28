// const { json } = require("express");

let form = document.querySelector("form");
console.log(form);
let alertOutput=document.getElementById('alertOutput')

form.addEventListener("submit",e=>{
    e.preventDefault();
    let input=document.getElementById('input').value;

    let alphabets=/[A-Za-z]+$/;

    if(input.length==0){
        alertOutput.innerText="field should not be empty"
    }
    else if(!input.match(alphabets)){
        alertOutput.innerText=`only alphabets are allowed but you entered  '${input}'`
    }
   else if(input.length<6 || input.length>10){
        alertOutput.innerText="Form not submitted because input length should be between 6 & 10 character"
    }
    else{
        alertOutput.innerText="Form submitted successfully"
    }
    setTimeout(()=>{
        alertOutput.innerText=""
    },5000)


    const display = (products) => {
    // let data = products.data
    let clothes = products.map((clothe)=>{
        return(
        `<div class="card">
        <div >Id : ${clothe.id}</div>
        <div>Image : <img class="image"src="${clothe.image}"></div>
        <div>Price : ${clothe.price}</div>
        <div>Category : ${clothe.category}</div>
        </div>`)
    });
    document.querySelector(".products").innerHTML = clothes
}

    fetch('https://fakestoreapi.com/products')
            .then(res=> res.json() )
            .then(products=>display(products))

})

//* search products from end point.
    function searchProducts() {
	let input = document.getElementById('search');
	let searchButton = document.getElementById('btn');
	
    searchButton.addEventListener('click', (e)=>{
        e.preventDefault();

        const display = (products) => {
        let productName=input.value.toLowerCase();
        let filterProducts=products.filter((p)=>{
            return p.category.toLowerCase().includes(productName)
        })
        let clothes = filterProducts.map((clothe)=>{
            return(
            `<div class="card">
            <div >Id : ${clothe.id}</div>
            <div>Image : <img class="image"src="${clothe.image}"></div>
            <div>Price : ${clothe.price}</div>
            <div>Category : ${clothe.category}</div>
            </div>`)
        });
        document.querySelector(".products").innerHTML = clothes
    }
            fetch('https://fakestoreapi.com/products')
            .then(res=> res.json() )
            .then(products=>display(products))
})

}
searchProducts()

	// for (i = 0; i < search.length; i++) {
	// 	if (!search[i].innerHTML.toLowerCase().includes(input)) {
	// 		search[i].style.display="none";
	// 	}
	// 	else {
	// 		search[i].style.display="list-item";
	// 	}
	// }