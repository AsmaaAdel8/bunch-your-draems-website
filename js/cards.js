'use strict'
const cardsBtn=document.querySelectorAll('#add');
cardsBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        // to get the barent of ech btn
        const card=btn.parentNode.parentNode    //cardsBtn.closest('.card');
        const img=card.querySelector('img');
        const ImgSrc=img.src;
        // console.log(img.src);
        var stordImg=localStorage.getItem('Imgsrc');
        if(!stordImg){
            stordImg=[];
        }else{
           stordImg=JSON.parse(localStorage.getItem('Imgsrc'));
        }
        stordImg.push(ImgSrc);
        localStorage.setItem('Imgsrc',JSON.stringify(stordImg));
        // localStorage.setItem('Imgsrc',SrcArray)
        // incrase counter of shopping icon
        const counter=document.getElementById('counter');
        let count = parseInt(counter.innerText) || 0;
        counter.innerText = count + 1;
  
        // console.log(counter);
        
    })
})