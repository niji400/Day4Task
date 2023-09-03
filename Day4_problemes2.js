//Arrow Function
//a.print odd numbers in an array 
let array = [1,2,3,4,5,6,7,8,9,10,11,12]
let odds = array.filter(n => n%2)
console.log(odds)

//b.	Convert all the strings to title caps in a string array

toTitleCase = (...str) => {
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}        
var array1=["nithya","hanu","mithu","sakthi","karthi","siva","dhanvi"];
var res = toTitleCase(...array1);
console.log(res);

//c.sum of all numbers in an array
sum = (...array3)=>{
  var sum = 0;
       for(var i = 0 ; i< array3.length ; i++){
          sum = sum + array3[i];
        }
        return sum;
        }
var array3=[10,20,30,40,50,60,70,80,90];
var totOfarr=sum(...array3);
console.log(totOfarr);

//d.Return all prime numbers in an array
primeNumber = (...numArray) => {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
var a = [5,3,9, 63, 29, 35, 6, 55, 23,7]
primeNumber(...a);

//e.return all palindrome in an array
const arr = ['mom', 'dad', 'abcde', 'racecar', 'madam','nithya'];

function namePalindrome(arr) {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split('');
    const reversedString = splitArr.reduceRight((prev, curr) => ( prev + curr ), '');
    if (curr === reversedString) return curr;
  })
}

console.log(namePalindrome(arr));