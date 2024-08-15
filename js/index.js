//<i class="fas fa-filter"></i>
'use strict'
function App(){
    let ratDiv=document.getElementById('rat');
    let products=document.getElementById('products');
    let rugDiv=document.getElementById('rug');
    let overviewdiv=document.getElementsByClassName('overview');
    let areatext=document.getElementById('areatext');

    const imgurl=["DIYSee!.jpg","70shoop.jpg","Customcartoon.jpg","PunchsEtsy.jpg",
        "FihUHARf.jpg","HandmadeGift.jpg","Howembroidery.jpg","Iqzn2G.jpg",
        "LeafEtsy.jpg","LearnNeedle!.jpg","LoveKit.jpg","MOUNTGifts.jpg","PatchEtsy.jpg",
        "PROJETOCAASULO.jpg","PunchEtsy.jpg","punchpano.jpg","hg.jpg","mXTd9ecR.jpg",
        "yyF8Ikzc.jpg","Wandteppiche.jpg","veikkanen.jpg","Unicorndesign.jpg","PunchPattern.jpg",
        "SpringKit.jpg","sewingCart.jpg","SseanAT.jpg","RedKit.jpg","rBqJeGT6.jpg",
        "PunchNeedlerelaxing.jpg","Punchen.jpg","Punch.jpg","punchwool.jpg","bv.jpg"
    ];
    localStorage.setItem('dataStore',JSON.stringify(imgurl));
    const dataGet=JSON.parse(localStorage.getItem('dataStore'));

    const coshans=["zz.jpg","yy.jpg","xx.jpg","ww.jpg","uu.jpg","tt.jpg","ss.jpg","rr.jpg","oo.jpg",
        "nn.jpg","mm.jpg","ii.jpg","ll.jpg","kk.jpg","ee.jpg","dd.jpg","cc.jpg","aa.jpg"];
    
    localStorage.setItem('coshan',JSON.stringify(coshans));
    const coshanget=JSON.parse(localStorage.getItem('coshan'));

    const rugArray=["rr.jpg","r1.jpg","r2.jpg","r3.jpg","r4.jpg","r5.jpg","r6.jpg","r7.jpg",
        "r8.jpg","r9.jpg","r11.jpg","r12.jpg","r13.jpg","r14.jpg","r15.jpg","r16.jpg","r17.jpg","hg.jpg"
    ];
    localStorage.setItem('rugArr',JSON.stringify(rugArray));
    const getRug=JSON.parse(localStorage.getItem('rugArr'));

    function drowItem(){
        for(let i=1;i<=imgurl.length;i++){
           const imgSrc="images/tara/" + dataGet[i-1]
            ratDiv.innerHTML +=`
                <div class="card col-xl-4 m-2 col-md-5" style="width: 20rem;">
                  <img src=${imgSrc} height="523" class="card-img-top" alt="...">
                    <div class="card-body">
                     <a href="#" class="btn btn-primary" id='add'>Add To Card</a>
                  </div>
               </div>
            `
        }
    }
    function drawCoshans(){
        for(let x=1;x<=coshans.length;x++){
            const imgSrc="./images/" + coshans[x-1]
             products.innerHTML +=`
                 <div class="card col-xl-4 m-2 col-md-5" style="width: 20rem;">
                   <img src=${imgSrc} height="523" class="card-img-top" alt="...">
                     <div class="card-body">
                      <a href="#" class="btn btn-primary" id='add'>Add To Card</a>
                   </div>
                </div>
             `
         }
    }
    function DrowRugs(){
        for(let x=1;x<=getRug.length;x++){
            const imgSrc="./images/rugs/" + getRug[x-1]
             rugDiv.innerHTML +=`
                 <div class="card col-xl-4 m-2 col-md-5" style="width: 20rem;">
                   <img src=${imgSrc} height="523" class="card-img-top" alt="...">
                     <div class="card-body">
                      <a href="#" class="btn btn-primary" id='add'>Add To Card</a>
                   </div>
                </div>
             `
         }
    }
    // this event to but iconns in cardsto appear with after in hover 
    document.addEventListener('DOMContentLoaded',function Icons(){
        const cards=document.querySelectorAll('.card');
        cards.forEach((card)=>{
            var icons=document.createElement('div');
            icons.className="icons";
            // console.log(card) it works
            icons.innerHTML=`<a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>`;
        })
    })
    // for loop to make icons of stars in user opineon card
    
    // the event to made search bar when click search icons
    let search=()=>{
        return `
            <form class="d-flex" role="search" style='position: absolute; top:5em;background-color:black;'>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        `
    };
    // check if there are user data to make usericon

    const storedData = localStorage.getItem('dataUser');
    if (storedData) {
      try {
        const { name, getemail, getpassword } = JSON.parse(storedData);
        if (name !== "" && getemail !== "" && getpassword !== "") {
          const circle = document.getElementById('circle');
          if (circle) {
            document.getElementById('sgbtn').style.display = 'none';
            circle.innerHTML = `<div class='col-7' onclick="window.location.href = 'user.html'">
                    <i class="fas fa-user-circle" style='font-size:30px;margin-right:15px;'></i>
                    <h2>${name}</h2>
                </div>
                <div id="search" class="col-4" style='padding-left:5px; margin-left:17px;' onclick="search()">
                    <i class="fas fa-search"></i>
                </div>
            `;

            circle.addEventListener('dragstart', (e) => {
              e.dataTransfer.setData('text', e.target.id);
            });

                // to tack the text from textarea as opineon card in bottom
            document.getElementById('send').addEventListener('click',()=>{
                var textOpin=areatext.value;
                var usrOpin=JSON.parse(localStorage.getItem('textOpinions'));
                if (usrOpin === null) {
                    usrOpin = [];
                  }
                  usrOpin.push(textOpin)

                const overviewDiv=document.getElementById('overview');
                if(name){
                    localStorage.setItem('textOpinion',JSON.stringify(usrOpin));
                    const textOpinion=JSON.parse(localStorage.getItem('textOpinion'));
                    let textOpindiv=document.createElement('div');
                    textOpindiv.className='textOpindiv';
                    
                    if(textOpinion){
                        textOpindiv.innerHTML=`${textOpinion}
                        <h3>chosse our Rate</h3>
                         <div class='row me-2'>  
                            <i class="far fa-star col-2"></i>
                            <i class="far fa-star col-2"></i>
                            <i class="far fa-star col-2"></i>
                            <i class="far fa-star col-2"></i>
                            <i class="far fa-star col-2"></i>
                        </div>`;
                        overviewDiv.appendChild(textOpindiv)
                    }

                }else{
                    window.alert('you should signIn first to can text .');
                    window.location.href='./signup.html'
                }
    })

          } else {
            console.error("Element 'circle' not found in the DOM");
          }
        } else {
          window.alert('Please complete your data and then signUp.');
        }
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    } else {
      console.error("No stored data found");
    }
    

 drowItem();
 drawCoshans();
 DrowRugs();
}
App();