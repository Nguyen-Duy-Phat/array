let number = [1,5,11,3,2,9,50,25];
let max = number[0];
let second;
for (let i = 0;i<number.length;i++){
    if (number[i] > max){
        second = max ;
        max = number[i];
    }
    if (number[i]<max && number[i]>second){
        second = number[i];
    }
}
alert("max: " +max+ " số lớn thứ 2 là : " + second );