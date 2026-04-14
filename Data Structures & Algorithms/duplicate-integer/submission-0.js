class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let array =[]

     for(let num of nums){
        if(array.includes(num)){
          return true;
        }
        array.push(num);
     }


     return false;


    }
}
