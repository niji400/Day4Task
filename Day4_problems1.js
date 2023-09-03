//a.odd or even 
//Aanonymous  
var arrayodd=function(...array){
  for(var i = 0 ; i< array.length ; i++){
        if(array[i]%2!=0){
           console.log(array[i])
        } 
   }
}
var arrofOdd=[1,2,3,4,5];
arrayodd(...arrofOdd);
//IIFE
(function(array){
  for(var i = 0 ; i< array.length ; i++){
             if(array[i]%2!=0){
              console.log(array[i]);
             } 
        }
  })([1,2,3,4,5,6,7,8])

//b.convert all strings title caps in string arr 
//Anonymous
function toTitleCase(...arr) {
   for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}
var arr=["nithya","hanu","mithu","sakthi","karthi","siva","dhanvi"];
var res = toTitleCase(...arr);
console.log("Title caps in given string:",res);

//IIFE
(function (str) {  
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
  
})["nithya","hanu","mithu","sakthi","karthi","siva","dhanvi"];


//c.sum of all numbers in an arr
var num=[10,20,30,40,50,60,70,80,90];
let sum=0;
for(let i=0; i<=num.length-1;i++){
sum=sum+num[i];
}
console.log("Sum of numbers in an array:",sum);

//IIFE
(function(array){
 var sum = 0;
 for(var i = 0 ; i< array.length ; i++){
   sum = sum + array[i];
   }
 return sum;
})([1,2,3,4])
////var  sum=num.reduce((a,b)=> a+b,0);
//console.log("Sum of numbers in an array:",sum);

//d.Return all prime numbers in an arr
//Anonymous function
var a = [5,3,9, 63, 29, 35, 6, 55, 23,7]

var prime=function(...numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
prime(...a);
//IIFE
(  
  function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4,5,6,7,8,9,10])

//e.Return all palindromes in an arr
const arr2 = ['carecar', 1344, 12321, 'did','madam','dad', "cannot"];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr2.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

//f.median of two sorted arrays of the same size
const median = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (sA,sB) {
    return sA - sB;
    });
  let len = x.length;
  
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}

let sA = [0,2,3,5,9,10];
let sB = [1,4,6,7,8,11];
console.log(median(sA,sB));

//g.remove duplicates from an array
var inputArray = ["a", "a","a", "b", "b", "c", "d", "a", "e"];

var outputArray = inputArray.filter(
  function(item, index) {
    //console.log(item, index);
    //console.log("Last",inputArray.lastIndexOf(item));
    return inputArray.indexOf(item) === inputArray.lastIndexOf(item);
  }
  );
console.log(outputArray);

//h.rotate an array by k times
var rotate=function(array1,numberOfShifts){
  let temp=0;
  const leng=array1.length;
  numberOfShifts=numberOfShifts % leng;
  for(let i=0;i<numberOfShifts;i++){
    temp=array1.pop();
    array1.unshift(temp);
  }
  return array1;
};
console.log(rotate([3,5,6,7,8],3));



