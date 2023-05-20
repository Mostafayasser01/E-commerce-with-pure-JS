import {HeadImages,images,captions,SmartDevicesImg,SmartDevicesCap,ColthesImg,ColthesCap,AccImg,AccCap,ToyImg,ToyCap} from './DataList.js';

var CurrentIndex=0;
var temp=0;
var temp1=0;
var nextbtn=document.getElementById("Nextbtn");
var prevbtn=document.getElementById("Prevbtn");
var HeadImage=document.getElementById("HeadImage");
var imgcaptions=document.getElementsByClassName("Caption");
var imgs=document.getElementsByClassName("TopSalesimg");
var SmartDev=document.getElementById("smartdev");
var CategriesImg=document.getElementsByClassName("Categuriesimg");
var CategriesDiv=document.getElementsByClassName("CateguriesDiv");
var Categriescaptions=document.getElementsByClassName("CateCaption");
var ColtheDev=document.getElementById("colthedev");
var AccDev=document.getElementById("accdev");
var ToyDev=document.getElementById("toydev");

var i=0;
setInterval(function(){
    HeadImage.src=HeadImages[i];
    i++;
    if(i>4){
        i=0;
    }
},3500)


prevbtn.disabled=true;

nextbtn.addEventListener("click",function(){
    temp=CurrentIndex+1;  
    for(var i=0;i<5;i++){imgs[i].src=images[temp++];}
    temp=CurrentIndex+1;  
    for(var i=0;i<5;i++){imgcaptions[i].innerHTML=captions[temp++];}
    CurrentIndex++;
    prevbtn.disabled=false;
    if(CurrentIndex===5){
        nextbtn.disabled=true;
        // temp--;
    }
})
prevbtn.addEventListener("click",function(){
    temp1=temp-1;
    for(var i=4;i>=0;i--){imgs[i].src=images[temp1--];}
    temp1=temp-1;
    for(var i=4;i>=0;i--){imgcaptions[i].innerHTML=captions[temp1--];}
    temp--;
    CurrentIndex--;
    nextbtn.disabled=false;
    if(CurrentIndex<0){
        prevbtn.disabled=true;
    }
})


SmartDev.addEventListener("click",function(){ 
      
    for(var i=0;i<SmartDevicesImg.length;i++){

        CategriesImg[i].src=SmartDevicesImg[i];
        Categriescaptions[i].innerHTML=SmartDevicesCap[i];
        CategriesDiv[i].classList.remove("d-none"); 
          }
})

ColtheDev.addEventListener("click",function(){  
    for(var i=0;i<CategriesDiv.length;i++){
        CategriesDiv[i].classList.add("d-none"); 
          }
    for(var i=0;i<ColthesImg.length;i++){
        CategriesImg[i].src=ColthesImg[i];
        Categriescaptions[i].innerHTML=ColthesCap[i];
        CategriesDiv[i].classList.remove("d-none"); 
          }
})

AccDev.addEventListener("click",function(){  
    for(var i=0;i<CategriesDiv.length;i++){
        CategriesDiv[i].classList.add("d-none"); 
          }
    for(var i=0;i<AccImg.length;i++){
        CategriesImg[i].src=AccImg[i];
        Categriescaptions[i].innerHTML=AccCap[i];
        CategriesDiv[i].classList.remove("d-none"); 
          }
})

ToyDev.addEventListener("click",function(){  
    for(var i=0;i<CategriesDiv.length;i++){
        CategriesDiv[i].classList.add("d-none"); 
          }
    for(var i=0;i<ToyImg.length;i++){
        CategriesImg[i].src=ToyImg[i];
        Categriescaptions[i].innerHTML=ToyCap[i];
        CategriesDiv[i].classList.remove("d-none"); 
          }
})