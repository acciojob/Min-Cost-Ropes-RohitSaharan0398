
unction binarySearchInsertIndex(arr, value) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < value) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
function mincost(arr)
{ 
let sum = 0;
    
    // Sort the array initially (this helps us get the smallest elements easily)
    arr.sort((a, b) => a - b);

    // Keep combining the smallest two elements until only one element is left
    while (arr.length > 1) {
        let val1 = arr.shift(); // Remove and get the first element (smallest)
        let val2 = arr.shift(); // Remove and get the second element (next smallest)
        
        sum += val1 + val2; // Add their sum to the total cost
        
        // Insert the combined value back into the array in sorted order
        let combined = val1 + val2;
        let insertIndex = binarySearchInsertIndex(arr, combined);
        arr.splice(insertIndex, 0, combined);
    }

    return sum;
	
  
}

module.exports=mincost;
