let a = prompt();
let str = a.toString();
let result = [str[0]];
for (let x=1;x<str.length;x++){
    if ((str[x-1]%2 ===0)&&(str[x]%2 === 0)){
        result.push("-",str[x]);
    }else {
        result.push(str[x]);
    }
}
document.write(result.join(""));