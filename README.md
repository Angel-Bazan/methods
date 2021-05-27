# Array Methods


# map()

### Description:

applies a function on every element in an array. A new array is then returned

### How it works:

- Takes a callback function that is called once for each element.
- Calls the callback function and gets the result of the operation run on the element
- Returns a new array with the results> The .map() method creates a new array and doesn't mutate the old array.

### Syntax:

```jsx
array.map(function(currentValue, index, arr), thisValue)

let newArr = oldArr.map((val, index, arr) => {
	//return element to new Array
})
```

### Time Complexity:

0(n)

### Example 1:

Getting each item (name) and (price) from the array 

```jsx
const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
]

const itemNames = items.map((item) => {  // named a variable itemNames in this array using map we are going to each item 
    return item.name  // we are asking to return the name of that item in this method 
    return item.price // we can also ask to return the price but only use return once or else it will give us an error 
}) 
console.log(itemNames)  // In the console we are going to see name of the items EX: Bike, TV .... etc 
```

### Example 2:

return the number power by two inside the array 

```jsx

const array1 = [4, 5, 2, 30];

// pass a function to map
const map1 = array1.map(x => x ** 2);

console.log(map1);
// expected output: Array [16, 25, 4, 900]
```

### Example 3:

double the numbers by two 

```jsx
let numbers = [5, 6, 8]
let doubles = numbers.map(function(num) { // we use function containing an argument instead of an arrow function 
  return num * 2
})

// doubles is now   [10, 12, 16]
// numbers is still [5, 6, 8]
```

# reduce()

### Description:

used to apply a function to each element in the array to reduce the array to a single value


### Syntax:

```jsx
let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);
```

### Time Complexity:

0(n)

### Example 1:

find the total price of all items 

```jsx
const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
] 

const total = items.reduce((currentTotal, item) => {  // getting the total price of this array . The reduce method takes an item and a property that we want everything to reduce too. Always want to have the currentTotal first
    return item.price + currentTotal  // 
}, 0) //this 0 is our starting point we always want to put a starting point in this case it will be 0 

console.log(total) // so how it works is that it starts at 0 and adds to the next one which is 100 so now the currentTotal is 100 and keeps adding and so on ... 
```


### Example 2:
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.


```jsx
const ops = {
    'AND': (a, b) => a && b,
    'OR': (a, b) =>  a || b,
    'XOR': (a, b) => a !== b
  }
  
  
  function logicalCalc(array, op){
    return array.reduce(ops[op]);
  }
```

### Example 3:
Given a non-empty array of integers, return the result of multiplying the values together in order.

```jsx
function grow(x){
    const reducer = (a, b) => a * b; 
      
      return x.reduce(reducer);
```

## filter()

### Description :

returns a new array created from all elements that pass a certain test preformed on an original array

### How it works:

- Will take a test function
- Returns a new array containing the elements that matches the set test
- Returns an empty array if there are no matches

### Syntax:

```jsx
let newArr = oldArr.filter(callback);
```

### Time Complexity:

0(n)

### Example 1:

filter out all the prices that are greater or equal to 100

```jsx
const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
]

const filteredItems = items.filter((item) => {  // named a variable to filteredItems to make it easier to console out
    return item.price <= 100
}) 
console.log(items) // consoles all of the items 
console.log(filteredItems) // consoles only the items that are less than or equal too $100 
```

### Example 2:

Output all the word lengths that are less than 5

```jsx

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 5);

console.log(result);
// expected output: Array ["spray", "limit", "elite"]
```

### Example 3:

Create an array of numbers that are greater than the given value 

```jsx
function higherValue(value) {
    return value >= 40
  }
  
  let filtered = [32, 5, 18, 130, 40].filter(isBigEnough)
  // filtered is [32, 130, 40]
```

## forEach()

### Description:

executes a function on each element in an array

loops through an array

### How it works:


- Current Value (required) - The value of the current array element
- Index (optional) - The current element's index number
- Array (optional) - The array object to which the current element belongs

### Time Complexity:

0(n)

