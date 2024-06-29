let date=document.querySelector(".date");
let display=document.getElementById("para")
date.max= new Date().toISOString().split("T")[0];

function calculateage(){
    let birthdate=new Date(date.value);
    let d0=birthdate.getDate();
    let m0=birthdate.getMonth()+1;
    let y0=birthdate.getFullYear();

    let today= new Date();
    let d1=today.getDate();
    let m1=today.getMonth()+1;
    let y1=today.getFullYear();
    
    let d2,m2,y2;
    y2=y1-y0;
    if(m1>=m0){
        m2=m1-m0;
    }
    else{
        y2--;
        m2=12+m1-m0;
    }
    if(d1>=d0){
        d2=d1-d0;
    }
    else{
        m2--;
        if(m2<0){
           m2=11;
           y2--;
        }
        d2=getnumdays(y0,m0)+d1-d0;
        
    }
    
    display.style.backgroundColor="blanchedalmond";
    display.textContent=`Years is ${y2} Months is ${m2} Days is ${d2}`;
}

function getnumdays(year,month){
    return new Date(year,month,0).getDate();
}
console.log(getnumdays(2006,2));