class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     s = s.toLowerCase().split(" ").join("")
     t = t.toLowerCase().split(" ").join("")

     let case1 = s.split("").sort().join("")
     let case2 = t.split("").sort().join("")

     return case1 === case2






    }
}
