//<i class="fab fa-facebook"></i>
//<i class="fab fa-instagram"></i>
//<i class="fab fa-linkedin"></i>
//<i class="fas fa-search"></i>
//<i class="far fa-star"></i>
//<i class="fas fa-filter"></i>
//<i class="fas fa-user-circle"></i>
//
'use strict'
function App(){
    let ratDiv=document.getElementById('rat');
    let products=document.getElementById('products');
    let rugDiv=document.getElementById('rug');

    const imgurl=["DIYSee!.jpg","70shoop.jpg","Customcartoon.jpg","PunchsEtsy.jpg",
        "FihUHARf.jpg","HandmadeGift.jpg","Howembroidery.jpg","Iqzn2G.jpg",
        "LeafEtsy.jpg","LearnNeedle!.jpg","LoveKit.jpg","MOUNTGifts.jpg","PatchEtsy.jpg",
        "PROJETOCAASULO.jpg","PunchEtsy.jpg","punchpano.jpg","hg.jpg","mXTd9ecR.jpg",
        "yyF8Ikzc.jpg","Wandteppiche.jpg","veikkanen.jpg","Unicorndesign.jpg","PunchPattern.jpg",
        "SpringKit.jpg","sewingCart.jpg","SseanAT.jpg","RedKit.jpg","rBqJeGT6.jpg",
        "PunchNeedlerelaxing.jpg","Punchen.jpg","Punch.jpg","punchwool.jpg","bv.jpg"
    ];
    const dataStore=localStorage.setItem('dataStore',JSON.stringify(imgurl));
    const dataGet=JSON.parse(localStorage.getItem('dataStore'));

    const coshans=["zz.jpg","yy.jpg","xx.jpg","ww.jpg","uu.jpg","tt.jpg","ss.jpg","rr.jpg","oo.jpg",
        "nn.jpg","mm.jpg","ii.jpg","ll.jpg","kk.jpg","ee.jpg","dd.jpg","cc.jpg","aa.jpg"];
    
    const coshan=localStorage.setItem('coshan',JSON.stringify(coshans));
    const coshanget=JSON.parse(localStorage.getItem('coshan'));

    const rugArray=["rr.jpg","r1.jpg","r2.jpg","r3.jpg","r4.jpg","r5.jpg","r6.jpg","r7.jpg",
        "r8.jpg","r9.jpg","r11.jpg","r12.jpg","r13.jpg","r14.jpg","r15.jpg","r16.jpg","r17.jpg","hg.jpg"
    ];
    const rugArr=localStorage.setItem('rugArr',JSON.stringify(rugArray));
    const getRug=JSON.parse(localStorage.getItem('rugArr'));


    function drowItem(){
        for(let i=1;i<=imgurl.length;i++){
           const imgSrc="images/tara/" + dataGet[i-1]
            ratDiv.innerHTML +=`
                <div class="card col-xl-4 m-2" style="width: 20rem;">
                  <img src=${imgSrc} height="523" class="card-img-top" alt="...">
                    <div class="card-body">
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
            `
        }
    }
    function drawCoshans(){
        for(let x=1;x<=coshans.length;x++){
            const imgSrc="./images/" + coshans[x-1]
             products.innerHTML +=`
                 <div class="card col-xl-4 m-2" style="width: 20rem;">
                   <img src=${imgSrc} height="523" class="card-img-top" alt="...">
                     <div class="card-body">
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                </div>
             `
         }
    }
    function DrowRugs(){
        for(let x=1;x<=getRug.length;x++){
            const imgSrc="./images/rugs/" + getRug[x-1]
             rugDiv.innerHTML +=`
                 <div class="card col-xl-4 m-2" style="width: 20rem;">
                   <img src=${imgSrc} height="523" class="card-img-top" alt="...">
                     <div class="card-body">
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                   </div>
                </div>
             `
         }
    }
    document.getElementById('search').addEventListener('click',()=>{
        document.innerHTML=`
            <form class="d-flex z-1 t-5" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        `
    })
 drowItem();
 drawCoshans();
 DrowRugs();
}
App();