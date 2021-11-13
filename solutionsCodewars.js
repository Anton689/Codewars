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

//Given an integral number, determine if it's a square number

var isSquare = function(n){
	if (n < 0){
	  return false;
	}
	if (n % Math.sqrt(n) == 0){
	  return true;
	}
	return false;
 }

 //Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

 function greet(name){
	if(name === "Johnny")
	  return "Hello, my love!"
	return "Hello, " + name + "!";
	}

	//Upto and including n, this function will return the sum of all multiples of 3 and 5.

	function findSum(n) {
		let sum = 0;
		for(let i = 1; i <= n; i++){
		  if(i % 3 == 0 || i % 5 == 0)sum+=i;
		}
		return sum;
	 }

	 //Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

	 function boolToWord( bool ){
		return bool === true ? 'Yes' : 'No';
	 }

	 // Implement a function which convert the given boolean value into its string representation.
	 function booleanToString(b){
		return b === true ? 'true' : 'false';
	 }

	 //Write a function which takes a number and returns the corresponding ASCII char for that value.

	 function getChar(c){
		return String.fromCharCode(c);
	 }

	 //Define a function that removes duplicates from an array of numbers and returns it as a result.

	 function distinct(a) {
		return Array.from(new Set(a));
	}
	//This time no story, no theory. The examples below show you how to write function accum:

	function accum(s) {
		const result = []
		const lowerStr = s.toLowerCase()
	 
		for(let i = 0; i < lowerStr.length; i++) {
		  let str = lowerStr[i].toUpperCase()
		  for(let j = 0; j < i; j++) {
			 str += lowerStr[i]
		  }
		  result.push(str)
		}
	 
		return result.join("-")
	 }

	 //In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

	 function highAndLow(numbers){
		numbers = numbers.split(' ').map(Number);
		  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
		}

		//Your task is to write function factorial.

		function factorial(n){
			if (n === 1){
			  return 1;
			}
			if (n === 0){
			  return 1;
			}
			return n * (factorial(n-1))
		 }

		 //Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

		 String.prototype.toAlternatingCase = function () {
  			return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
		 }

		 //Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
		 
		 function angle(n) {
			if (n == 2){
			  return n
			}
			let sum = 180 * (n - 2);
			return sum;
		 }

		 //Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

		 function arithmetic(a, b, operator){
			switch (operator) {
			  case 'add':
				 return a + b;
			  case 'subtract':
				 return a - b;
			  case 'multiply':
				 return a * b;
			  case 'divide':
				 return a / b;
			}
		 }

		 //Complete the square sum function so that it squares each number passed into it and then sums the results together.

		 function squareSum(numbers){
			return numbers.reduce(function(sum, n){
			  return (n*n) + sum;
			}, 0)
		 }

		 //
		 



