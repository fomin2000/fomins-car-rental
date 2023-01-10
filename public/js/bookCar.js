const bookBtn = document.querySelector(".bookNow");
const carContainer = document.getElementById("carCards");


function bookRental(event) {
    console.log("Make Reservations ....")
    // What has to happen?
    //console.log(event.target);
    //console.log(event.target.getAttribute('id'))
    //console.log(this);
    
    //let user = req.session.id;
    let car_id = event.target.getAttribute('id');
    console.log(car_id)
    // capture any data we need 
    // user_id   --> to make User association
    // which car was selected { id, name, description, year, type, price }
    

    // send a request to UPDate 
    // 1.) Update the Availability in our Stock (car_id) --> filter through the DB and remove that item
    // 2.) Update the Users reservation
    fetch(`/cars/${car_id}`, {
        method: 'PUT',
        body: JSON.stringify(car_id)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // IF one needs to be updated first 
        })
        .catch(err => {
            console.log(err);
        });
    
    // Redirect to Users Reservations (or whereever)
}

bookBtn.addEventListener('click', bookRental)
carContainer.addEventListener('click', bookRental);