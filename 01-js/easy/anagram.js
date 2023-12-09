/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let temp1 = str1.split('').sort()
  let temp2 = str2.split('').sort()
  // console.log(temp1)
  // console.log(temp2)
  let ans = false
  if (str1 === str2) {
    ans = true
  } else if (temp1.length === temp2.length) {
    for (let i = 0; i < temp1.length; i++) {
      if (temp1[i] === temp2[i]) {
        ans = true
      }
    }
  }

  return ans
}

// console.log(isAnagram('openai', 'aiopen'))
module.exports = isAnagram
