'use strict'
// the event to made search bar when click search icons
document.getElementById('search').addEventListener('click',(e)=>{
    e.preventDefault();
    const searc= `
        <form class="d-flex" role="search" id='search_feild'>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search-query">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    `
    const searDiv=document.getElementById('sear');
    searDiv.innerHTML=searc;
  })
  // add img src to storage
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
           stordImg=JSON.parse(stordImg);
        }
        stordImg.push(ImgSrc);
        localStorage.setItem('Imgsrc',JSON.stringify(stordImg));
        // incrase counter of shopping icon
        const counter=document.getElementById('counter');
        let count = parseInt(counter.innerText) || 0;
        counter.innerText = count + 1;     
    })
})