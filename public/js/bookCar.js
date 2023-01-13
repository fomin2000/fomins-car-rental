const bookBtn = document.querySelector(".bookNow");
const carContainer = document.getElementById("carCards");


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




if (bookBtn) {
bookBtn.addEventListener('click', bookRental)
}



if (carContainer) {
carContainer.addEventListener('click', bookRental);
}