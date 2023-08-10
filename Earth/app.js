const consumption =document.getElementById("consumption");

consumption.onclick=()=>{
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')";
    document.getElementById("save").innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    consumption.style.backgroundColor="green";
    climate.style.backgroundColor="transparent";
    resources.style.backgroundColor="transparent";
    people.style.backgroundColor="transparent";
};

const climate =document.getElementById("climate");

climate.onclick=()=>{
    console.log("hh");
    document.body.style.background="url(' https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')";
    document.getElementById("save").innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22";
    climate.style.backgroundColor="blue";
    consumption.style.backgroundColor="transparent";
    resources.style.backgroundColor="transparent";
    people.style.backgroundColor="transparent";
};


const resources =document.getElementById("resources");

resources.onclick=()=>{
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    document.getElementById("save").innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    resources.style.backgroundColor="orange";
    consumption.style.backgroundColor="transparent";
    climate.style.backgroundColor="transparent";
    people.style.backgroundColor="transparent";
};


const people =document.getElementById("people");

people.onclick=()=>{
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')";
    document.getElementById("save").innerText="Do your bit! Shop only what you need,eat only what you need and always save the left overs";
    document.getElementById("frame").src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Aria";
    people.style.backgroundColor="red";
    consumption.style.backgroundColor="transparent";
    resources.style.backgroundColor="transparent";
    climate.style.backgroundColor="transparent";
};
    
     










