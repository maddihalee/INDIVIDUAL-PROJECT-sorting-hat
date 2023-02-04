const houses = [
  {
    id: 1,
    student: "Harry Potter",
    house: "Gryffindor"
  },
  {
    id: 2,
    student: "Cedric Diggory",
    house: "Hufflepuff"
  },
  {
    id: 3,
    student: "Draco Malfoy",
    house: "Slytherin"
  },
  {
    id: 4,
    student: "Luna Lovegood",
    house: "Ravenclaw"
  },
]

const expelled = [
  {
    id: 5,
    student: "Fred Weasley",
    house: "Expelled"
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
}

// showing the cards on the DOM 

const showCards = (array) => {
  let domString = ""
  for (const arr of array) {
    domString += `<div class="card">
    <h5 class="card-header">${arr.student}</h5>
    <div class="card-body">
      <h5 class="card-title">${arr.house}</h5>
      <button id="expel--${arr.id}">Expel</button>
      <p class="card-text"></p>
    </div>
  </div>`
  }
  renderToDom(".houses", domString)
}

showCards(houses)


// filtering function

const houseFilter = (array, houseString) => {
  const houseArray = []
  for (const arr of array) {
    if (arr.house === houseString) {
      houseArray.push(arr)
    }
  } return houseArray
}


// event listeners

const hufflepuffButton = document.querySelector("#hufflepuff")
const slytherinButton = document.querySelector("#slytherin")
const gryffindorButton = document.querySelector("#gryffindor")
const ravenclawButton = document.querySelector("#ravenclaw")
const showAllButton = document.querySelector("#all")

showAllButton.addEventListener("click", () => {
  showCards(houses)
})

hufflepuffButton.addEventListener("click", () => {
  const hufflepuffFilter = houseFilter(houses, "Hufflepuff")
  showCards(hufflepuffFilter)
})

slytherinButton.addEventListener("click", () => {
  const slytherinFilter = houseFilter(houses, "Slytherin")
  showCards(slytherinFilter)
})

gryffindorButton.addEventListener("click", () => {
  const gryffindorFilter = houseFilter(houses, "Gryffindor")
  showCards(gryffindorFilter)
})

ravenclawButton.addEventListener("click", () => {
  const ravenclawFilter = houseFilter(houses, "Ravenclaw")
  showCards(ravenclawFilter)
})

// Add Student Function

const createStudent = (event) => {
  event.preventDefault()
  const student = document.querySelector("#inputform")

  const houseOptions = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"]

  let randVal = () => {
    let x = Math.floor(Math.random() * houseOptions.length)
    return houseOptions[x]
  }

  const newStudent = {
    student: student.value, 
    house: randVal(),
    }

  houses.push(newStudent)

  showCards(houses)

  let form = document.querySelector("form")
  form.reset()
} 

const addButton = document.querySelector("#sort")
addButton.addEventListener("click", createStudent)

// Starting the sorting process

// let startButton = document.querySelector("#btn")
// let notVisible = document.querySelector("#page")


// document.getElementById("page").style.display = "none"

// startButton.addEventListener("click", () => {
//   document.getElementById("page").style.display = "block"
// })


// Showing Expelled Cards

const showExpelled = (array) => {
  let domString = ""
  for (const arr of array) {
    domString += `<div class="card">
    <h5 class="card-header">${arr.student}</h5>
    <div class="card-body">
    <h5 class="card-title">Expelled</h5>
      <p class="card-text"></p>
    </div>
  </div>`
  }
  renderToDom(".expelled", domString)
}

showExpelled(expelled)



// Expel Button 

let expel = document.querySelector("#expel")

const housesDiv = document.querySelector(".houses")

housesDiv.addEventListener("click", (event) => {
  if (event.target.id.includes("expel")) {
    const [, houseId] = event.target.id.split("--")
     
    houses.forEach((item, index) => {
      if (item.id === Number(houseId)) {
        expelled.push(item)
        houses.splice(index, 1)
        showCards(houses)
        showExpelled(expelled)
      } 
    }) 
  }
})

// expel
