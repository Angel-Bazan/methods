//filtering items. The first mehtod we are going to use is filter

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

// The last method will be the includes method because this doesn't 