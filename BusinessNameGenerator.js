let rand1 = Math.random() ;
let rand2 = Math.random() ;
let rand3 = Math.random() ;
let Cname = "";
let first, second, third ;
if(rand1 < 0.33){
    first = "crazy ";
}
else if(rand1 > 0.33 && rand1 < 0.66){
    first = "adventure " ;
}
else{
    first = "fire "
}
if(rand2 < 0.33){
    second = "engine ";
}
else if(rand2 > 0.33 && rand2 < 0.66){
    second = "food " ;
}
else{
    second = "garments "
}
if(rand3 < 0.33){
    third = "bros ";
}
else if(rand3 > 0.33 && rand3 < 0.66){
    third = "limited " ;
}
else{
    third = "hub";
}
console.log(Cname.concat(first,second,third));

