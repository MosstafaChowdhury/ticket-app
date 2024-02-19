const cards=document.getElementsByClassName("seats")
let newSeats=[]

for (const card of cards){
  
    card.addEventListener("click",(e)=>{
         card.computedStyleMap.backgroundColor="red"
        const countSeat=document.getElementById("count-seat")
        const countSeatInnerText=countSeat.innerText;
        const converCounseat=parseInt(countSeatInnerText)
        const totalSeat=document.getElementById("total-seat")
        const totalSeats=totalSeat.innerText;
        const allseats=parseInt(totalSeats)
       
        if(converCounseat ===4){
           card.innerText.setAttribute("disabled",true)
        }else if(newSeats.includes(card.innerText)!==true){
            const ulcontainer=document.getElementById("ul-container")
            const li=document.createElement("li")
            const p=document.createElement("p")
            const p2=document.createElement("p")
            const p3=document.createElement("p")
            p.innerText=card.innerText;
            p2.innerText="Classis";
            p3.innerText=500;
            li.appendChild(p)
            li.appendChild(p2)
            li.appendChild(p3)


            const currentTotalPrice=elementByIds("totalCostPrice")
            const perseatTaka=elementByIds("perseatMoney")
            const grandtotal=elementByIds("GrandtotalCostPrice")
            const grandtotalCostPrice=grandtotal+perseatTaka;

   console.log(perseatTaka,currentTotalPrice)
   const totalCost=currentTotalPrice+perseatTaka;
  
   setText("totalCostPrice",totalCost)
   setText("GrandtotalCostPrice",grandtotalCostPrice)
          
            ulcontainer.appendChild(li)
            newSeats.push(card.innerText) 
           console.log(newSeats)
           totalSeat.innerText=allseats -1;
            countSeat.innerText=converCounseat +1;
            e.target.style.backgroundColor="green"
        }else{
            alert(e.target.innerText + " " + "you've already add this ticket try another one")
        }
       
    })
}



function setText(element,value){
    const elementId=document.getElementById(element)
    elementId.innerText=value;
}


// function setColor(element){
// const color=document.getElementsByClassName(element)
// color.
// }

const setbackrounfColor=(elementId)=>{
    const color=document.getElementById(elementId)
    color.classList.add("bg-black")
}



function totalprice(element,value){
    const elments=document.getElementById(element)
    
    elments.innerText=value;
}


// totalCostPrice
function elementByIds(element){
    const perseatMoney=document.getElementById(element)
    const parInseatMoney=perseatMoney.innerText;
    const parsetMoneyConvert=parseInt(parInseatMoney)
    return parsetMoneyConvert
}




const applyBtn=document.getElementById("applyBtn")

 applyBtn.addEventListener("click",function(e){
    e.preventDefault()
    const cuponContainer=document.getElementById("cuponContainer")
    const coupon=document.getElementById("couponValue")
    const cuponValue=coupon.value;
    console.log(cuponValue)

    
    const grandtotal=elementByIds("GrandtotalCostPrice")
    console.log(grandtotal)
    const tax=10;
    const totalTax=(grandtotal/100)*tax;
   const grandTotalAfterText=grandtotal-totalTax;
    console.log(grandTotalAfterText)

    const countSeat=document.getElementById("count-seat")
    const countSeatInnerText=countSeat.innerText;
    const converCounseat=parseInt(countSeatInnerText)
     const selectedSeat=newSeats;
     console.log(selectedSeat.length)

    if(cuponValue ==="NEW15" && selectedSeat.length===4){

        const tax=15;
        const totalTax=(grandtotal/100)*tax;
       const grandTotalAfterText=grandtotal-totalTax;
       setText("GrandtotalCostPrice",grandTotalAfterText)
       cuponContainer.classList.add("hidden")
  
    }
    else if(cuponValue ==="Couple 20" && selectedSeat.length===4){
        const tax=20;
        const totalTax=(grandtotal/100)*tax;
       const grandTotalAfterText=grandtotal-totalTax;
       setText("GrandtotalCostPrice",grandTotalAfterText)
       cuponContainer.classList.add("hidden")

    }
    
    else if(selectedSeat.length !==4){
        alert("for discount have to booked 4 seat")
        setText("GrandtotalCostPrice",grandtotal)
    
    }else if(cuponValue !=="new15" || cuponValue !=="Couple 20"){
        alert("wrong cupon")
        setText("GrandtotalCostPrice",grandtotal)
    }
    
    else{
     
        setText("GrandtotalCostPrice",grandtotal)
    }
 })


//  const grandtotal=elementByIds("GrandtotalCostPrice")
//  console.log(grandtotal)
//  const tax=10;
//  const totalTax=(grandtotal/100)*tax;
// const grandTotalAfterText=grandtotal-totalTax;
//  console.log(grandTotalAfterText)

//  setText("GrandtotalCostPrice",grandtotal)
//  setText("GrandtotalCostPrice",grandTotalAfterText)

// const nextBtn=document.getElementById("nextBtn")
// const phone=document.getElementById("phone")
// phone.addEventListener("keyup",function(e){
//     const number=e.target.value;
//     const selectedSeat=newSeats;
//      if(number.length>0 || selectedSeat.length>=0){
//         nextBtn.removeAttribute("disabled")
     
//      }else{
//         this.setAttribute("disabled",true)
//      }
    
// })





const input=document.getElementById("phone")
const deletebtn=document.getElementById("nextBtn")
const friends=[1,2,3,4,5]



input.addEventListener("keyup",function(e){

console.log(e.target.value)
const selectedSeat=newSeats;    
console.log(selectedSeat,"form next")

const number=e.target.value;


  if (number.length>0){
    deletebtn.removeAttribute("disabled")
   }else{
    deletebtn.setAttribute("disabled",true)
   }

})


deletebtn.addEventListener("click",function(){
    document.location.reload(true)
})



