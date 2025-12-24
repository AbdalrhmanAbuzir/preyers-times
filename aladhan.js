let day = document.querySelector(".day");
let date = document.querySelector(".date");
let flages = document.querySelectorAll(".sidebar div");
let paragraph =document.querySelector(".p p:last-child");
let prayers =document.querySelectorAll(".prayers div p");
let prayer = document.querySelector(".prayers")
const axioss = axios.create();
// to set the day and the date in header 
let days = ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"];
// let prayersNames= ["صلاة الفجر","الشروق","صلاة الظهر","صلاة العصر","صلاة المغرب","صلاة العشاء"];
let time= new Date();
day.innerHTML=days[time.getDay()];
date.innerHTML=`${time.getDate()}-${time.getMonth()+1}-${time.getFullYear()}`;
console.log(flages);

// set event handler  
for(let i=0; i<flages.length; i++){
    
    flages[i].onclick=()=>{   
        prayer.style.display="flex";
        getApi(flages[i].getAttribute("class"));
        console.log(flages[i]);    
        changeParagraph(flages[i].getAttribute("name"));
    }
    // console.log(x);

}

function changeParagraph(name){
    paragraph.innerHTML=`اوقات الصلوات في ${name}`;
}

    function getApi(country){
    let url=`https://api.aladhan.com/v1/timingsByAddress/null?address=${country}`;
    axioss.get(url)
    .then((xx)=>{
                        // to get required object form API
        console.log(xx.data.data.timings);
        let xo =Object.values(xx.data.data.timings);
        // console.log(xo);
        prayersTime(xo);
    })
    // console.log(xx.data.data.timings);
}

function prayersTime(times){
    // i did this copy to shift the time of sunset
    times.copyWithin(4,5,7)
    for(let i=0;i < 6;i++){
            prayers[i].innerHTML=times[i];
        // console.log(times[i]);
        // console.log(prayers[i]);
    }
}


