function GetBasketCount(){
    let arrBasketCount=JSON.parse(localStorage.getItem("basket"));
    document.getElementById("basketCount").innerText=arrBasketCount.length;

}
GetBasketCount();

let basket=JSON.parse(localStorage.getItem("basket"))
// let table=document.querySelector(".table")
   let container=document.querySelector(".container")
   let row=document.querySelector(".row")

basket.forEach(pro => {

    let col_4=document.createElement("div");
    col_4.className="col-4";
    col_4.style.marginTop="20px"

    // image
    let image=document.createElement("img");
    image.setAttribute("src",pro.image)

    // card

    let card=document.createElement("div")
    card.className="card";
    card.style.width="270px";

    card.append(image)

    // card-body

    let card_body=document.createElement("div");
    card_body.className="card-body";

    let h5=document.createElement("h5");
    h5.className="card-title";
    h5.innerText=pro.name;
    card_body.append(h5);

    let p=document.createElement("p");
    p.className="card-text";
    p.innerText=pro.name2
    card_body.append(p)


    let button=document.createElement("button");
    button.className="btn-primary";
    button.innerText=pro.button;
    button.innerText="Sebetden silmek";


    let qiymet1=document.createElement("p")
    qiymet1.className="eltun";
    qiymet1.style.marginTop="-118px"
    qiymet1.innerText=pro.qiymet
    card_body.append(qiymet1)

    button.onclick=function(){

        localStorage.removeItem("basket")
    }
    

    card_body.append(button)

    






    card.append(card_body)





    col_4.append(card)
    row.append(col_4)
    container.append(row)




   
   
    
    

});





