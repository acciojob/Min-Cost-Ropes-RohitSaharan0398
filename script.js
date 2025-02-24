function mincost(arr)
{ 
//write your code here
	arr.sort();
	sum=arr[0];
	let arr1= new Array(0);
	for(int i=0;i<arr.length-1;i++){
       sum+=arr[i+1];
		arr1.push(sum);
	}
	sum=0;
	arr1.forEach((element)=>{
		sum+=element;
	});
	
	
	return sum;
// return the min cost
  
}

module.exports=mincost;
