function addCar(car) {
  carsArray.push(car);
}

function removeCar(car) {
  let index = carsArray.indexOf(car);
  if (index > -1) {
    carsArray.splice(index, 1);
  }
}
function home() {
  window.location.href = "index.html";
}

let isSwitched = false;
function switchLocations() {
    const pickupDropoff = document.getElementById('pickup-dropoff');
    const pickUpDiv = document.getElementById('pick-up-div');
    const dropOffDiv = document.getElementById('drop-off-div');
    const switchIcon = document.getElementById('switch-icon');

    if (isSwitched) {
        pickupDropoff.insertBefore(dropOffDiv, switchIcon);
        pickupDropoff.insertBefore(pickUpDiv, switchIcon.nextSibling);
} else {
    pickupDropoff.insertBefore(pickUpDiv, switchIcon);
    pickupDropoff.insertBefore(dropOffDiv, switchIcon.nextSibling);
}
    isSwitched =!isSwitched;
}

// var button = document.getElementById('rental-Button');
// button.disabled = car.available;

function goToForm() {
    const result = JSON.parse(localStorage.getItem("searchResult"));
    if (result) {
        localStorage.setItem("selectedCar", JSON.stringify(result)); 
        window.location.href = 'form.html'; 
    }
}


function showMainContent() {
  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("footer").classList.remove("hidden");
  document.getElementById("search-results").classList.add("hidden");
}
var result = {};
function searchCar(event) {
    event.preventDefault();
  
    const searchBar = document.getElementById("search-bar");
    const searchTerm = searchBar.value.toLowerCase();
    const result = carsArray.find(
      (car) =>
        car.make.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm)
    );
  
    if (result) {
      localStorage.setItem("searchResult", JSON.stringify(result));
      window.location.href = "car.html";
    } else {
      alert("Car not found");
    }
  }
  
  document.getElementById("search-button").addEventListener("click", searchCar);
  
  function populateCarDetails() {
    const carDetails = document.getElementById("car-details");
    const result = JSON.parse(localStorage.getItem("searchResult"));
  
    if (result) {

    const carInformation = document.getElementById("car-information");  
  
      const carImg = document.getElementById("insert-searched-image");
      carImg.src = result.img;
      carImg.alt = `${result.make} ${result.model}`;
  
      const carDetailsContent = `
          <h2>${result.make} ${result.model}</h2>
          <p>Type: ${result.type}</p>
          <p>Seats: ${result.seats}</p>
          <p>Gearshift: ${result.gearshift}</p>
          <p>Capacity: ${result.capacity}</p>
          <p>Price: $${result.price}</p>
          <p>Status: ${result.available ? "Available" : "Not available"}</p>
      `;
  
      carInformation.innerHTML += carDetailsContent;

      carImg.addEventListener("click", goToForm);
    } else {
      carDetails.textContent = "No car details available.";
    }
  }
  
 
  if (window.location.pathname.endsWith("car.html")) {
    document.addEventListener("DOMContentLoaded", populateCarDetails);
  }
  
  