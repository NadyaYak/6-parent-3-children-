// child  Functions

const makeBed = () =>{
  console.log("Making bed ")
}
const vacuumFloor = () =>{
  console.log("Vacuuming floor")
}                          
const washDishes = () =>{
  console.log("Washing dishes")
}
const throwGarbage = () =>{ 
 console.log("Throwing garbage")
}
const mopFloor = () =>{
  console.log("Moping floor")
}
const boilEggs = () =>{
  console.log("Boiling eggs")
}
const addMayo= () =>{ 
  console.log("Adding mayo")
}
const cleanMirror = () =>{ 
  console.log("Cleaning mirror")
}
const mixIngredients =() =>{
  console.log("Mixing Ingredients")
}


//Parent Functions
const cleanYourBedroom = () =>{
makeBed()
vacuumFloor()
mopFloor()
  
}

const cleanKitchen = () =>{
 washDishes()
 throwGarbage()
 mopFloor()
}

const makeSalad = () =>{
boilEggs()
addMayo()
mixIngredients()
}


const cleanLivingRoom = () =>{
  vacuumFloor()
  mopFloor()
  cleanMirror()
}

const cleanBathroom = () =>{
mopFloor()
cleanMirror()
throwGarbage()
}

const doChores = () =>{
console.log("Now doing chores")
  cleanBathroom()
  cleanLivingRoom()
  cleanKitchen()
  cleanYourBedroom()
  makeSalad()  
  
}
doChores();