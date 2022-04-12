let arr = [1,6,7,8,9];
let arr2 = [];

function convert() {
    let n = arr.length;
    for (let i = 0; i < n - 1 - i; i++) {
        let temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    console.log(arr);
}

function count() {
    // let arr
    // temp = true khi phan tu khong ton tai trong mang
    let temp = true;

    for (let i = 1; i < 11; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                // temp = false khi phan tu i ton tai mang arr
                temp = false;
                break;
            }
        }

        // kiem tra gia tri i co ton tai trong mang hay khong
        // dua vao bien temp
        // neu temp = true -> push i vao arr2
        // neu temp = flase -> dat lai gia tri temp =true de so sanh gia tri i + 1
        if (temp === true) {
            arr2.push(i);
        } else {
            temp = true;
        }
    }
    console.log(arr2);
}

function coun2() {
    let i = 1;
    while (i < 11) {
        if (findValueOfArr(i, arr) === false) {
            arr2.push(i);
        }
        i++;
    }
    console.log(arr2)

}

function findValueOfArr(number, arr) {
    for(let i = 0; i< arr.length; i++) {
        if (number === arr[i]) {
            return true;
        }
    }
    return false;
}

coun2();