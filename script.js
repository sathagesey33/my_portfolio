const scriptURL = 'https://script.google.com/macros/s/AKfycbwSDDLfRkilKc-eOhWMFmYrOaHZcBVcFAFl89trTuiFvYe6e40EKARTxI9HmicNH2mE/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('confMsg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Message sent succesfully'
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})