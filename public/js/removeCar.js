const removeBtn = document.querySelector('.removeRental')




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



if (removeBtn) {
    removeBtn.addEventListener('click', removeRental)
}