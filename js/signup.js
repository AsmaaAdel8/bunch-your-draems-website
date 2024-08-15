'use strict'
document.addEventListener('DOMContentLoaded',function Sign(){

    document.getElementById('myform').addEventListener('submit',(e)=>{
        e.preventDefault();
        const first=document.getElementById('first').value;
        const last=document.getElementById('last').value;
        const email=document.getElementById('inputEmail4').value;
        const password=document.getElementById('inputPassword4').value;
        const address=document.getElementById('inputAddress').value;
        const city=document.getElementById('inputCity').value;
        const state=document.getElementById('inputState').value;
        const age=document.getElementById('inputage').value;
        const date=document.getElementById('inputdate').value;

    const dataObj={name:first+' ' +last,
         email:email, 
         password:password, 
         address:address, 
         city:city , 
         state:state, 
         age:age,
         date:date};
    localStorage.setItem('dataUser',JSON.stringify(dataObj));
    window.location.href='index.html';
})
}
)