Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

  - Parameter: It accepts a seperator which can be any type of primitve value. 
  - Return: returns a string by concatenating all the elements of the array using the seprator. If array has 1 element then it will return the element in string without the using the seprator.
  -Example: 
```js
 let user = ["vikas", "prerna", "chetna", "arjun"]; 
user.join("-"); //'vikas-prerna-chetna-arjun'
let user = ["vikas"];
user.join('-'); //'vikas'
let numbers = [1, 2, 3, 4];
numbers.join("!"); // '1!2!3!4'
  ```


- `join` Its a method which creates and returns a string using the separator defined btw brackets.It does not mutates the element.

3. `flat`

- Parameter: accepts one parameter which will be the number until which we have to concat the sub-array elements to the new array. Defaults to 1.
  - Return: returns a new array concatenated with all the sub-arrays element into the new array.
  -Example: 
  ```js
  let number = [12,12,[4,23, [2,45]]];
  number.flat(); // [12, 12, 4, 23, Array(2)]  
  let number = [12,12,[4,23, [2,45]]];
  number.flat(2); // [12, 12, 4, 23, 2, 45]
  let num = [1,2,[22,9,[234,45],[2343,3454]]];
  num.flat(Infinity); // [1, 2, 22, 9, 234, 45, 2343, 3454]
  ```
- 'flat' Its method which helps to flaten the array if that array has sub-arrays, it will concatenate returns the new array. 

4. `push`

 - Parameter: It accepts multiple number of values which can be any type of value
  - Return: returns a modified array containing that values which are passed in the parameters.
  -Example: 
  ```js
  let userName = ['Vikas', 'Varun', 'Utkarsh', 'Jyoti']; 
  userName.push('vikas') // ['Vikas', 'Varun', 'Utkarsh', 'Jyoti' , 'vikas']
  userName.push('vikas','vikas','vikas') // ['Vikas', 'Varun', 'Utkarsh', 'Jyoti' , 'vikas','vikas','vikas','vikas',]
  userName.push('vikas','vikas','vikas',9) // (12) ['Vikas', 'Varun', 'Utkarsh', 'Jyoti', 'vikas', 'vikas', 'vikas', 'vikas', 'vikas', 'vikas', 'vikas', 9]
  ```
 - `push` Basically, it pushes or adds the element which is passed inside as a parameter.And returns a modified an array.   

5. `indexOf`

- Parameter: Accepts two parameter first will be the character, of which the index we have to find and the second is the index no. from where to start the search of that element. if provided index is greater than or equals to the array.length then -1 will be the output.If provided index is index then it will start searching from back to front. 
  - Return: returns the index of that element in the array, if not found -1 will be the answer.
  - Example: 
  ```js
  let userName = ['Vikas', 'Varun', 'Utkarsh', 'Jyoti'];
  userName.indexOf("Vikas") // 0
  userName.indexOf("Jyoti", -4) // 3
  userName.indexOf("i") // -1
  ```
 - 'indexOf' It helps to find the index of the given element passed inside the parameter.

6. `lastIndexOf`

 - Parameter: It accepts two parameter, first will be the element, of which the index we have to find and the second is the index no. from where to start the search of that element. It will search backwards.
  - Return: returns the index of that element in the array.
  -Example: 
  ```js
  let numbers = [12,13,12,34,34];
  numbers.lastIndexOf(34); // 4
  numbers.lastIndexOf(34, 3); // 3
  numbers.lastIndexOf(34, -1); // 4
  ```
 - `lastIndexOf` Its a method to find the first index of the element and it searches from backwards.

7. `includes`

- Parameter: It accepts the two parameter first will be the value to search for and second will be the index form where  to start(optional).  
  - Return: return boolean type of value.
  -Example: 
  ```js
  let userName = ['Vikas', 'Varun', 'Utkarsh', 'Jyoti'];
  userName.includes('Vikas') // true
  userName.includes('Vikas', 1) // false
  userName.includes('Utkarsh') // true
  ```
- `includes` It helps to find whether the variable is there in the array or not. 

8. `reverse`

- Parameter: Accepts nothing in the parameter
  - Return: return the reverse of the array, frist becomes the last element and the last element becomes the first element.
  -Example: 
  ```js
  let userName = ['Vikas', 'Varun', 'Utkarsh', 'Jyoti'];
  userName.reverse(); //  ['Jyoti', 'Utkarsh', 'Varun', 'Vikas'] (also mutates the array.)
  userName.reverse(); ['Vikas', 'Varun', 'Utkarsh', 'Jyoti']
  let numbers = [1, 2, 3, 4];
  numbers.reverse(); //(4) [4, 3, 2, 1]
  ```
- 'reverse' : It reverse of the array, frist becomes the last element and the last element becomes the first element.

9. `every`

- Parameter: accepts a callback function which give access to the element , index of it, new array.
  - Return: return boolean type of value.If, it matches the condition in every elements then it will be true. and if it doesn't even with a single element then it will return false.
  -Example: 
  ```js
  let user = ["12Vikas", "12Red", "12Orange", "12Peach"]; 
  user.every(function (userElement){
   return userElement.includes(1);
  }) // true
  let user = ["1Vikas", "1Red", "1Orange", "1Peach"]; 
  user.every(function (userElement){
   return userElement.includes("ika");
  }) // false
  ```
- 'every' It checks whether all elements statisfies the condition which is passed in the callback function. and return true or false based on that. 
10. `shift`

- Parameter: It does not accept any parameter.  
  - Return: It returns first element which is on the 0 index of the array.It deletes that element from it.
  - Example: 
  ```js
  let colors = ["red", 'yellow', 'blue', 'pink'];
  colors.shift(); // "red"
  colors.shift(); // 'yellow'
  colors.shift(); // 'blue'
  ```
- 'shift' - It basically removes the first element from the array returns it. And Also mutates the array.

11. `splice`

- Parameter: accepts three things in the parameter, first will be the index from where to start , second will be the total numbers elements to remove from that index and last will be the name of the element which we want to insert(we can put as many as we want), 
  - Return: returns the modified array.
  -Example: 
  ```js
  let colors = ["red", 'yellow', 'blue', 'pink'];
  colors.splice(0, 1, "brown"); // ['brown', 'yellow', 'blue', 'pink']
  colors.splice(0, 2, "red"); ['red', 'blue', 'pink'];
  colors.splice(0, colors.length, "red"); ['red'];
  
  ```
- 'splice' : It basically removes the defined element in the parameter, and mutates the array.

12. `find`

- Parameter: It basically accepts three parameters which element , index and  array.
  - Return: returns only single value, if it matches the condition of the callback Function.
  -Example: 
  ```js
  let numbers = [1,2,3,4,23,45,56,44];
  let indexOfEvenNumbers = []; function indexOfEven(num, index){ if (num % 2 === 0){return indexOfEvenNumbers.push(num, index);} }
  numbers.filter(indexOfEven); // [2, 4, 56, 44]
  indexOfEvenNumbers // [2, 1, 4, 3, 56, 6, 44, 7]
  
  let numbers = [1, 2, 3, 4,23,45,56,44];
  numbers.find((element) => (element > 2) ) // 3 
  ```
- 'find' : Its a method which return only a single value, if it matches the condition of the callback function.If doesn't , udefined will be returned.

13. `unshift`

- Parameter: accepts multiple value in it.
  - Return: and returns the new length of the modified array, modifies array by adding the given elements in the array.
  -Example: 
  ```js
  let user= [12,23,43];
  user.unshift(1,2,4) // user = [1,2,4,12,23,43]
  user.unshift("pink", "red"); user = // ["pink", "red",1,2,4,12,23,43]
  ```
- `unshift` It basically add elements in the begining of the array and shifts the previous element on the index

14. `findIndex`

- Parameter: It basically accepts three parameters which element , index and  array.
  - Return: returns only single value which will be the index, if it matches the condition of the callback Function.
  -Example: 
  ```js
  let array1 = [5, 12, 8, 120 ,130, 44];
  function findGreater(num){return num > 2};
  array1.findIndex(findGreater); // 0

  function findGreater(num){return num > 180};
  array1.findIndex(findGreater); // -1

  function findGreater(num){return num > 1};
  array1.findIndex(findGreater); // 0
  ```
  `findIndex` : Its a method which return only a index, if it matches the condition of the callback function.If doesn't, -1 will be returned.

