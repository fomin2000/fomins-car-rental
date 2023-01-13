const bookBtn = document.querySelector(".bookNow");
const carContainer = document.getElementById("carCards");
const removeBtn = document.querySelector('.removeRental')

const bookRental = async (event) => {
    event.preventDefault()

    let id = event.target.getAttribute('id')
    
    if (id) {
        const response = await fetch(`/api/cars`, {
            method: 'PUT',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to book a car!');
        }
    }
}


const removeRental = async (event) => {
    event.preventDefault()

    let id = event.target.getAttribute('id')
    

    if (id) {
        const response = await fetch(`/api/cars/remove`, {
            method: 'PUT',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to remove your rental!');
        }
    }
}

if (bookBtn) {
bookBtn.addEventListener('click', bookRental)
}

if (carContainer) {
carContainer.addEventListener('click', bookRental);
}

if (removeBtn) {
removeBtn.addEventListener('click', removeRental)
}