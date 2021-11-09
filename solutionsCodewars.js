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