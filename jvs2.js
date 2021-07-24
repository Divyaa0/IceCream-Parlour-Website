class cafe {
    
    constructor(name, price, quantity)
     {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
       
    }
    bills(val)
    {
        this.quantity=val;
        if(this.quantity==null ||this.quantity==0)
        {
            
        }
        else{
            for(i=0;i<=cafe.length;i++)
            {
                pric=this.quantity*this.price; 
                sum+=pric;
                console.log(sum)
            }
        // pric=this.quantity*this.price; 
        // ("price of your food is",pric)
        // finalbill()
        }
    }
    finalbill()
    {
        console.log(pric.mag)
    }
    }
    


sam = new cafe('Samosa', 50, "")
mag = new cafe('Maggi', 40, "")
cha = new cafe('Chai', 30, "")
bhe = new cafe('Bhel', 80,"")
var one=document.getElementById('btn0')
var two=document.getElementById('btn1')
var three=document.getElementById('btn2')
var four=document.getElementById('btn3')
one.addEventListener('click',func)
two.addEventListener('click',func)
three.addEventListener('click',func)
four.addEventListener('click',func)
function func()
    {
        sam.bills(document.getElementById('inp0').value)
        mag.bills(document.getElementById('inp1').value)
    }
       



    var pric="";
var i=0;
var sum=0;