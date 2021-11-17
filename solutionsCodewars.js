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

		 //Make a simple function called greet that returns the most-famous "hello world!".

		 const greet = () => {
			return 'hello world!';
		 }

		 //Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

		 function sumDigits(n) {
			let strNum = Math.abs(n).toString();
			let sum = 0;
			for (let i = 0; i < strNum.length; i++) {
			  sum += parseInt(strNum[i]);
			}
			return sum;
		 }

		 //Make a program that filters a list of strings and returns a list with only your friends name in it.

		 function friend(friends){
			return friends.filter(el => el.length === 4);
		 }

		 //Your goal is to return multiplication table for number that is always an integer from 1 to 10.

		 function multiTable(number) {
			return [1,2,3,4,5,6,7,8,9,10]
			  .map(item => `${item} * ${number} = ${item*number}`)
			  .join('\n');
			}

		//Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

		function multiples(s1,s2,s3){
			const arr = [];
			for (let i = 1 ; i < s3; i++)
			{ if (i % s1 === 0 && i % s2 === 0)arr.push(i)
			}
			return arr;
		 }
		 
		 //Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

		 function spEng(sentence){
			for (var i = 0; i < sentence.length - 6; i++) {
			  if (sentence.slice(i, i + 7).toLowerCase() === 'english') {
				
				 return true;
			  }
			}
			return false;
		 }


//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

function reverse(string){
	return string.split(' ').reverse().join(' ');
 }

 function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer == 0){
      result.push(i);
      
    } 
  }
  return result;
}

//Debug function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

function getSumOfDigits(integer) {
   const numString = integer.toString();
   let sum = 0;
   for(i = 0; i < numString.length; i++){
       sum += Number(numString[i]);
   }
   return sum;
}

//The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
	let result = 1;
	for (let i = 1; i <= power; i++){
	  result = result * number;
	}
	return result;
 }

 //Be Concise IV - Index of an element in an array

 function find(array, element) {
	if(array.indexOf(element) !== -1) {
	  return array.indexOf(element);
	}
	return "Not found";
 }

 //You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:
 //could contain 101 characters or less

 function sumSquares(array) {
	let res = array.reduce((a, e) => {return e**2+a },0);
	return res;
 }

 //Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.

 function remainder(a, b){
   return (a > b ? a % b : b % a)
}

//Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

function sumTriangularNumbers(n) {
	let sum=0,total=0;
	for(let i=0;i<=n;i++){
	sum+=i*1
	total+=sum
	} return total
 }

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
	const litres = 0.5; return Math.floor(time * litres);
 }

 //Imagine there's a big cube consisting of n3 n^3n 
//3 small cubes. Calculate, how many small cubes are not visible from outside.

function notVisibleCubes(n) {
	console.log(n)
	  return n > 3 ? (n-2) * (n-2) * (n-2) : n == 3 ? 1:0
	}

	// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.

	function numberOfRectangles(m, n) {
		return (((m**2) + m)*((n**2) + n))/4
	 }

	 //Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

	 var summation = function (num) {
		let sum = 0
		for(let i = 0; i <= num; i++) {
			 sum += i
		}
		return sum
  }

  //What is between?

  function between(a, b) {
	arr = []
	for(i = a;i <= b; i++){ 
		 arr.push(i)
	}
	return arr
 }

 //This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

 var a = "code";
var b = "wa.rs";
var name = a + b;

//Calculate how many times a number can be divided by a given number.

const divisions = (n, divisor) => {
	let count=0;
	while(n>1){
	count++
	n=n/divisor
	}
	return count-1;
 };

 //Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

 function isDivideBy(number, a, b) {
	if (number % a == 0 && number % b == 0){
	  return true;
	}
	return false;
 }

 //Merge two sorted arrays into one

 function mergeArrays(arr1, arr2) {
   let mergeArr = [...arr1, ...arr2];
   let result = mergeArr.sort(function (a, b) {return a - b;
  });
  return [...new Set (result)];
  
}

//Digital root is the recursive sum of all the digits in a number.

function digital_root(n) {
	return (n - 1) % 9 + 1;
 }

 //Detect Pangram

 function isPangram(string){
	string = string.toLowerCase();
	return "abcdefghijklmnopqrstuvwxyz"
	  .split("").every(function(x){
		 return string.indexOf(x) !== -1;
	});
 }

 //Elevator Distance

function elevatorDistance(array) {
	return array
	  .map((v,i,arr)=>arr[i]-arr[i-1]).filter(v=>!isNaN(v))
	  .reduce((a,b)=>
	a+Math.abs(b),0)
 }

//  Expressions Matter

const expressionMatter = (a, b, c) => Math.max(...[a * (b + c), a * b * c, a + b + c, (a + b) * c]);

//Terminal game move function

function move(position, roll) {
	return position + (roll * 2)
}

//Opposite number

const opposite = number => -number;

//Greet Me

let greet = function(name) {
	return `Hello ${(name.slice(0,1).toUpperCase())+(name.slice(1).toLowerCase())}!`
	};

//Waiting room

function lastChair(n) {
	return n - 1;
 }
 
 
 //SevenAte9

 function sevenAte9(str){
	return str.replace(/79(?=7)/g, '7');
 }
 
 //Credit Card Mask
 
 function maskify(cc){
	return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
 }

 //Greet Me

 var greet = function(name) {
	return `Hello ${(name.slice(0,1).toUpperCase())+(name.slice(1).toLowerCase())}!`
	};


	//Square Every Digit

const squareDigits = number =>
  Number(
    String(number)
      .split('')
      .map(digit => digit ** 2)
      .join('')
    )

 
  




