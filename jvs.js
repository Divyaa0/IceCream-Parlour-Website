var s_pri=50
var m_pri=40
var c_pri=10
var b_pri=20
var s_quantity=0
var m_quantity=0
var c_quantity=0
var b_quantity=0
var samos_bill=""
var maggi_bill=""
var chai_bill=""
console.log("hello")

// maggi
var maggi=document.getElementById('btn1')
maggi.addEventListener('click',fun1)
function fun1()
{
   
    m_quantity=document.getElementById('inp1').value
    
    if(m_quantity==null || m_quantity==0)
    {
console.log("no entry")
    }
    else{
      
     maggi_bill=m_pri*m_quantity
 
    console.log("price is",maggi_bill)}
    
}
var m_quantity=document.getElementById('inp1').value

            // samosa
            var samos=document.getElementById('btnn')
            samos.addEventListener('click',fun2)
            function fun2()
            { 
                s_quantity=document.getElementById('inp0').value
                samos_bill=s_pri*s_quantity;
                console.log("price is",samos_bill)
                
            }

            var s_quantity=document.getElementById('inp0').value
// chai
var chip=document.getElementById("btn2")
chip.addEventListener('click',fun3)
function fun3()
            { 
                c_quantity=document.getElementById('inp2').value
                chips_bill=c_pri*c_quantity;
                console.log("price is",chips_bill)
                
                
            }
            var c_quantity=document.getElementById('inp2').value
var sum=0
var bills=document.getElementById('bill')
bills.addEventListener('click',last_fun)
function last_fun()
{
    var sum=samos_bill+maggi_bill+chips_bill
console.log(sum)    

    }}

        