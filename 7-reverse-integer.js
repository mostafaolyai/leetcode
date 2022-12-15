/**
 * @param {number} x
 * @return {number}
 */
 const reverse = (x) => {
    let neg = false
    if(x<0){
        x = -1*x
        neg = true
    }
    
    let rev = 0;
    while(x !== 0){
        const pop = x % 10
       x= Math.trunc(x/10)

        rev = rev*10 + pop
    }
    if(rev > 2**31 - 1) return 0   

    return neg ? -1*rev : rev
};

/**
 * Medium

9108

11167

Add to List

Share
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
 */