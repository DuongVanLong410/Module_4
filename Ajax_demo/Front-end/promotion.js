function promoList(){
    $.ajax({
         type: "GET",
         url: "http://localhost:3000/promotion/",
         headers:{
            "Content-Type": "application/json"
         },
         success(promoList){
            let html=''
            promoList.map(promo=>{
                let saleHtml=`|các sp áp dụng :`
                promo.products.map(item=>{
                    saleHtml+=` ${item.name} |`
                })
                html+=`<p> chương trình  ${promo.name}| ưu đãi lên tới ${promo.discount} % ${saleHtml} </p>
                <button onclick="deletePromo(${promo.id})">đì lít</button>
                <button onclick="editPromo(${promo.id})">ê đít</button>
                <hr>`
                $('#body').html(html)     
            }) 
        }
    })
}
function editPromo(id){
    $.ajax({
        type: 'GET',
        url:`http://localhost:3000/promotion/sale?id=${id}`,
        headers:{
            "Content-Type": "application/json",
        }, 
        success(data){
            let html=`
            <p>name: ${data.name} | discount: ${data.discount}</p>
            <input type="text" id="name" placeholder="name" value="${data.name}">
            <input type="text" id="discount" placeholder="price" value="${data.discount}">
            <button onclick="update(${data.id})">update</button>
            `
            $('#body').html(html) 
        }
    })
}
function createPromoForm(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/listProducts",
        Headers:{
            'Content-Type': 'application/json'
        },
        success:(products)=>{
            let html=``
            let htmlProduct=`|các sản phẩm áp dụng: `;
            products.map(product=>{
                htmlProduct+=`
                <input type="checkbox" name="checkboxGroup" value="${product.id}">${product.name}|`
            })
            html+=`
                <input type="text" id="name" placeholder="name">
                <input type="text" id="discount" placeholder="discount">
                ${htmlProduct}
                <button onclick="getValues(createPromo);">add</button> `;
            $('#body').html(html)
        } 
    })
}
function createPromo(products){
    let name= $('#name').val()
    let discount=$('#discount').val()
    let promo={                                                         
        name: name,
        discount:discount,
        products: products
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/promotion/",
        Headers:{
            'Content-Type': 'application/json'
        },data: (promo),
        success(){
            promoList()
        }
    })
}  
function deletePromo(id){
    $.ajax({
        type: "DELETE",
        url: `http://localhost:3000/promotion?id=${id}`,
        headers:{
            "Content-Type": "application/json"
        },
        success(){
            promoList()
        }
    })
}
function getValues(callback) {
  var checkboxes = document.getElementsByName("checkboxGroup");
  var checkedValues = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedValues.push( checkboxes[i].value);
    }
  }
  if (checkedValues.length > 0) {
    callback(checkedValues)
  } else {
    alert("khuyến mại mà ko có sản phẩm  ?");
  }
}
function update(id){
    let name= $('#name').val()
    let discount=$('#discount').val()
    let newSale={name:name,discount:discount}
    $.ajax({
        type: "PATCH",
        url: `http://localhost:3000/promotion?id=${id}`,
        headers:{
            "Content-Type": "application/json"
        },data:  JSON.stringify(newSale),
        success(){
            promoList()
        }
    })
}