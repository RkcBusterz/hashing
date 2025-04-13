
function Hash(text){

var data = "";

var arr1;

for (var i = 0; i<text.length;i++){
        data = data + `${parseInt(text.charCodeAt(i).toString(8)) + text.length} `
}

arr1 = data.split(" ")
data = ""

arr1.forEach(e => {
    reverse =  e.split("").reverse().join("");
    data = data + `${(e ^ reverse) < 100 ? (e ^ reverse) + 100 : (e ^ reverse)}`
});


const inputToOutput = (num) =>{
    found = ((num * 997 - (num % 100)) + 991 + (num % 500) ) % 700;
    if(found < 100){
        return found + 100;
    }else{
        return found;
    }
}

num1 = arr1[0];

for(var x = 1; x < 200; x++){
    num1 = inputToOutput(num1)
data = data + `${(num1 ^ arr1[0]) < 100 ? (num1 ^ arr1[0]) + 100 : (num1 ^ arr1[0])}`
}


var salt = [data.at(-1),data.at(-2),data.at(-3),data.at(-4),data.at(-5),data.at(-6),data.at(-7),data.at(-8),data.at(-9)].join("")

data = data.slice(parseInt(salt.at(-1)), parseInt(salt.at(-1)) + 3) + salt + data.slice(salt.at(-1) + 3);
data = "1"+ data

var arr2 = data.match(/.{1,3}/g);

const base62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@!&%$?|§';

function toBase71(num) {
    let res = '';
    while (num > 0) {
    res = base62[num % 71] + res;
    num = Math.floor(num / 71);
    }
    return res || '0';
}


var str4 = "";

arr2.forEach(e => {
    str4 = str4+ toBase71(e)
});


str4 = str4.slice(0,265)

return str4;

}