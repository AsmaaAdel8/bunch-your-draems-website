'use strict'
const dad=document.getElementById('data');

const { name, email, city,age,date,adress,state} = JSON.parse(localStorage.getItem('dataUser'));
const back=()=>{
    window.location.href='index.html'
};
dad.innerHTML=`
<div class='userbage bg-success' style='padding:3em'>
    <h2 class='text-dark'>User Information</h2>
    <h2>UserName : ${name}</h2>
    <h2>Age : ${age}</h2>
    <h2>State : ${state}</h2>
    <h2>Email : ${email}</h2>
    <h2>adress : ${adress}</h2>
    <h2>City : ${city}</h2>
    <button class='btn btn-primary absolute right-0' 
    onClick={back()}
    >Back To Home</button>
</div>`
// add selected images 
const imgSrc=localStorage.getItem('Imgsrc');
const Srcs=imgSrc.split(',');
// Srcs.shift();
const choosedCards=document.getElementById('choosedCards');
// console.log(Srcs);
Srcs.forEach((src,index)=>{
    choosedCards.innerHTML +=`
    <img src=${src} height="523" class="col-3" alt="..." style="height:9em;" dataset=${index}>`
    // img.dataset.index = index;
})
// make payment page with vodafone cash
const payDiv=document.getElementById('pay');
const selectdiv=document.getElementById('card-type');
const payform=document.getElementById('payment-form');

selectdiv.addEventListener('change',(event)=>{
    let value=event.target.value;
    if(value==='vodafone cash'){
       payform.innerHTML=`
       <h2 class="text-dark">Payment Information</h2>
       <div>
           <label for="card-number">Phone Number:</label>
           <input type="text" id="card-number" name="card-number" placeholder="010 --- --- ---">
       </div>
       <div>
           <label for="billing-address">Billing Address:</label>
           <input type="text" id="billing-address" name="billing-address" placeholder="123 Main St">
       </div>
       <div>
           <label for="city">City:</label>
           <input type="text" id="city" name="city" placeholder="Anytown">
       </div>
       <div>
           <label for="state">State:</label>
           <input type="text" id="state" name="state" placeholder="CA">
       </div>
       <div>
           <label for="zip">Zip:</label>
           <input type="text" id="zip" name="zip" placeholder="12345">
       </div>
         <button type="submit" class="btn" id="subBtn">Submit Payment</button>     
        `
        payform.appendChild=payform;
    }
})
