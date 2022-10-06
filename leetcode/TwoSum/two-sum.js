// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    const indexOfRest = nums.indexOf(rest);

    if (indexOfRest > -1 && i !== indexOfRest) {
      return [i, indexOfRest];
    }
  }
};
