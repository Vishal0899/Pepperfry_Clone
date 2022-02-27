

// console.log(data);
let container = document.getElementById("container");
let data = JSON.parse(localStorage.getItem("wishlistItem"));
showData(data);

function showData(data){
    
    container.innerHTML="";
    
    let cartArr = JSON.parse(localStorage.getItem("cartItem"));
    data.map((elem,index) =>{

    let div = document.createElement("div");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    let image = document.createElement("img");
    image.src=elem.img;
    div1.append(image);

    let title = document.createElement("h2");
    title.innerHTML=elem.title;
    let Rprice = document.createElement("p");
    Rprice.innerHTML=`Retail Price - ${elem.actual_price}`;
    let Oprice = document.createElement("p");
    Oprice.innerHTML=`Offer Price - ₹ ${elem.discount_price}`;
    let ADC = document.createElement("button");
    ADC.addEventListener("click",function(){
          cartArr.push(elem);
          localStorage.setItem("cartItem",JSON.stringify(cartArr));
    });
    ADC.innerHTML='Add to Cart';

    let remove = document.createElement("button");
    remove.addEventListener("click",function(index){

        data.splice(index,1);
        localStorage.setItem("wishlistItem",JSON.stringify(data));
        showData(data);
    });
    remove.innerHTML='Remove';

    div2.append(title,Rprice,Oprice,ADC,remove);

    div.append(div1,div2);

    container.append(div);
})
}


function Cart(){
    window.location.href="checkout.html";
}