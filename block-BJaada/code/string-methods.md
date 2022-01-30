Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: we can only use string value while we are using the uppercase.
   - Return: basicallly, it returns the string into uppercase.
  - Example:
  ```js
   let user = "Vikas";
   user.toUpperCase(); // "VIKAS"
   let personDetails = "My profession will be the programmer from next year which is 2023."
   personDetails.toUpperCase(); // 'MY PROFESSION WILL BE THE PROGRAMMER FROM NEXT YEAR WHICH IS 2023.'
   let accountHolderName = "Pawan Kumar Singh"
  accountHolderName.toUpperCase(); //PAWAN KUMAR SINGH
```
 -`toUpperCase`  It converts any string value into uppercase, we can use a word or a chrarater or a sentence.     
 
3. `toLowerCase`

 - Parameter: we can only use string value while we are using the lowercase.
   - Return: basicallly, it returns the string into lowercase.
  - Example:
  ```js
   let user = "Vikas";
   user.toLowerCase(); // "vikas"
   let personDetails = "My profession will be the programmer from next year which is 2023."
   personDetails.toLowerCase(); // 'my profession will be the programmer from next year which is 2023.'
   let accountHolderName = "Pawan Kumar Singh"
  accountHolderName.toLowerCase(); // 'pawan kumar singh'
```
 -`toLowerCase`  It converts any string value into uppercase, we can use a word or a chrarater or a sentence.     

4. `trim`
 
 - Parameter:  It does not accept parameter.
 - Return: Basically,it will be remove all the white spaces from both the ends of the string.And returns a modified string.
 - Example: 
 ```js
 let user = " Vikas  ";
 user.tirm // "Vikas" 
 let userProfession = "  he do nothing   "
 userProfession.trim(); "he do nothing"
 let userBankAccountName =  "  Vikas Kumar singh  " 
 userBankAccountName.trim(); // "Vikas Kumar singh"
 ``` 
-"trim": Basically,it will be remove all the white spaces from both the ends of the string.


5. `trimEnd`

 - Parameter:  It does not accept parameter.
 - Return: Basically,it will be remove all the white spaces from the end of the string.And returns a modified string.
 - Example: 
 ```js
 let user = "Vikas  ";
 user.tirm // "Vikas" 
 let userProfession = "   he do nothing   "
 userProfession.trim(); "   he do nothing"
 let userBankAccountName =  "  Vikas Kumar singh  " 
 userBankAccountName.trim(); // "  Vikas Kumar singh"
 ``` 
-"trim": Basically,it will be remove all the white spaces from the end of the string.

6. `trimStart` 

 - Parameter:  It does not accept parameter.
 - Return: Basically,it will be remove all the white spaces from the start of the string.And returns a modified string.
 - Example: 
 ```js
 let user = "   Vikas  ";
 user.tirm // "Vikas  " 
 let userProfession = "   he do nothing   "
 userProfession.trim(); "he do nothing   "
 let userBankAccountName =  "  Vikas Kumar singh  " 
 userBankAccountName.trim(); // "Vikas Kumar singh  "
 ``` 
-"trim": Basically,it will be remove all the white spaces from the start of the string.

7. `concat`

 - Parameter: It accepts two parameter one will the string and the last one will be varaible in which before or after we have to add. we can add multiple string values.
 - Return: return a modified string.
 - For example:
  ```js
  let user = "Hello";
  user.concat(" World") // "Hello World" 
  let userName = "AltCampus" , tagline = "Everything you need to be a software developer.";
  userName.concat( " is ", tagline); // 'AltCampus is Everything you need to be a software developer.'
  let myname = "Vikas ";
  myname.concat("Singh");
  ```
  -concat : It concat the multiple string returns a modified string. 


8. `endsWith`

 -Parameter:  It accepts one parameter which  can be a character or a word.
 -Return: returns true or false by checking whether that character or a word ends with the last of the given string or not.
 -for eg: 
 ```js

let user = "Hello";
user.endsWith("e"); // false
let user = "Hello";
user.endsWith("x"); // false
let user = "Hello";
user.endsWith("o"); // true

 ```
`endsWith` - It checks that whether the element ends with given word or character or not.

9. `includes`

 -Parameter:  It accepts one parameter which  can be a character or a word.
 -Return: returns true or false by checking whether that character or a word is present in the thee given string.
 -for eg: 
 ```js
let user = "Hello";
user.endsWith("e"); // true
let user = "Hello";
user.endsWith("x"); // false
let user = "Hello";
user.endsWith("x"); // false
```
`includes`-  It checks whether the word includes this variable or not.

