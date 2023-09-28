let products=[
    {
        pname:'Mobile',
        price:900,
        color:'info'
    },
    {
        pname:'Laptop',
        price:1200,
        color:'black'
    },
    {
        pname:'Smart watch',
        price:1500,
        color:'gray'
    },
        {
        pname:'Mobile',
        price:700,
        color:'blue'
    },
        {
        pname:'Pen',
        price:100,
        color:'brown'
    },
        {
        pname:'Bag',
        price:500,
        color:'green'
    },
        {
        pname:'Shoes',
        price:700,
        color:'white'
    },
        {
        pname:'Laptop',
        price:900,
        color:'silver'
    },
      {
        pname:'Pen',
        price:100,
        color:'blue'
    },
     {
        pname:'Bag',
        price:900,
        color:'violet'
    },
        {
        pname:'NoteBook',
        price:600,
        color:'info'
    },{
        pname:'Mouse',
        price:500,
        color:'white'
    },
        {
        pname:'Pen',
        price:100,
        color:'red'
    },
        {
        pname:'Mouse',
        price:500,
        color:'red'
    },
      {
        pname:'Mouse',
        price:800,
        color:'blue'
    }
]

//* displaying products operation start
function product_details(){
    // let tbody=document.getElementById('tbody')
    let tbody=document.querySelector('tbody')
    let data=products.map((product,i)=>{
        // return(
            tbody.innerHTML+=
        `
            <tr>
                <td>${i+1}</td>
                <td>${product.pname}</td>
                <td>${product.color}</td>
                <td>${product.price}</td>
            </tr>
        `
    //   )
})
    // tbody.innerHTML=data.join(' ')

    //* Calculate the total price of the filtered products
    let prices=products.reduce((a,v)=>{return a + v.price},0)
    // let tr=document.createElement('tr')
    // let td1=document.createElement('td')
    // let td4=document.createElement('td')

    // td1.innerText='Total Products price'
    // td1.setAttribute("colspan", 3)

    // td4.innerText=prices
    // tr.append(td1,td4)
    // tbody.append(tr)
    // tbody.insertBefore(tr, tbody.lastElementChild.nextElementSibling)

    //* Display the total price
    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td colspan="3">Total Products Price </td><td>${prices}</td>`;
    tbody.appendChild(newRow);
}
product_details()
//* displaying products operation end




//* Searching operation start
function searching(){
    let searchProducts = document.getElementById('searchProducts');
    let filterButton = document.getElementById('filterButton');

    // filterButton.addEventListener('click', (e) => {
    searchProducts.addEventListener('keyup', (e) => {
    e.preventDefault()
    let productName = searchProducts.value.toLowerCase();
    let filteredProducts = products.filter((product) =>{
      return  product.pname.toLowerCase().includes(productName) || 
      product.color.toLowerCase().includes(productName) || product.price===parseInt(productName)
    });
    console.log(searchProducts.innerText)

   
    //* || product.price.includes(Number(productName)) 

    //* Create a new table with the filtered products
    let filteredData = filteredProducts.map((product, i) => {
        return (
            `
             <tr>
                 <td>${i + 1}</td>
                 <td>${product.pname}</td>
                 <td>${product.color}</td>
                 <td>${product.price}</td>
             </tr>
            `
        );
    });

    tbody.innerHTML = filteredData.join(' ');
    //* Calculate the total price of the filtered products
    let totalFilteredPrice = filteredProducts.reduce((a, v) =>{return a + v.price}, 0);

    //* Display the total price
    let newRow = document.createElement('tr');
    newRow.innerHTML = `<td colspan="3">Total Products Price </td><td>${totalFilteredPrice}</td>`;
    tbody.appendChild(newRow);

    if(filteredProducts==0){
        // tbody.innerHTML='No products found'
    newRow.innerHTML = `<td colspan="3">No products found </td><td>0000</td>`;
    tbody.appendChild(newRow);
    }
    });
    }
searching()
//* Searching operation end

function debounces(cb,delay){
    let timer;
    return function(){
        clearTimeout(timer);
       timer= setTimeout(cb,delay)
    }
}

let debounceProduct=debounces(searching, 3000)