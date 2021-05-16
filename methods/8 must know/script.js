//filtering items. The first mehtod we are going to use is filter: method creates a new array with all elements that pass the test implemented by the provided function.

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 5);

console.log(result);
// expected output: Array ["spray", "limit", "elite"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function higherValue(value) {
    return value >= 40
  }
  
  let filtered = [32, 5, 18, 130, 40].filter(isBigEnough)
  // filtered is [32, 130, 40]
//........................................................................................................................................

// Next method will be MAP this map converts an array to a new array so the items in the array are going to look slightly different 

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const array1 = [4, 5, 2, 30];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [16, 25, 4, 900]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [5, 6, 8]
let doubles = numbers.map(function(num) { // we use function containing an argument instead of an arrow function 
  return num * 2
})

// doubles is now   [10, 12, 16]
// numbers is still [1, 4, 9]

//........................................................................................................................................

// Next method will be the FIND method to find different items in our array 


const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
]

const foundItem = items.find((item) => {  // we will use the find method to look through each item and find the item that we want 
    return item.name === 'Album' // this return statement will give use the Album information; so this returns a true statement since the find method returns a true or false statement 
   
}) 
console.log(foundItem) // console this and in the console it will give use the item information 

///////////////////////////////////////////////////////////////////////////////////////////////////////

const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
]

const foundItem = items.find((item) => {  // we will use the find method to look through each item and find the item that we want 
    return item.price === 500 // this return statement will give use the phone price information; so this returns a true statement since the find method returns a true or false statement 
   
}) 
console.log(foundItem) // console this and in the console it will give use the item information 



///////////////////////////////////////////////////////////////////////////////////////////////////////
const array1 = [15, 22, 18, 130, 4];

const found = array1.find(element => element > 5);

console.log(found);
// expected output: 4

//........................................................................................................................................


// Next method will be the foreach method and it will not return anything or log anything; this makes it way easier to work with every element in the array so you wont have to write down the function 


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
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const array1 = ['dog', 'cat', 'mice'];

array1.forEach(element => console.log(element));

// expected output: "dog"
// expected output: "cat"
// expected output: "mice"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//........................................................................................................................................

// Next method is the some function; instead of returning a new array it is actually going to return true or false 


const items = [   // a list of items 
    { name: 'Bike',     price: 100 }, 
    { name: 'TV',       price: 200 }, 
    { name: 'Album',    price: 10  }, 
    { name: 'Book' ,    price: 5   },
    { name: 'Phone',    price: 500 }, 
    { name: 'Computer', price: 1000}, 
    { name: 'Keyoard',  price: 25  }
] 

const hasInexpensiveItems = items.some((item) => {  //  
    return item.price <= 100 // return true values if a single item returns true that the function is set as true 
})

console.log(hasInexpensiveItems) // see if anything in the array has items that $100 or less 

//........................................................................................................................................

// next array method every is very similar to some but it checks that every single item falls under that statement call 

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const items = [   // a list of items 
    { pokemon: 'bulbasaur',     level: 100 }, 
    { pokemon: 'pikachu',       level: 200 }, 
    { pokemon: 'charmander',    level: 10  }, 
    { pokemon: 'pidgey' ,       level: 5   },
    { pokemon: 'mewtwo',        level: 500 }, 
    { pokemon: 'mew',           level: 1000}, 
    { pokemon: 'mankey',        level: 25  }
] 

const hasInexpensiveItems = items.every((item) => {  //  
    return item.level <= 1000 // The way the statement will return true because each item is less than or equal too 1000
})

console.log(hasInexpensiveItems) 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

//........................................................................................................................................

// next method is the reduced method it will be returning the combination of all those different operations 

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
function grow(x){
    const reducer = (a, b) => a * b; 
      
      return x.reduce(reducer);




//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
const ops = {
    'AND': (a, b) => a && b,
    'OR': (a, b) =>  a || b,
    'XOR': (a, b) => a !== b
  }
  
  
  function logicalCalc(array, op){
    return array.reduce(ops[op]);
  }



// The last method will be the includes method because this doesn't 



// Map: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. 

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */ users.map(item => item.name)

alert( names ); // John, Pete, Mary

//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((user => ({
    fullName: `${user.name}` `${surname}`' 
    id: user.id
})));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
