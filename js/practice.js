// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(3, 7));
// console.log(isLandscape(4, 2));
// console.log(isLandscape(10, 9));

// function fizzBuzz(number) {
//   if (typeof number !== "number") return NaN;
//   if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz";
//   else if (number % 3 == 0) return "Fizz";
//   else if (number % 5 == 0) return "Bizz";
//   else return number;
// }

// out = fizzBuzz();
// console.log(out);

// function checkSpeed(speed) {
//   const maxSpeed = 70;
//   const kmPerPoint = 5;

//   if (speed < maxSpeed + kmPerPoint) return `OK`;

//   const point = Math.floor((speed - maxSpeed) / kmPerPoint);
//   if (point < 12) return `OK; Point: ${point}`;
//   else return `Suspended; Point: ${point}`;
// }
// biker = checkSpeed(183);
// console.log(biker);

// function countTruthy(array) {
//   let i = 0;
//   for (let item of array) {
//     if (item) i++;
//   }
//   return i;
// }

// truthy = countTruthy([0, 1, NaN, 3, "", 5, 8]);
// console.log(truthy);

// function showProperties(obj) {
//   for (let item in obj)
//     if (typeof obj[item] === "string") console.log(item + ": " + obj[item]);
// }

// let movie = {
//   Title: "Avengers End Game",
//   Year: 2018,
//   Rating: 9.5,
//   Director: "Ibrahim",
// };

// truthy = showProperties(movie);
// console.log(truthy);

// let address = {
//     "street": "a",
//     "city": "b",
//     "zipcode": "c"
// }

// function showAddress(obj) {
//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// showAddress(address)

// // Factory function:
// function createAddress(street, city, zipcode) {
//   return {
//     street: street,
//     city: city,
//     zipcode: zipcode,
//   };
// }


// address = createAddress("a", "b", "c")
// address.showAddress()

// let address1 =new createAddress("a", "b", "c");
// let address2 =new createAddress("a", "b", "c");

// function CreateAddress(street, city, zipcode) {
//     this.street= street;
//     this.city= city;
//     this.zipcode= zipcode;
// }

// function areEqual(obj1, obj2){
//   return (obj1.street === obj2.street &&
//   obj1.city === obj2.city &&
//   obj1.zipcode === obj2.zipcode)
// }

// function areSame(obj1, obj2){
//   return (obj1 === obj2);
// }
// same = areSame(address1, address2)
// console.log(same)

// equal = areEqual(address1, address2)
// console.log(equal)

// // post constractor function 
// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;

//   this.views = 0;
//   this.comment = [];
//   this.isLive = false;

// }

// function range(min, max) {
//   const ar = [];

//   for (let i=min; i<=max; i++) {
//     ar.push(i);
//   }

//   return ar;
// }

// numbersU = range(-2,6)

// console.log(numbersU)


// function includesU(array, searchItem) {
//   for (let item of array) {
//     if (item === searchItem) return true; 
//   }

//   return false;
// }

// arr = [3,3,5,1,6,8,3,0]

// result = includesU(arr, 10)
// console.log(result)



// function except(array, exception) {
//   const result = [];
  
//   for (item of array) {
//     if (!exception.includes(item)) {
//       result.push(item)
//     }
//   }

//   return result;
// }

// arr = [3,3,5,1,6,8,3,0]
// arr2 = [3,5,8,0]

// result = except(arr, arr2)
// console.log(result)


// function move(array=[], index, offset) {
//   let position = index+offset
//   if (index>=array.length || index<0){
//     console.error("Invalid index");
//     return;
//   }

//   if (position>=array.length || position<0){
//     console.error("Invalid offset");
//     return;
//   }

//   const temp = array.splice(index, 1)[0];
//   array.splice(position, 0, temp);

//   return array;
// }

// arr = [3,3,5,1,6,8,3,0]
// arr2 = [3,5,8,0]

// result = move(arr, 5, -9)
// console.log(result)


// function countOccurence(array, item) {
//   let temp = 0;

//   for (let element of array) {
//     if (element===item) 
//       temp += 1;
//   }

//   return temp;
// }


// arr = [3,3,5,1,6,8,5,5,5,3,0]
// arr2 = [3,5,8,0]

// result = countOccurence(arr, 5)
// console.log(result)

// const movies = [
//   { title: "a", year: 2018, rating: 4.7 },
//   { title: "b", year: 2018, rating: 3.5 },
//   { title: "c", year: 2018, rating: 7.3 },
//   { title: "d", year: 2016, rating: 4.5 },
//   { title: "e", year: 2018, rating: 4.2 },
//   { title: "f", year: 2018, rating: 8.5 },
//   { title: "g", year: 2019, rating: 2.3 },
//   { title: "h", year: 2018, rating: 4.9 },
//   { title: "i", year: 2018, rating: 5.6 },
//   { title: "j", year: 2017, rating: 6.5 },
// ]



// filtered = movies.filter(value => value.year === 2018)
//                   .sort((a, b) => a.rating-b.rating)
//                   .reverse()
//                   .map(m => m.title)

// console.log(filtered)




// const movie = [
//   { title: "", year: 2018, rating: 8.5 },
//   { title: "", year: 2018, rating: 7.3 },
//   { title: "", year: 2018, rating: 5.6 },
//   { title: "", year: 2018, rating: 4.9 },
//   { title: "", year: 2018, rating: 4.7 },
//   { title: "", year: 2018, rating: 4.2 },
//   { title: "", year: 2018, rating: 3.5 },
// ]

// console.log(['f','c','i','h','a','e','b'])


// function Stopwatch(){
//   let startTime = null;
//   let endTime = null;
//   let running = false;
//   let duration = 0;

//   this.start = function() {
//     if (running) {
//       throw new Error("Stopwatch is already started.");
//     }
//     running = true;
//     startTime = new Date();
//   }
//   this.stop = function() {
//     if (!running) {
//       throw new Error("Stopwatch has not started yet.");
//     }
//     running = false;
//     endTime = new Date();
//     const second = (endTime.getTime() - startTime.getTime())/1000;
//     duration += second
//   }
//   this.reset = function() {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   }
//   this.duration = function() {
//     return duration;
//   }
//   // Object.defineProperty(this, "duration", {
//   //   get function() { return duration; }
//   // })
// }

  
// // time = new Date()

// const sw = new Stopwatch()

// document.getElementById("start").addEventListener("click", sw.start);
// document.getElementById("stop").addEventListener("click", sw.stop);
// document.getElementById("reset").addEventListener("click", sw.reset);

// // document.getElementById("start").onclick = sw.start()
// // document.getElementById("stop").onclick = sw.stop()
// // document.getElementById("reset").onclick = sw.reset()

// document.getElementById("body").innerHTML = sw.duration()





