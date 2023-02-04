const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
const students = []
const expelled = []


const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = htmlToRender
}

// showing the cards on the DOM 

const showCards = (array) => {
  let domString = ""
  for (const arr of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${arr.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${arr.house}</h5>
      <p class="card-text">${arr.student}</p>
      <a href="#" class="btn btn-primary" id="expel--${arr.id}">Expel</a>
    </div>
  </div>`
  }
  renderToDom(".houses", domString)
}

// showCards(houses)


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
  showCards(students)
})

hufflepuffButton.addEventListener("click", () => {
  const hufflepuffFilter = houseFilter(students, "Hufflepuff")
  showCards(hufflepuffFilter)
})

slytherinButton.addEventListener("click", () => {
  const slytherinFilter = houseFilter(students, "Slytherin")
  showCards(slytherinFilter)
})

gryffindorButton.addEventListener("click", () => {
  const gryffindorFilter = houseFilter(students, "Gryffindor")
  showCards(gryffindorFilter)
})

ravenclawButton.addEventListener("click", () => {
  const ravenclawFilter = houseFilter(students, "Ravenclaw")
  showCards(ravenclawFilter)
})


// Add Student Function

const createStudent = (event) => {
  event.preventDefault()
  let studentIdCount = 1


  const newStudent = {
    student: document.querySelector("#inputform").value,
    house: houses[Math.floor(Math.random()*houses.length)],
    id: studentIdCount
    }

    if(newStudent.house === "Gryffindor") {
      newStudent.image = "https://m.media-amazon.com/images/I/71qheAe+f6L.jpg"
    } else if (newStudent.house === "Hufflepuff") {
      newStudent.image = "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88364/91134/Harry-Potter-Hufflepuff-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__21122.1507644096.jpg?c=2"
    } else if (newStudent.house === "Slytherin") {
      newStudent.image = "https://cdn11.bigcommerce.com/s-ydriczk/products/88362/images/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640618.450.659.jpg?c=2"
    } else if (newStudent.house === "Ravenclaw") {
      newStudent.image = "https://m.media-amazon.com/images/I/61iys32RuAL.jpg"
    }

  students.push(newStudent)
  studentIdCount++
  showCards(students)

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
      <p class="card-text">${arr.house}</p>
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
     
    students.forEach((item, index) => {
      if (item.id === Number(houseId)) {
        expelled.push(item)
        students.splice(index, 1)
        showCards(students)
        showExpelled(expelled)
      } 
    }) 
  }
})

// Blank Alert

const forms = document.querySelector("form")
const text = document.querySelector("#inputform")

form.addEventListener("submit", (e) => {
  let textField = text.value
  if (textField === "") {
    alert("Fill in the form first!")
  } 
})
