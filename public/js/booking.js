const checkBtn = document.getElementById('checkAvailBtn')


function renderPage(event) {
    event.preventDefault()

    const choices = document.getElementsByName('flexRadioDefault')

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            const userChoice = choices[i].value

            document.location.href = `/cars/${userChoice}`
        }
        
    }

    // const pickupDate = document.getElementById('pickupDate').value.trim()
    // const dropoffDate = document.getElementById('dropoffDate').value.trim()

    


}

checkBtn.addEventListener('click', renderPage)