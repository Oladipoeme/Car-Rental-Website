document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const carId = parseInt(params.get('id'), 10);

    const car = carsArray.find(c => c.id === carId);
    if (car) {
        document.getElementById('car-image').src = `../Assets/Images/${car.image}`;
        document.getElementById('car-name').textContent = car.name;
        document.getElementById('subtotal').textContent = `$${car.price.toFixed(2)}`;
        document.getElementById('tax').textContent = `$${(car.price * 0.1).toFixed(2)}`; // Assuming 10% tax
        document.getElementById('total-price').textContent = `$${(car.price * 1.1).toFixed(2)}`; // Subtotal + tax
    } else {
        console.log('Car not found');
    }
});
