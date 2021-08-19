function removeUrlAnchor(url){
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
  let a1 = url.split('#')[0]
  let answer = url.replace('#about', '')
  console.log(answer)
}




removeUrlAnchor('www.codewars.com#about')