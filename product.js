
         
          let data;

          async function getData(){
            try{
              let res = await fetch("http://ec2-18-236-222-188.us-west-2.compute.amazonaws.com:3000/product");
              data = await res.json();
              console.log(data);
              showData(data,catItem);
            }catch(err){
              console.log(err);
            }
          }
          
          getData();

          let catItem =[
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Modern_3_Seater_Sofas.jpg", title:'Modern 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Mid_Century_Modern_3_Seater_Sofas.jpg", title:'Mid-Century Modern 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Contemporary_3_Seater_Sofas.jpg", title:'Contemporary 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Lawson_3_Seater_Sofas.jpg", title: 'Lawson 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Rolled_Arms_3_Seater_Sofas.jpg", title: 'Rolled Arms 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Bucket_3_Seater_Sofas.jpg" ,title : 'Bucket 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Chesterfield_3_Seater_Sofas.jpg", title:'Chesterfield 3 Seater Sofas'},
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Traditional_3_Seater_Sofas.jpg", title:'Traditional 3 Seater Sofas'},    
              {image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Camelback_3_Seater_Sofas.jpg", title:'Camelback 3 Seater Sofas'},
            ];

  

    function showData(data,catItem){

      let CatSofa = document.getElementById("CatSofa");
      console.log
      CatSofa.innerHTML="";
      catItem.forEach((element) =>{
        let div = document.createElement("div");
        
          let img = document.createElement("img");
          img.src=element.image;
          img.addEventListener("click",() =>{
              window.location.href='product.html';
          });
          let title = document.createElement("p");
          title.innerHTML=element.title;
        
        div.append(img,title);
        
        CatSofa.append(div);
        
      });
      
      let Append = document.getElementById("Product");
      Append.innerHTML="";

      let x = 1;
      data.forEach((elem) => {
        
        // let cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];
        // let wishArr = JSON.parse(localStorage.getItem("wishlistItem")) || [];

        let div = document.createElement("div");
        div.setAttribute("class","PRdiv");
            let div1 = document.createElement("div");
            div1.setAttribute("class","IM");
            let div2 = document.createElement("div");
            div2.setAttribute("id","DT");
              let image = document.createElement("img");
                image.src = elem.img;
                image.setAttribute("alt","https://ii1.pepperfry.com/img/grey.gif");
                
      //  ****************** showing addtocart and wishlist ******************************         
                let addTocart = document.createElement("button");
                addTocart.setAttribute("class","BTN");
                
                addTocart.addEventListener("click",function(){
                  let cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];
                    cartArr.push(elem);
                    localStorage.setItem("cartItem",JSON.stringify(cartArr));
                    alert("Item Added To Cart 😊")
                });
                addTocart.innerHTML='Add to Cart';
                let rating = document.createElement("p");
                rating.setAttribute("class","rating");
                rating.innerHTML=`${elem.rating} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="goldenrod" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> `;        
                

                let wishlist = document.createElement("div");
                wishlist.setAttribute("class","wishlist");
                wishlist.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>`;
                wishlist.addEventListener("click",function(){
                  wishlist.innerHTML="";
                  wishlist.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>`;
                let wishArr = JSON.parse(localStorage.getItem("wishlistItem")) || [];
                  wishArr.push(elem);
                  localStorage.setItem("wishlistItem",JSON.stringify(wishArr));
                });
      // ****************************************************************************************************
      
            div1.append(image,addTocart,rating,wishlist);

              let title = document.createElement("p");
                title.innerHTML = elem.title;
                title.setAttribute("id","Title");
              let brand = document.createElement("p");
                brand.innerHTML = elem.brand;
                brand.setAttribute("id","Brand");

              let price = document.createElement("div");
                price.setAttribute("id","Price");
                
                let discount_price = document.createElement("p");
                discount_price.innerHTML = `₹ ${elem.discount_price}`;
                
                let actual_price = document.createElement("p");
                actual_price.innerHTML=elem.actual_price;
                
                price.append(discount_price, actual_price);
            
              let discount = document.createElement("p");
              discount.innerHTML = elem.discount;
                discount.setAttribute("id","discount");
                
              let randCashback = Math.round(Math.random()*2000) + 1000;
              let cashback = document.createElement("p");
              cashback.innerHTML=`Earn Cashback ₹${randCashback} `;

              let shipDay = Math.round(Math.random() * 5) + 1;
              let delivery = document.createElement("p");
              delivery.innerHTML=`Ships in ${shipDay} days`;
            div2.append( title, brand, price, discount, cashback, delivery); 
            div.append(div1,div2)
              
            x++;

            Append.append(div);
        });

    }

    showData(data,catItem);


// **************************************** for sorting ***************************************************
        function Sfunc(id){
        
          let x = document.getElementsByClassName("Sbullet");
          // console.log(x);
          // console.log(x.length);
            for(let i=1;i<=x.length;i++){
                let bt = document.getElementById(`${i}`);
                bt.setAttribute("style","background-color: white");
            }

            let Sortbutton = document.getElementById(`${id}`);
            Sortbutton.setAttribute("style","background-color: red");
            

            // console.log(id);
            if(id==1){
              data.sort((a,b) =>{

                return a.relevance - b.relevance;
              });
            }
            if(id==2){
              data.sort((a,b) =>{
                // console.log(a,b);
                return b.discount_price - a.discount_price;
              });
            }
            
            if(id==3){
              data.sort((a,b) =>{

                  return a.discount_price - b.discount_price;
                });
              }

              if(id==4){
                data.sort((a,b) =>{
                  // console.log(a,b);
                  return b.delivery - a.delivery;
                });
              }
              
              if(id==5){
                data.sort((a,b) =>{

                  return a.new - b.new;
                });
              }

              showData(data,catItem);
            }
            
// ************************************************************************************
            
            function Bfunc(name){

              Data = data.filter((elem) => {
                // console.log(elem);
                return name==elem.brand; 

              });

              showData(Data,catItem);
            }
