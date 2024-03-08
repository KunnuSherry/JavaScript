function faultycalc(p1, p2, operation) {
    let x = Math.random();
    if (x > 0.2) {
        if (operation == 1) {
            return p1-p2 ;
        }
        else if (operation == 2){
            return p1*p2 ;
        }
        else if (operation == 3){
            return p1/p2 ;
        }
        else if (operation == 4){
            return p1+p2 ;
        }
                
    }
    else{
        if (operation == 1) {
            return p1+p2 ;
        }
        else if (operation == 2){
            return p1-p2 ;
        }
        else if (operation == 3){
            return p1*p2 ;
        }
        else if (operation == 4){
            return p1/p2 ;
        }
    }
}
const p1 = prompt("First Number");
const p2 = prompt("Second Number");
const operation = prompt("1 for add/ 2 for subtract/ 3 for multiplication/ 4 for division");
const result = faultycalc(p1, p2, operation);
console.log(result);
