// 1.Do the below programs in anonymous function & IIFE

// --------------1.ANONYMOUS FUNCTION---------------------
// a.Print odd numbers in an array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr = [];
var oddNumber = function (num) {
    for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 1) {
            arr.push(num[i]);
        }
    }
};
oddNumber(num);
console.log(arr); //Output:[ 1, 3, 5, 7, 9 ]

// b.Convert all the strings to title caps in a string array
var str = "converting string to titlecase";
var strUppercase = function (str) {
    str = str.split(' ')
    for (i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(strUppercase(str)); //Output:Converting String To Titlecase

// c.Sum of all numbers in an array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num1 = 0
var sum = function (num) {
    for (i = 0; i < num.length; i++) {
        num1 = num1 + num[i]
    }
};
sum(num);
console.log(num1); //Output:55

// d.Return all the prime numbers in an array
let arr = [3, 12, 50, 23, 0];
let checkPrime = function(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
arr.forEach(function (element) {
  let isPrime = checkPrime(element);
  if (isPrime) {
    console.log(element); //Output:
    }                    //3
});                     //23


// e.Return all the palindromes in an array
let isPalindrome = function (str) {
    let newStr = str;
    str = str.split('').reverse().join('');
    return str == newStr;
}

let palindromeArr = function (arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let arr = ['mom', 'dad', 'palindrome', '1991', '1996'];
let str = palindromeArr(arr);
for (let result of str) {
    console.log(result);
}  //Output:
// mom
// dad
// 1991

// f.Return median of two sorted arrays of the same size.
let arr1 = [1, 5, 16, 11, 3];
let arr2 = [4, 2, 15, 10, 13];
let joinArr = arr1.concat(arr2);

let sortArr = function(a, b) {
  return a - b;
}

let newArr = joinArr.sort(sortArr);

let medianArr = function(newArr){
  let median;
  if(newArr.length % 2 != 0){
    let midIndex = Math.floor(newArr.length / 2);
    median = newArr[midIndex];
    console.log(median);
  }else{
    let midIndex = Math.floor(newArr.length / 2);
    median = (newArr[midIndex] + newArr[midIndex - 1]) / 2;
    console.log(median); //Output: 7.5
  }
}
medianArr(newArr);  

// g.Remove duplicates from an array
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"]; 
var removeDuplicates = function (arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr)); //Output:
                                    //[ 'apple', 'mango', 'orange' ]

// h.Rotate an array by k times
let rotateArr = function(arr, n, k){
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(arr[n + i - k]);
        }
        else {
            console.log((arr[i - k]));
        }
    }
    
}
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let k = 2;
rotateArr(arr, n, k); //Output:
                    // 4 
                    // 5 
                    // 1 
                    // 2 
                    // 3 


// --------------2.IIFE FUNCTION---------------------
// a.Print odd numbers in an array
(() => {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arr = [];
      for (i = 0; i < num.length; i++) {
          if (num[i] % 2 == 1) {
              arr.push(num[i]);
          }
      }
      console.log(arr) //Output:[ 1, 3, 5, 7, 9 ]
      return arr;
  })();  

// b.Convert all the strings to title caps in a string array
(() => {
    var str = 'converting string to titlecase';
    str = str.split(' ')
    for(i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));  //Output:Converting String To Titlecase
    return str;
})();

// c.Sum of all numbers in an array
(() => {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var num1 = 0;
    for(i=0; i<num.length; i++){
        num1 = num1 + num[i];
    }
    console.log(num1) //Output:55
})();

// d.Return all the prime numbers in an array
let arr = [3, 12, 50, 23, 0];
(() => {
  function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}

arr.forEach(function(element){
  let isPrime = checkPrime(element);
  if(isPrime){
    console.log(element); //Output:
  }                       //3
});                       //23
})();                    

// e.Return all the palindromes in an array
(() => {
    function isPalindrome(str) {
      let newStr = str;
      str = str.split('').reverse().join('');
      return str == newStr;
    }
  
    function palindromeArr(arr) {
      let newArr = [];
      for (i = 0; i < arr.length; i++) {
          if (isPalindrome(arr[i])) {
              newArr.push(arr[i])
          }
      }
      return newArr;
  }
  
  let arr = ['mom', 'dad', 'palindrome', '1991', '1996'];
  let str = palindromeArr(arr);
  for (let result of str) {
      console.log(result);  // Output:
  }                         // mom
})();                       // dad
                            // 1991  

// f.Return median of two sorted arrays of the same size.
(() => {
  let arr1 = [1, 5, 16, 11, 3];
  let arr2 = [4, 2, 15, 10, 13];
  let joinArr = arr1.concat(arr2);
  let sortArr = function(a, b) {
  return a - b;
}

let newArr = joinArr.sort(sortArr);

let medianArr = function(newArr){
  let median;
  if(newArr.length % 2 != 0){
    let midIndex = Math.floor(newArr.length / 2);
    median = newArr[midIndex];
    console.log(median);
  }else{
    let midIndex = Math.floor(newArr.length / 2);
    median = (newArr[midIndex] + newArr[midIndex - 1]) / 2;
    console.log(median); //Output: 7.5
  }
}
medianArr(newArr); 
})();

// g.Remove duplicates from an array
(() => {
    var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
    console.log([...new Set(arr)]); //Output:
  })();                             //[ 'apple', 'mango', 'orange' ]

// h.Rotate an array by k times
(() => {
    let arr = [1, 2, 3, 4, 5];
    let n = arr.length;
    let k = 2;
    k = k % n;
    for (let i = 0; i < n; i++) {
      if (i < k) {
          console.log(arr[n + i - k]);
      }
      else {
          console.log((arr[i - k]));
      }
  }
})();    //Output:
        // 4 
        // 5 
        // 1 
        // 2 
        // 3 

        
// 3.Do the below programs in arrow functions.
// --------------3.ARROW FUNCTION---------------------
// a.Print odd numbers in an array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr = [];
var oddNumber = (num) => {
    for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 1) {
            arr.push(num[i]);
        }
    }
};
oddNumber(num);
console.log(arr); //Output:[ 1, 3, 5, 7, 9 ]

// b.Convert all the strings to title caps in a string array
var str = "converting string to titlecase";
var strUppercase = (str) => {
    str = str.split(' ')
    for (i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(strUppercase(str)); //Output:Converting String To Titlecase

// c.Sum of all numbers in an array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num1 = 0
var sum = (num) => {
    for (i = 0; i < num.length; i++) {
        num1 = num1 + num[i]
    }
};
sum(num);
console.log(num1); //Output:55

// d.Return all the prime numbers in an array
let arr = [3, 12, 50, 23, 0];
let chkPrime = (number) => {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
arr.forEach(function (element) {
  let isPrime = checkPrime(element);
  if (isPrime) {
    console.log(element); //Output:
    }                    //3
});                     //23


// e.Return all the palindromes in an array
let isPalin = (str) => {
    let newStr = str;
    str = str.split('').reverse().join('');
    return str == newStr;
}

let palinArr = (arr) => {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (isPalin(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let arr = ['mom', 'dad', 'palindrome', '1991', '1996'];
let str = palinArr(arr);
for (let result of str) {
    console.log(result);
}  //Output:
// mom
// dad
// 1991