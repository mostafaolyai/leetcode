/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = (s) => {
    if(s === null || s.lenght < 1) return "";

    let start = 0;
    let end = 0;

    for(let i=0; i<s.length; i++){
        const len1 = expandFromMiddle(s, i, i)
        const len2 = expandFromMiddle(s, i, i+1)
        const len = Math.max(len1, len2)

        if(len > end - start){
            start = Math.ceil(i - ((len - 1) / 2))
            end = Math.floor(i + (len / 2))
        }
    }
    return s.substring(start, end + 1)
};

var expandFromMiddle = (s, left, right) => {
    if(s === null || left > right) return 0

    while(left >= 0 && right < s.length && s[left] === s[right]){
        left--
        right++
    }

    return right - left - 1
}

/**
 * Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

/**
 * aba
 * len1:1
len2:0
len:1
i:0
s:'aba'
start:0
end:1
=======
len1:3
len2:0
len:3
i:1
s:'aba'
start:0
end:3
=======
len1:1
len2:0
len:1
i:2
s:'aba'
start:0
end:3
 */