// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  
	return parseInt(String(n).split('').sort().reverse().join(''))
	  }

//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer pwe want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
//In other 

function digPow(n, p){
	let arr=n.toString().split('').map(Number).reduce((acc,cur,i,arr)=>acc+(Math.pow(arr[i],p+i)),0)/n
	return (''+arr).includes('.')?-1:arr
}
	  
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!

function getSum( a,b ){

	if(a == b) {
		 return a
	}
	else if (a < b) {
		 return a + getSum(a+1, b)
	} else {
		 return a + getSum(a-1, b)
	};
 }

 //You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

 function sortArray(array) {
	const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
	return array.map((x) => x % 2 ? odd.shift() : x);
 };    

 //Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s){
	let res = s.split(' ');
	let a = Infinity;
	
	for (let i = 0; i < res.length; i++) {
	  a = Math.min(res[i].length, a);
	}
	return a;
 }

 //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.

function abbrevName(name){
	let arr = (name.split(' '));
	let abbr = (arr[0].charAt(0)).toUpperCase() + "." + (arr[1].charAt(0)).toUpperCase();
	return abbr; 
 }

 // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
	if (pin.length !== 4 && pin.length !== 6) {
	  return false;
	}
	for (let i = 0; i < pin.length; i++) {
	  if (pin[i] < '0' || pin[i] > '9') {
		 return false;
	  }
	}
	return true;
 }


 //An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 
 function isIsogram(str){
	var i;
	var j;
 str = str.toLowerCase();
 for(i = 0; i < str.length; ++i) {
	for(j = i + 1; j < str.length; ++j) {
	  if(str[i] === str[j]) {
		 return false;
	  }
	}
 }
 return true;
}

//Write a function to split a string and convert it into an array of words. For example:"Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string){
	return string.split (' ');
 }

 //Count the number of divisors of a positive integer n.

 function getDivisorsCnt(n){
	if (n < 1) {
	  return n;
	}
	let count = 0;
	for (let i = 1; i <= n; i++) {
	  if(n % i == 0)
	  count++;
	}
	return count;
}