### Example 1:

Get the name of the items listed in the given array:

```jsx

const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
] 

items.forEach((item) => {  // similar to a for loop but will take a function instead 
    console.log(item.name) // console log all the name of the items already to be printed out  
```

### Example 2:

For each element in the array get the item price 

```jsx
const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
] 

items.forEach((item) => {  // similar to a for loop but will take a function instead 
    console.log(item.price) // console log all the price of the items already to be printed out  
})
```

### Example 3:

Output each element of the array 
```jsx
const array1 = ['dog', 'cat', 'mice'];

array1.forEach(element => console.log(element));

// expected output: "dog"
// expected output: "cat"
// expected output: "mice"

```
## sort()

### Description: 

sorts the elements of an array and returns the new sorted array.

### How it works:
Ouputs the array either ascending or descending orders
### Time Complexity:

0(n log(n))

### Example 1:

Find the Difference in Age between Oldest and Youngest Family Members

```jsx
function differenceInAges(ages){
let x = ages.sort((a,b) => a - b)[0]
let y = ages.sort((a,b) => a - b)[ages.length - 1]

return [x, y, y - x]
}
```

### Example 2:

sort in alphabetical order in descending order

```jsx
let elements = [
    'fire', 'water', 'earth', 'wind', 'space'
];
animals.sort((a,b) => b - a);

console.log(elements)// [ 'wind', 'water', 'space', 'fire', 'earth' ]
```

### Example 3:
Sort the numbers in ascending order 

```jsx 
let numbers =[ 5,1,4,3,2];
numbers.sort((a,b) => a - b); 

console.log(numbers) // [1,2,3,4,5]
```

## slice()

### Description :

slice method can takes two arguments, first is start index and second is end index and returns an array that has only the elements between those two indexes. The start index is required, the end index optional, if end index is not given then extract till end of the array.

### How it works:

### Syntax:

```jsx
array.slice(start, end)
```

### Time Complexity:

0(n)

### Example 1:

Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

```jsx
function first(arr, n) {
  if(n == 0)
    return []; 
  if(n == null)
    return arr.slice(0,1);
  if(n > 0)
   
    return arr.slice(0,n);
}
```

### Example 2:

return an array of hamburger and fries

```jsx
const numbers = [hot-dog, pizza, hamburger, fries, cake];
const sliced = numbers.slice(2,4);
console.log(sliced);

//output: Array [hamburger,fries]
```

### Example 3:

Seperate the citrus fruits from the array of fruits

```jsx
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)


// citrus contains ['Orange','Lemon']
```

## pop()

### Description:

pop method removes the last element from an array and returns that removed element.

### How it works:

- Removes the element at the last index of the array.
- Mutates the parent array reducing the length.
- Returns the last element.

### Syntax:

```jsx
array.pop()
```

### Time Complexity:

0(1)

### Example 1:

remove an item in a list and return the list

```jsx
let items = ['Cedar', 'Fruits', 'Table'];

// Remove last item in list
let newItems = items.pop();

// Output modified list
console.log(items);

// Output removed item
console.log(newItems)

//output: ["Cedar","Fruits"]
//output: Table
```

### Example 2:
The last fish in the array got adopted counsole log a new array 

```jsx
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

```

### Example 3: 
Remove the last item in the array 

```jsx 
const groceries = ['bread' , 'oranges' , 'tortillas', 'meat',]; 

const popped = groceries.pop(); 

console.log(groceries); // ['bread' , 'oranges' , 'tortillas' ] 

``` 

## shift()

### Description :

This method takes out the first element from an array and returns it. The shift method mutates the array during this process, reducing its length.

### How it works:

- Removes the element at the beginning of the array.
- Mutates the parent array reducing the length.
- Returns the removed element

### Syntax:

```jsx
array.shift()
```

### Time Complexity:

0(n)

### Example 1:

remove the first number in the list

```jsx
// List of numbers
const list = [1, 2, 3, 4, 5]

// Remove first number
const newList = list.shift()

// Output result
console.log(newList)

//output: 1
```

