function isAnagram(str1, str2) {
  return formatedString(str1) === formatedString(str2)
}

function formatedString(str) {
  return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
}
module.exports = isAnagram;