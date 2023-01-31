const houses = [
  {
    student: "Harry Potter",
    house: "Gryffindor"
  },
  {
    student: "Cedric Diggory",
    house: "Hufflepuff"
  },
  {
    student: "Draco Malfoy",
    house: "Slytherin"
  },
  {
    student: "Luna Lovegood",
    house: "Ravenclaw"
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
      <p class="card-text"></p>
    </div>
  </div>`
  }
  renderToDom(".houses", domString)
}


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
  const student = document.querySelector("#form")

  // const houseOptions = ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"]

  const newStudent = {
    student: student.value, 
  }

  houses.push(newStudent)

  showCards(houses)

} 

const addButton = document.querySelector("#sort")
addButton.addEventListener("click", createStudent)