### Example 2:

remove the index element from an array

```jsx
// New array
const avengers = ['ironman', 'hulk', 'spiderman', '', 'four'];

// Remove the first element
numbers.shift();

// Output result
console.log(numbers);

//output: ["one","two","three","four"]
```

### Example 3:

## push()

### Description :

This methods adds one or more value to the last position of an array. This method mutates the array returning the new length of the array.

### How it works:

- Takes a value or values as arguments.
- Adds the value(s) to the end of the array.
- Returns the new length of the array.

### Syntax:

```jsx
array.push(element)
```

### Time Complexity:

0(1)

### Example 1:

add a new value to the end of the array

```jsx
// List of numbers
const numbers = [10, 20, 30, 40, 50];

// Add a number to the end
numbers.push(60);

// Output result
console.log(numbers);//[10,20,30,40,50,60]
```

### Example 2:

add a new item to todo list

```jsx
// List of todos
const todos = [{name: 'Clean room', complete: false}];

// Add todo item
todos.push({name: 'Cook food', complete: true})

// Output updated todo list
console.log(todos)//[{"name":"Clean room","complete":false},{"name":"Cook food","complete":true}]
```

### Example 3:

```jsx 
const items = ['towel', 'pen' , 'folder', 'water']; 

items.push('laptop')

console.log(items) = ['towel' , 'pen' , 'folder' , 'water' , 'laptop']
```

## unshift()

### Description :

similar to push method, unshift method add one or more elements to the front of an array and returns the updated length of the array.

### How it works: 
A new element is added to the array 

### Syntax:

```jsx
const newArray = oldArray.unshift(item1, item2, ...itemN)
```

### Time Complexity:

0(n)

### Example 1:

add new items to the the beginning of the array

```jsx
// Array of items
const items = ['Cedar', 'Fruits', 'Table'];

// Add new items to array
items.unshift('wine', 'glass');

// Display modified array
console.log(items);//["wine","glass","Cedar","Fruits","Table"]
```

### Example 2:

add items to cart

```jsx
// Array of objects in cart
const cart = [
  {
    item: "bread",
    price: 2000,
  },
  {
    item:"milk",
    price: 1000
  }
]

// Add item to cart
cart.unshift({item: "eggs", price: 500})

// Display modified array
console.log(cart)//[{"item":"eggs","price":500},{"item":"bread","price":2000},{"item":"milk","price":1000}]
```

### Example 3:
Add new pokemon to the pokedex 

```jsx 
//Array of pokemon in Pokedex 

const pokedex = [ 
 { 
  pokemon: "Pikachu", 
  level : 30,
 },
 {  
  pokemon: "Squirtle", 
  level: 21, 
  }
 ]
 
 pokedex.unshift({pokemon: "Charmander", level : 5})

// Display modified array
console.log(pokedex)//[{"pokemon":"Charmander","level":5},{"pokemon":"Pikachu","level":30},{"pokemon":"Squirtle","level":21}]
 
```

## includes()

### Description :

return true or false whether an array contains a certain element, which is passed as an argument in the includes function.

### How it works:

- Takes a value as an argument
- Checks the array if the value exists within the array
- Returns `true` or `false`.
- If no argument is provided, it returns `false`.

### Syntax:

```jsx
array.includes(searchValue, startIndex)
```

### Time Complexity:

0(n)

### Example 1:

Check if the array includes an item with the string ‘leon’.

```jsx
const names = ['sophie', 'george', 'leon', 'stephen', 'henry'];
const includesWaldo = names.includes('waldo');
// includesWaldo will be equal to true
```

### Example 2:

Check if the array contains a certain day

```jsx
// Weekdays
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Random day
const day = 'Monday';

// Verify inclusion in array
const isDay = days.includes(day);

// Output result
console.log(isDay);
```

### Example 3:
```jsx 
const fruits = ["Banana", "Orange", "Apple", "Mango" ]
console.log(fruits.includes("Banana", 3)

//Expected Output False 
```

## indexOf() 

### Description:

