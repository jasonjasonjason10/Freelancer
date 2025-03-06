// const freelancers = [
//   { name: "Alice", price: 30, occupation: "writer" },
//   { name: "Bob", price: 50, occupation: "teacher" },
//   { name: "Joe", price: 25, occupation: "gardener" },
//   { name: "Alan", price: 51, occupation: "programmer" },
//   { name: "Lisa", price: 43, occupation: "teacher" },
//   { name: "Sally", price: 81, occupation: "teacher" },
//   { name: "Billy", price: 43, occupation: "teacher" },
//   { name: "Tony", price: 76, occupation: "programmer" },
//   { name: "Carol", price: 47, occupation: "teacher" },
//   { name: "Thor", price: 72, occupation: "driver" },
// ];

const names = ["Alice", "Bob", "Joe", "Alan", "Lisa", "Sally", "Billy", "Tony", "Carol", "Thor"];
const occupations = ["writer", "teacher", "programer", "driver"];
const available = [
  {
    name: "Alice",
    price: 30,
    occupation: "writer",
  },
  {
    name: "Bob",
    price: 50,
    occupation: "teacher",
  },
];

//random price generating
function randomPrice(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//this is adding a new freelancer to the page (no render set yet)
function addFreelance() {
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  const price = randomPrice(20, 100);
  available.push({ name, price, occupation });
}

//Making a function to render
function renderFreeLance() {
  const freelance = document.querySelector("#container");
  const availableElement = available.map((lancer) => {
    let freelanceElement = document.createElement("div");
    freelanceElement.classList.add("box");
    freelanceElement.textContent = `Name:${lancer.name}.   $${lancer.price} Tittle:${lancer.occupation}`;
    return freelanceElement;
  });
  freelance.replaceChildren(...availableElement);
}

function renderAverage() {
  //calculate avg after adding a new freelancer
  //get available
  //get avg (sum / length)
  const averageElement = document.querySelector("#avg");
  let sum = 0;
  for (let i = 0; i < available.length; i++) {
    sum += available[i].price;
  }
  const average = sum / available.length;
  averageElement.textContent = Math.floor(average);
}

const freelanceInterval = setInterval(() => {
  addFreelance();
  renderFreeLance();
  renderAverage();
}, 2000);

// -------TEST--------//
// console.log(available);
// addFreelance();
// console.log(available);