15. `filter`

- Parameter: It accepts three parameters which element, index and array.  
  - Return: returns a new array consists of the value which passes the callback function.
  -Example: 
  ```js
  let array1 = [5, 12, 8, 120 ,130, 44];
  function findEven(num){return num % 2 === 0};
  array1.filter(findEven); // (5) [12, 8, 120, 130, 44]

  function findOdd(num){return num % 2 !== 0};
  array1.filter(findOdd);  // [5]
  ```

- 'filter' : It creates a new array with all elements that pass the test implemented by the provided function. Basically it returns truthy Or falsy values, if it will false , it will not get stored in the new array, if otherwise, then it will get stored into the new array.  

16. `flat`

- Parameter: accepts one parameter which will be the number until which we have to concat the sub-array elements to the new array. Defaults to 1.
  - Return: returns a new array concatenated with all the sub-arrays element into the new array.
  -Example: 
  ```js
  let number = [12,12,[4,23, [2,45]]];
  number.flat(); // [12, 12, 4, 23, Array(2)]  
  let number = [12,12,[4,23, [2,45]]];
  number.flat(2); // [12, 12, 4, 23, 2, 45]
  let num = [1,2,[22,9,[234,45],[2343,3454]]];
  num.flat(Infinity); // [1, 2, 22, 9, 234, 45, 2343, 3454]
  ```
- 'flat' Its method which helps to flaten the array if that array has sub-arrays, it will concatenate returns the new array.

17. `forEach`

- Parameter: It accepts callback function and in the which three arguements can be passed:
 1) the element
 2) The index
 3) New array
  - Return: returns undefined.
  - Example: 
  ```js
  let numbers = [1,2,34,5,76,8];
  numbers.forEach((element) => {console.log(element)}); // 1
  // 2
  // 34
  // 5
  // 76
  // 8 
  let numbers = [1,2,34,5,76,8];
  numbers.forEach((element) => {console.log(element * 2)}); 
  // 2
  // 4
  // 68
  // 10
  // 152
  // 16

  ```
- `forEach` Its a method which helps to execute an callback function once for each element.Does not mutates the array. 

18. `map`

- Parameter: accepts a callback function which consists of three arguements element , index , array.
  - Return: returns the modified array which will consists of result of calling function through each element.  
  -Example: 
  ```js

  let numbers = [12,2,3,4,5,6];
  function collection(element){ return element * 2; }  
  numbers.map(collection); // (6) [24, 4, 6, 8, 10, 12]

  let numbers = [12,2,3,4,5,6];
  function collection(element){ return element / 2; }  
  numbers.map(collection); // (6) [6, 1, 1.5, 2, 2.5, 3]
  ```
- `map` Its a method which does not mutates the array. Its helps to create a new array which will cosists the result of calling the function via each element.  

19. `pop`

- Parameter: does not accept any parameter;
  - Return: returns the last deleted element of the array. Also mutates it.
  -Example: 
  ```js
  let colors = ["red", "pink", "blue","brown"];
  colors.pop(); // "brown"

  let numbers= [12,3,43445,45423,4];
  numbers.pop(); // 4 
  
  ```
- 'pop': Pop method actually deletes the last element of the array and returns it.  

20. `reduce`

- Parameter: 
  - Return:
  -Example: 
  ```js


  ```

21. `slice`

- Parameter: accept two index first from where to start and last will be till.
  - Return: returns the deleted element.
  -Example: 
  ```js
  let colors = ['red', 'pink', 'blue']
  colors.slice(1,3) //(2) ['pink', 'blue']

  colors.slice(): //(3) ['red', 'pink', 'blue']
  ```
- `slice` Doesn't mutates the array, 

22. `some`

- Parameter: It accepts callback function and in the which three arguements can be passed:
 1) the element
 2) The index
 3) New array
  - Return: returns true or false, if every element which passes through the callback function returns true then the output will be true , otherwise it will be false.
  -Example: 
  ```js
  let numbers = [13,23,34,42];
  numbers.some((element) => {return element > 1  }) // true

    let numbers = [13,23,34,42];
  numbers.some((element) => {return element < 1  }) // false
  ```
- 'some': This method will helps to check whether any of the element that passes the callback function then it returns true, otherwise false.  