Returns the index of first (least) occurrence of element within the array which is given, or -1 if none is found. It also take second argument which is optional and specify from where to start.

### How it works:

### Time Complexity:

0(n)

### Example 1:

locate the values of a give value

```jsx
var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Example 2:

find all the occurrences of an element

```jsx
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Example 3:

find if an element exists in the array or not and update the array

```jsx
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.;
```

## every()

### Description:

The every method checks that each element in an array passes a set test. This method will return true if all the elements pass the set. Once an element that fails the test is found, the method returns false.

### How it works:

- Takes a callback function that implements a test
- Checks if all the elements pass the test
- Returns `true` if `every` element passes the test.
- Returns `false` an element fails test

### Syntax:

```jsx
const isCorrect = array.every(callback[,thisArg])
```

### Time Complexity:

0(n)

### Example 1:

Check if all items price are less than or equal to 1000

```jsx

const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
] 

const hasInexpensiveItems = items.every((item) => {  //  
    return item.price <= 1000 // The way the statement will return true because each item is less than or equal too 1000
})

console.log(hasInexpensiveItems) 
```

### Example 2:

Make sure each pokemon level is less than 1000 

```jsx
const pokemons = [   // a list of pokemons
    { pokemon: 'bulbasaur',     level: 100 }, 
    { pokemon: 'pikachu',       level: 200 }, 
    { pokemon: 'charmander',    level: 10  }, 
    { pokemon: 'pidgey' ,       level: 5   },
    { pokemon: 'mewtwo',        level: 500 }, 
    { pokemon: 'mew',           level: 1000}, 
    { pokemon: 'mankey',        level: 25  }
] 

const hasInexpensiveItems = pokemons.every((item) => {  //  
    return item.level <= 1000 //True
})
```

### Example 3:

Check if every value in the array are less than the current value 

```jsx
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```
## charAt()

### Description:
method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string 

### How it works:
Returns the character at the specified index in a string.


### Syntax:



```jsx
string.charAt(index)
```

### Time Complexity:
 
0(n)

### Example 1:

```jsx
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

```

### Example 2 

```jsx 


  const str = "HELLO WORLD";
  console.log(str.charAt(str.length-1));
//expected output: D

```

### Example 3 

```jsx 
const sentence = 'The quick brown fox jumps over the lazy dog.';



console.log(sentence.charAt(6));
// expected output: "i"
```

## charcodeAt()

### Description:
Returns the UTF -16 code of the character at the specified index in a string. 

### How it works:
Returns the decimal number from the UTF-16 code at the specified index in a string.


### Syntax:


```jsx
string.charCodeAt(index)
```

### Time Complexity:

0(n)

### Example 1:
```jsx
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.charCodeAt('5'));
// expected output: 117 
```

### Example 2: 
```jsx
const sentence = 'I wonder what will be the lucky number.';

console.log(sentence.charCodeAt('0'));
// expected output: 73
```

### Example 3: 
```jsx 
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 9;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 32 is equal to b"
```

## concat()

### Description:
The method is used to merge two or more arrays.The method returns a new array

### How it works:
This method is used to return a new array by combining two given arrays. 


### Syntax:

```jsx
array1.concat(array2)
```

### Time Complexity:

0(n)

### Example 1:
```jsx
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```
### Example 2: 
```jsx 
const fruit1 = ['pineapple', 'apple', 'pear'];
const fruit2 = ['mango', 'grape', 'strawberry'];
const fruits = fruit1.concat(fruit2);

console.log(fruits)
//expected output: Array ["pineapple", "apple", "pear", "mango", "grape", "strawberry"]

```

### Example 3: 
```jsx 
const team1 = ['Manchester City', 'Manchester United', 'Liverpool'];
const team2 = ['Chelsea', 'Leicester City', 'West Ham'];
const standings = team1.concat(team2);

console.log(standings)
//Expected Output: Array ["Manchester City", "Manchester United", "Liverpool", "Chelsea", "Leicester City", "West Ham"]
```
## includes()

### Description:
The method includes determines wheter an array includes a certain value amon its entries, returning true or false as appropiate. 

