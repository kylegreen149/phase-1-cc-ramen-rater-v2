// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code

  const getDetailImage = document.querySelector(".detail-image")
  getDetailImage.src = ramen.image
    
  const getRamenName = document.querySelector(".name")
  getRamenName.textContent = ramen.name
  
  const getRestaurantName = document.querySelector(".restaurant")
  getRestaurantName.textContent = ramen.restaurant
  
  const getRating = document.querySelector("#rating-display")
  getRating.textContent = ramen.rating
  
  const getComment = document.querySelector("#comment-display")
  getComment.textContent = ramen.comment
  
};

const addSubmitListener = () => {
  // Add code
  
  const getFormId = document.getElementById("new-ramen")

  getFormId.addEventListener("submit", (event) => {
    event.preventDefault()

    const getNewName = document.getElementById("new-name")
    const getNewRestaurant = document.getElementById("new-restaurant")
    const getNewImage = document.getElementById("new-image")
    const getNewRating = document.getElementById("new-rating")
    const getNewComment = document.getElementById("new-comment")

    const newRamen = {
      name: getNewName.value,
      restaurant: getNewRestaurant.value,
      image: getNewImage.value,
      rating: getNewRating.value,
      comment: getNewComment.value
    }
    
    addNewRamen(newRamen)

  })
}

function addNewRamen(ramen) {
  const ramenMenu = document.getElementById("ramen-menu")
  const displayRamenImage = document.createElement("img")
  displayRamenImage.src = ramen.image

  ramenMenu.appendChild(displayRamenImage)
  
  displayRamenImage.addEventListener("click", () => {
    handleClick(ramen)
  })
}

const displayRamens = () => {
  // Add code
  const ramenMenu = document.getElementById("ramen-menu")
 
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(ramens => {
    ramens.forEach(ramen => addNewRamen(ramen))
      // const displayRamenImage = document.createElement("img")
      // displayRamenImage.src = ramen.image

      // ramenMenu.appendChild(displayRamenImage)
      
      // displayRamenImage.addEventListener("click", () => {
      //   handleClick(ramen)
      // })
      handleClick(ramens[0])
  })
}


const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
     // Invoke displayRamens here
    // Invoke addSubmitListener here
    displayRamens()
    addSubmitListener()
  })
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};