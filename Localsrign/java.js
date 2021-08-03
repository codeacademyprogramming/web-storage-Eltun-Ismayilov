let addbasket=document.querySelectorAll(".btn-primary")
if (localStorage.getItem("basket")===null) {
    localStorage.setItem("basket",JSON.stringify([]))
}


addbasket.forEach(btn=>{
    btn.onclick=function(e){
        e.preventDefault();

        btn.style.background="red";
        btn.innerHTML="sebete atildi"
            
    
        

      let id=this.parentElement.getAttribute("data-id")
      let col=this.parentElement.parentElement.parentElement;
      let image=this.parentElement.parentElement.children[0].getAttribute("src");
      let name=this.parentElement.parentElement.children[1].children[0].innerHTML;
      let name2=this.parentElement.parentElement.children[1].children[1].innerHTML;
      let button=this.parentElement.parentElement.children[1].children[2];
      let qiymet=this.parentElement.parentElement.children[1].lastElementChild.innerHTML;
      
      

      let basket=JSON.parse(localStorage.getItem("basket"))

      let existpro=basket.find(p=>p.id==id)

      if(existpro===undefined){

        basket.push({
            id:id,
            count:1,
            name:name,
            image:image,
            col:col,
            name2:name2,
            button:button,
            qiymet:qiymet

        })
      }else{
          existpro.count+=1
      }

      localStorage.setItem("basket",JSON.stringify(basket))
   
      GetBasketCount();



    }
  
})

function GetBasketCount(){
    let arrBasketCount=JSON.parse(localStorage.getItem("basket"));
    document.getElementById("basketCount").innerText=arrBasketCount.length;

}
GetBasketCount();