### How it works:
The method will determine if a certain value is included in the array.If the value is included in the array the method will return true if not it will return false


### Syntax:

```jsx
array.includes(value)  
```

### Time Complexity:

0(n)

### Example 1:


## indexOf()

### Description:
The method returns the first index at which a given element can be found in the array, or -1 if it is not present

### How it works:
The method will return the element's index number. if the element is not included in the array than it will return -1


### Syntax:


```jsx
indexOf(element) ; || indexOf(element, fromIndex)
```

### Time Complexity:

0(n)

### Example 1:
```jsx
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

### Example 2: 
```jsx 
const array1 = ['peach', 'Apple', 'pear'];

console.log(array1.includes('pear'));
// expected output: true
```

### Example 3 
```jsx 
//provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. 
function find(a, e) {
  return  a.includes(e) ? a.indexOf(e) : "Not found"

}
```

## match()


### Description:
The method retrieves the result of matching a string against a regular expression


### How it works:
The method will return the matching array objects from the given array. 


### Syntax:


```jsx
string.match(regexp)
```

### Time Complexity:

0(n)

### Example 1:
```jsx 
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]
```

### Example 2: 
```jsx 
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

### Example 3: 
```jsx 
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```
## repeat()

### Description:
The method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

### How it works:
The repeat method return a new string with a specified number of copies of the string it was called on. 


### Syntax:


```jsx
string.repeat(count)
```

### Time Complexity:

0(n)

### Example 1:
```jsx 
const chorus = 'Bad Bunny Baby. ';

console.log(`Como dice: ${chorus.repeat(3)}`);

// expected output: "Como dice: Bad Bunny Baby. Bad Bunny Baby. Bad Bunny Baby. "  
```

### Example 2:
```jsx
const str = "Hello world!";
str.repeat(2); 
//expected output: Hello world!, Hello world!
```

### Example 3: 
```jsx 
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
 
```

## replace()

### Description:
The method returns a new string with some or all matches of a pattern replaced by a replacement. 

### How it works:
The replace method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced 


### Syntax:


```jsx
string.replace(searchvalue, newvalue)
```

### Time Complexity:

0(n)

### Example 1:
```jsx 
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```

## search()

### Description: 
The search method executes a search for a match between a regular expression and to the string object 

### How it works:
The search method searches a string for a specified value, and returns the posiion of the match 

### Syntax: 
string.search(searchvalue)
```jsx

```

### Time Complexity:

0(n)

### Example 1:

## splice()

### Description:
The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. 

### How it works:
The splice method adds/remove items to/from an array, and returns the removed item(s)


### Syntax:
array.splice(index, howmany, item1, ....., itemX)

```jsx

```

### Time Complexity:

0(n)

### Example 1:


## split()

### Description:
The split() method is used to split a string into an array of substrings, and returns the new array. 

### How it works:
The split() method divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.


### Syntax:

```jsx
string.split(seperator, limit)
```

### Time Complexity:

0(n)

### Example 1:


## substr()

### Description:
This method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards 

### How it works:
The substr method extracts parts of a string, beginning at the character at the specified position, and returns the specified numbers of characters 


### Syntax:

```jsx
string.substr(start, length)
```

### Time Complexity:

0(n)

### Example 1:


## toLowerCase()

### Description:
The LowerCase() method converts a string to lowercase letters. 

### How it works:
Any strings that are passed by the lowercase method they become lowercase 


### Syntax:

```jsx

```

### Time Complexity:

0(n)

### Example 1:

## toUpperCase()

### Description:
The UpperCase method converts a string to uppercase letters 

### How it works:
Any method that passes through the uppercase method will output uppercase letters 


### Syntax:

```jsx

```

### Time Complexity:

0(n)

### Example 1:


## trim()

### Description:
The trim() method removes whitespace from both sides of a string 

### How it works:
The method removes the whitespace from both ends of a string


### Syntax:

```jsx
string.trim()
```

### Time Complexity:

0(n)

### Example 1:
