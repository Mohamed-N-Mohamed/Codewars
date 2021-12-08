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

//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))
}

console.log(findLongest([1, 10, 100]))


/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'*/

function removeDuplicateWords (s) {
  // your perfect code...
  let words = s.split(' ');
  let uniq = [...new Set(words)].join(' ')
 return uniq
 
  
}
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');



function solution(str){
  return str.split("").reverse().join('')
  
}

console.log(solution('hello'))




function repeatStr (n, s) {
  let str = ''
  for(let i = 0; i < n; i++){
    str += s

  }
  return str
 
}


console.log(repeatStr(3, '*'))



function correct(string)
{
  return correct = string.replace(/0/g, '0').replace(/1/g, 'I')

}

console.log(correct('L0ND0N'))


function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

console.log(numberToString(67, '67'))


function domainName(url)
{
let answer = url.replace('http://','').replace('https://','').replace('www.','');
let answer2 = answer.split('.')[0]

console.log(answer2)
}





domainName("www.xakep.ru")

function count (string) {  
  // The function code should be here
  let ob = {};

  let answer = string.split('');
  answer.forEach((char) => {
    if(ob[char]){
      ob[char] = ob[char] + 1
    } else {
      ob[char] = 1
    }
    

  })
console.log(ob);
}


function highestRank(arr){
  //Your Code logic should written here
  let highest = 0;
  let ob = {}

  let answer = arr.forEach((el) => {
    
  })
  }



count('aba')


highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);


let data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]


function getNames(data){
 return data.map((item) => {return item.name})
 
  
}

console.log(getNames(data))