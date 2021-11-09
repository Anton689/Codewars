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
	  