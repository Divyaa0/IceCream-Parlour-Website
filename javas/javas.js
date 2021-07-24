
var ak=document.getElementById('buy_id1')
var ak1=document.getElementById('inp_id1')
var quan1=document.getElementById('quan_id1')
var buy1=document.getElementById("buy_1")
ak.addEventListener('click',fun1)
buy1.addEventListener('click',fun1_1)
// 

var bk=document.getElementById('buy_id2')
var bk1=document.getElementById('inp_id2')
var quan2=document.getElementById('quan_id2')
bk.addEventListener('click',fun2)
var buy2=document.getElementById("buy_2")
buy2.addEventListener('click',fun2_1)
// 
var ck=document.getElementById('buy_id3')
var ck1=document.getElementById('inp_id3')
var quan3=document.getElementById('quan_id3')
var buy3=document.getElementById("buy_3")
ck.addEventListener('click',fun3)
buy3.addEventListener('click',fun3_1)
function fun1()
{
ak.style.backgroundColor="#ef5734"
ak.style.backgroundImage="linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)"
ak.style.transform="scale(1.1)"
ak.innerHTML+=  `<input class="btn_inp" id="inp_id1"type="txt">`
ak.innerHTML+= `<h3 class="head3">Quanity:</h3>`
ak.innerHTML+=`<button class="btn_buy1" id="buy_final1">Buy</button>`
quan1.style.display="inline";
ak1.style.display="inline";
buy1.style.display="inline";
}
// 
function fun2()
{
bk.style.backgroundColor="#ef5734";
bk.style.backgroundImage=" linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)"
bk.style.transform="scale(1.1)"
bk.innerHTML+=  `<input class="btn_inp" id="inp_id2"type="txt">`
bk.innerHTML+= `<h3 class="head3">Quanity:</h3>`
bk.innerHTML+=`<button class="btn_buy1" id="buy_final1">Buy</button>`
quan2.style.display="inline";
bk1.style.display="inline";
buy2.style.display="inline";
}
function fun3()
{
ck.style.backgroundColor="#ef5734";
ck.style.backgroundImage=" linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)"
ck.style.backgroundColor="rgb(153,217,234)"
ck.style.transform="scale(1.1)"
ck.innerHTML+=  `<input class="btn_inp" id="inp_id2"type="txt">`
ck.innerHTML+= `<h3 class="head3">Quanity:</h3>`
ck.innerHTML+=`<button class="btn_buy1" id="buy_final1">Buy</button>`
quan3.style.display="inline";
ck1.style.display="inline";
buy3.style.display="inline";

}
function fun1_1()
{
    buy1.style.backgroundColor="#ef5734"
    
}
function fun2_1()
{
    buy2.style.backgroundColor="#ef5734"
}
    
function fun3_1()
{
    buy3.style.backgroundColor="#ef5734"
    
}
// Animations

var anim=document.getElementById('vani')
var heart=document.getElementById('heart')
var heart1=document.getElementById('heart1')
var heart2=document.getElementById('heart2')
var heart3=document.getElementById('heart3')
var para=document.getElementById('para')
var para1=document.getElementById('para1')
anim.addEventListener('click',anima)
function anima()
{
    anim.style.filter="drop-shadow(2px 2px 2px red)"
anim.innerHTML+=`
<div class="glass">
    <img src="images/heart.png" alt="" class="heart">
    <img src="images/heart.png" alt="" class="heart" id="heart2">
    <img src="images/heart.png" alt="" class="heart" id="heart3">

</div>`
heart.style.display="block";
heart1.style.display="block";
heart2.style.display="block";
heart3.style.display="block";

anim.innerHTML+=`<div class="para" id="para">
<p class="parag" id="para1">ContactUs<br>delicious_ices@gmail.com</p>
</div>`
para.style.display="block";
para1.style.display="block"
document.getElementById("container_id").style.animation = "mymove 2s ";
}

anim.addEventListener('dblclick',disappear)
function disappear()
{
    heart.style.display="none";
    heart1.style.display="none"; 
    para.style.display="none";
para1.style.display="none"
}


// Billing Calculataions
var choc_price=200;
var van_price=120;
var but_price=150;
var choc_quan=0;
var van_quan=0;
var but_quan=0;
var choc_bill=null;
var van_bill=null;
var but_bill=null;
var choc_ht=0;
// 

// final
var bill_f=document.getElementById('bill')
var bill_p=document.getElementById('head-bid')
var choc_head=document.getElementById('head_1').innerText;
var van_head=document.getElementById('head_2').innerText;
var but_head=document.getElementById('head_3').innerText;
var one=document.getElementById('one')
var two=document.getElementById('sec')
var buy=document.getElementById("buy_f")


var choc=document.getElementById('buy_1')
choc.addEventListener('click',cal_choc)
function cal_choc()
{
    choc_quan=ak1.value;
    if(choc_quan==null || choc_quan==0)
    {
      choc_bill=0;
    }
    else{
   
    choc_bill=choc_price*choc_quan;
    console.log(choc_bill)
    two.innerHTML+=`<ul class="head-b2"id="head-bid">
    <li class="head_bi">${choc_head}</li>
    <li class="head_bi">${choc_quan}</li>
    <li class="head_bi">${choc_bill}</li>
    <li class="head_bi">${choc_bill}</li>
</ul>`
choc.disabled=true;
    }
}
choc_quan=ak1.value;
// vanilla
var van=document.getElementById('buy_2')
van.addEventListener('click',cal_van)
function cal_van()
{
    van_quan=bk1.value;
    if(van_quan==null || van_quan==0)
    {
       van_bill=0;
    }
    else{
   
    van_bill=van_price*van_quan;
    console.log(van_bill)
    two.innerHTML+=`<ul class="head-b2"id="head-bid">
    <li class="head_bi">${van_head}</li>
    <li class="head_bi">${van_quan}</li>
    <li class="head_bi">${van_bill}</li>
    <li class="head_bi">${van_bill}</li>
</ul>`
van.disabled=true;
    }
}
van_quan=bk1.value;
// butterscotch
var but=document.getElementById('buy_3')
but.addEventListener('click',cal_but)
function cal_but()
{
    but_quan=ck1.value;
    if(but_quan==null || but_quan==0)
    {
        bill_f.style.display="none";
        but_bill=0;
    }
    else{
   
    but_bill=but_price*but_quan;
    console.log(but_bill)

    two.innerHTML+=`<ul class="head-b2"id="head-bid">
    <li class="head_bi">${but_head}</li>
    <li class="head_bi">${but_quan}</li>
    <li class="head_bi">${but_bill}</li>
    <li class="head_bi">${but_bill}</li>
</ul>`
but.disabled=true;
    }
}
but_quan=ck1.value;

// final
var sum=0;
var section=document.getElementById('section')
var buy=document.getElementById("buy_f")
buy.addEventListener('click',buy_sum)
var total= document.getElementById('sec2');
total.style.height="50px";
total.style.marginTop=" -27px"; 
 var sum=choc_bill+van_bill+but_bill;

function buy_sum()
{
   
    if( choc_bill==null &&  van_bill==null &&  but_bill==null)
    {
        alert("Please Have a Taste of Our Delicious Icecreams!")
        event.preventDefault()
    }
  else{

    one.style.display="none";
    bill_f.style.display="block";
    sum=choc_bill+van_bill+but_bill;
    console.log("sum",sum)
  total.innerHTML=`<ul class="head-b2"id="head-bid">
  <li class="head_bi">Total</li>
  <li class="head_bi"></li>
  <li class="head_bi"></li>
  <li class="head_bi">${sum}</li>
</ul>`

}   
}