//7kyu
function removeUrlAnchor(url){
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
  let a1 = url.split('#')[0]
  let answer = url.replace('#about', '')
  console.log(answer)
}
removeUrlAnchor('www.codewars.com#about')


function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let answer = array.sort((a,b) => {
    return a.length - b.length
  })
  console.log(answer)
};
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])

function sumOfMinimums(arr) {
  //Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

  let sumOfMin = [];

  arr.forEach((minNUm) => {
    sumOfMin.push(Math.min(...minNUm))

  })

  let answer = sumOfMin.reduce((a,b) => {
    return a + b
  })
  console.log(answer)
}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])

//You are given a string of letters and an array of numbers.
//The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
//After each removal the size of the string decreases (there is no empty space).
//Return the only letter left.

function lastSurvivor(letters, coords) {
  letters = letters.split('');
  console.log(letters)
  for (let i = 0; i < coords.length; i++){
   letters.splice(coords[i], 1)
  }
  return letters.join('')
}


console.log(lastSurvivor('abc', [1, 1]))


//Write function which will create a string from a list of strings, separated by space.

function wordsToSentence(words) {
  return words.reduce((a, b) => a + ' ' + b)
}


console.log(wordsToSentence(["hello", "world"]))


