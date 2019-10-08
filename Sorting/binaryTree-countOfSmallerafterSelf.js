/*

You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.

*/

// Time Complexity O (n) // iterate once over all values
// Space Complexity O(n) // number of tree nodes created

class BST{
  constructor(v, smaller = 0){
    this.value = v;
    this.left = this.right = null;
    this.size = smaller;
  }

  insert(v, smaller = 0){
    if(v > this.value){
      if(this.right){
        return this.right.insert(v, smaller + this.size + 1)
      } else {
        this.right = new BST(v)
        return this.size + smaller + 1
      }
    } else{
      this.size++;
      if(this.left){
        return this.left.insert(v, smaller);
      } else {
        this.left = new BST(v)
        return smaller;
      }
    }
  }
}

const countSmaller = arr => {
  const bst = new BST(arr[arr.length - 1]);
  const output = new Array(arr.length);  
  output[output.length - 1] = 0;
  
  for(let i = arr.length - 2; i >= 0; i--){
    output[i] = bst.insert(arr[i]);
  }
  
  return output;
};

console.log('count smaller than self', countSmaller([5, 2, 6, 1]));
