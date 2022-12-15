/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = (nums) => {
    nums.sort(function(a, b){return a - b});
    const res=[]
    for(let i = 0; i < nums.length && nums[i] <= 0; i++){
        if(i === 0 || nums[i - 1] !== nums[i])
            // res.push(twoSum(nums, i, res));
            twoSum(nums, i, res);
    }

    return res;
};


var twoSum = (nums, i, res) => {
    let low = i + 1;
    let high = nums.length - 1;

    while(low < high){
        let sum = nums[i] + nums[low] + nums[high]

        if(sum < 0) low = low+1
        else if(sum > 0) high = high-1
        else {
            res.push([nums[i], nums[low], nums[high]])
            low++
            high--
            while(low < high && nums[low] == nums[low - 1]) {
                low = low + 1
            }
            while(low < high && nums[high] == nums[high + 1]) {
                high = high + 1
            }
        }
    }
    return res
};


/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 * 
 */