function getRandomColor(){
    let val1 = Math.floor(Math.random()*255);
    let val2 = Math.floor(Math.random()*255);
    let val3 = Math.floor(Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
let boxes = document.getElementsByClassName("box");
let a = setInterval(()=>{
    document.querySelector(".content").style.background = getRandomColor();
},3000);
console.log(a);