10. `indexOf`

Parameter - It accepts the character or word. (vice-versa)
Return - And returns the index number of that character or word.
-For eg: 
```js
let user1 = "Vikas";
user.indexOf("K") // -1 (When ever the word will not be available in the given variable then output will be always -1.)
let user = "vikas is";
user.indexOf("s") // 4
let user = "vikas is";
user.indexOf("S") // -1
 
```

`indexOf` - It will always tell the index no. if the word or the variable.

11. `lastIndexOf`

Parameter - It accepts the character or word. (vice-versa)
Return - And returns the last index number of that character or word.
-For eg: 
```js
let user1 = "Vikas";
user.lastIndexOf("K") // -1 (When ever the word will not be available in the given variable then output will be always -1.)
let user = "vikas is";
user.lastIndexOf("s") // 7
let user = "vikas is";
user.lastIndexOf("S") // -1
 
```

`indexOf` - It will always tell the last index no. of the word or the variable.

12. `padEnd`

Parameter - It accepts two parameter,first one will be the total length of the word or value, second one will be the thing you want to want.
Return - A modified string will be returned.Examples are given below.
for Example =
```js
let name = "Vikas";
name.padEnd(7,"45") // 'Vikas45'
let name3 = "Vikas";
name3.padEnd(5,"45") // 'Vikas'
let name2 = "Vikas";
name2.padEnd(5,"45") // 'Vikas' 

```
-padEnd : Its a method which add a value to the end of the given value. And returns a modified string.

13. `padStart`

Parameter - It accepts two parameter,first one will be the total length of the word or value, second one will be the thing you want to want.
Return - A modified string will be returned.Examples are given below.
for Example =
```js
let name = "Vikas";
name.padStart(7,"45") // '45Vikas'
let name3 = "Vikas";
name3.padStart(5,"45") // 'Vikas'
let name2 = "Vikas";
name2.padEnd(6,"45") // '4Vikas' 

```
-padEnd : Its a method which add a value to the start of the given value. And returns a modified string.

14. `repeat`


Parameter - It accepts parameter which will the no. of times we want to repeat.
Return - A modified string in which the number or string will be repeated by given times. 
For eg: 
```js

let name2 = "VIkas" ;
name2.repeat(4) // 'VIkasVIkasVIkasVIkas'
let name2= "VIkas" ;
name2.repeat() // '' (Empty string will be returned when no of value will be passed from the arguements)
let name1 = "Prerna";
name1.repeat(2) //"PrernaPrerna"
```
repeat- its a method to repeat the value.

15. `replace`

Parameter - It accepts parameter which will the  we have to replace.
Return - A modified string in which the number or string will be replaced by given data. 
For eg: 
```js

let name2 = "VIkas" ;
name2.replace("Vikas") // 'Vikas'
let name2= "VIkas" ;
name2.replace() // nothing will be replaced
let name1 = "Prerna";
name1.replace("gym") //"gym"
```
`repeat`- its a method to replace the value.

16. `slice`

Parameter - It accepts two parameter, first one will be the index no. from where to start and the last one is index no. from where to end.
Return - returns the string from the given index number till the given index number.
For example : 
```js

let user = "Vikas is going to be a programmer";
user.slice(0, 20); //'Vikas is going to be'
let user1 = "Vikas is going to be a programmer";
user.slice(10) // 'oing to be a programmer' (when second index is not given then by default it will print till the end.)
let user1 = "Vikas is going to be a programmer";
user.slice(10, 20); // 'oing to be';

```

`slice` - Its a method which print the sentenace from a given index to given index. 

17. `split`

Parameter - It accepts one parameter which will be value through which we have to split.
Return - returns mulitple string in an array.
for example :- 
```js

let user = "vikas is a developer.";
user.split(" "); //  ['vikas', 'is', 'a', 'developer.']
let user = "vikas is a developer.";
user.split("vikas") // ['', ' is a developer.']
let user = "vikas is a developer.";
user.split("e") // ['vikas is a d', 'v', 'lop', 'r.']

``` 
'split' - Its a method which splits the value from the given variable.

18. `substring`

Parameter - It accepts two parameter both will be the index number.
Return - returns a modified string.
For example : 
```js
let user = "vikas is a developer.";
user.substring(20,10); // ' developer'
let user = "vikas is a developer.";
user.substring(10, NaN); // 'vikas is a' (NaN is considered as 0 in substring.)
let user = "vikas is a developer.";
user.substring (NaN, 10); // 'vikas is a'

```

'substring': Its a method which helps to print the from given index to the given index. 