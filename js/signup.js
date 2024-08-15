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

// function login(){
//     let login=document.getElementById('login');
//     login.addEventListener('click',()=>{

//         const email=document.getElementById('staticEmail').value;
//         const password=document.getElementById('inputPassword').value;
//         let{name,emai,passwor,adres,cit,stat,agee,dat}=JSON.parse(localStorage.getItem('dataUser'));
        
//         if(email===emai&& password===passwor){
//             window.location.href='user.html';
//         }else{
//             window.alert('your data not fined try again or sign up if it the first time in our website and thank you for your visiting...')
//         }
//     })
// }
// login();
}
)