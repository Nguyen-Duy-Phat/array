let value = prompt("Enter a number: ");
let number = [1,3,5,7,9,10,11]
for (let i = 0;i < number.length;i++){
    if (value == number[i] ){
        alert("value " + number[i] + "found at " + i);
    }
}