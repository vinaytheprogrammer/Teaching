
function type(x) {
    if (x>0){
        console.log('Positive');
    }
    else if (x==0){
        console.log('Zero');
    }
    else{
        console.log('Negetive');
    }
}

console.log(type(0));






function getCurrentHour() {
    return new Date().getHours();
}

let time = getCurrentHour();
if (time<12){
    console.log("Good Morning !!")
}
else if (time>12 && time<4){
    console.log("Good Afternoon!!")
} 
else {
    console.log("Good Evening!!")
}