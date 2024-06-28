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
    window.location.href = 'index.html';
}

function goToForm() {
    document.querySelectorAll('.car-details').forEach(carDetail => { 
        carDetail.addEventListener('click', () => {
            const carId = this.getAttribute('id'); 
            window.location.href = 'form.html';
}) })}


function showMainContent() {
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
    document.getElementById('search-results').classList.add('hidden');
}

function searchCar(event) {
    event.preventDefault(); 

    const searchBar = document.getElementById('search-bar');
    const searchTerm = searchBar.value.toLowerCase();
    const result = carsArray.find(car => 
        car.make.toLowerCase().includes(searchTerm) || 
        car.model.toLowerCase().includes(searchTerm)
    );

    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; 

    if (result) {
        const carInfo = document.createElement('div');
        carInfo.className = 'car-info';

        const carImg = document.createElement('img');
        carImg.src = result.img;
        carImg.alt = `${result.make} ${result.model}`;

        const carDetails = document.createElement('div');
        carDetails.className = 'car-details';
        carDetails.id = "1";
        carDetails.innerHTML = `
            <h2>${result.make} ${result.model}</h2>
            <p>Type: ${result.type}</p>
            <p>Seats: ${result.seats}</p>
            <p>Gearshift: ${result.gearshift}</p>
            <p>Capacity: ${result.capacity}</p>
            <p>Price: ${result.price}</p>
            <p>Status: ${result.available ? 'Available' : 'Not available'}</p>
        `;

        carInfo.appendChild(carImg);
        carInfo.appendChild(carDetails);
        carInfo.addEventListener('click', goToForm);
        searchResults.appendChild(carInfo);
    } else {
        const noResult = document.createElement('p');
        noResult.textContent = 'Car not found';
        searchResults.appendChild(noResult);
    }

    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.textContent = 'Go Back';
    backButton.addEventListener('click', showMainContent);
    searchResults.appendChild(backButton);

    document.getElementById('main-content').classList.add('hidden');
    searchResults.classList.remove('hidden');
}

document.getElementById('search-button').addEventListener('click', searchCar);
