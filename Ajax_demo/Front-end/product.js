function getList(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/listProducts",
        Headers:{
            'Content-Type': 'application/json'
        },
        success:(products)=>{
            let html='';
            products.map(product=>{
                html+=`<p>${product.id}| ${product.name}| ${product.price}| ${product.quantity}| ${product.category.name}|</p> <img style="width=50px ; height=" src="${product.img}">
                <button onclick="formUpdate(${product.id})">úp đết</button> <button onclick="remove(${product.id})">đì lít</button>
                <hr>`
            })
            $('#body').html(html)
        } 
    })
}

function remove(id){
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/delete?id=${id}`,
        Headers:{
            'Content-Type': 'application/json'
        },
        success:()=>{
           getList();
        } 
    })
}

function formUpdate(id){
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/update?id=${id}`,
        Headers:{
            'Content-Type': 'application/json'
        },
        success:(product)=>{
            let html=`
        
            <input type="text" id="name" placeholder="name" value=${product.name}>
            <input type="text" id="price" placeholder="price" value=${product.price}>
            <input type="text" id="quantity" placeholder="quantity" value=${product.quantity}>
            <input type="text" id="img" placeholder="img" value=${product.img}>
            <input type="text" id="category" placeholder="category" value=${product.category.id}>
            <button onclick="update(${product.id})">update</button>`
            $('#body').html(html)
        } 
    })
}

function update(id){
    let name= $('#name').val() 
    let price=$('#price').val()
    let quantity=$('#quantity').val()
    let img=$('#img').val()
    let category=$('#category').val()

    let product={
        name: name,
        price:price,
        quantity:quantity,
        img:img,
        category:category
    }
    $.ajax({
        type: "POST",
        url: `http://localhost:3000/update?id=${id}`,
        headers:{
            "Content-Type": "application/json"
        },
        data: JSON.stringify(product),
        success:(message)=>{
            getList()
        }
    })
}

function formAdd(){
    let html=`
    <input type="text" id="name" placeholder="name">
    <input type="text" id="price" placeholder="price">
    <input type="text" id="quantity" placeholder="quantity">
    <input type="text" id="img" placeholder="img">
    <input type="text" id="category" placeholder="category">
    <button onclick="create()">add</button> `;
    $('#body').html(html)
}

function create(){
    let name= $('#name').val()
    let price=$('#price').val()
    let quantity=$('#quantity').val()
    let img=$('#img').val()
    let category=$('#category').val()

    let product={
        name: name,
        price:price,
        quantity:quantity,
        img:img,
        category:category
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/create",
        headers:{
            "Content-Type": "application/json"
        },
        data: JSON.stringify(product),
        success:(message)=>{
            getList()
        }
    })
}

